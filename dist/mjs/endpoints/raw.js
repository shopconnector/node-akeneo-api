import * as querystring from 'querystring';
import errorHandler from '../error-handler';
export default {
    get: function get(http, url, config) {
        return http
            .get(url, {
            ...config,
        })
            .then((response) => {
            const { data } = response;
            return {
                ...(data.current_page ? { current_page: data.current_page } : {}),
                ...(data.items_count ? { items_count: data.items_count } : {}),
                items: data._embedded.items,
                _links: data._links,
            };
        }, errorHandler);
    },
    getOne: function getOne(http, url, config) {
        return http
            .get(url, {
            ...config,
        })
            .then((response) => {
            const { data } = response;
            return data;
        }, errorHandler);
    },
    post: function post(http, url, body) {
        return http
            .post(url, {
            ...body
        })
            .then((response) => {
            const { data } = response;
            return data;
        }, errorHandler);
    },
    getAllByPage: async function getAllByPage(http, url, { params = {} }) {
        const page = params?.page || 1;
        const { items_count = 0, items } = await this.get(http, url, {
            params: {
                ...params,
                with_count: true,
                limit: 100,
                page,
            },
        });
        return items_count / 100 > page
            ? {
                items: [
                    ...items,
                    ...(await this.getAllByPage(http, url, {
                        params: {
                            ...params,
                            limit: 100,
                            page: page + 1,
                        },
                    })).items,
                ],
            }
            : { items };
    },
    getAllBySearchAfter: async function getAllBySearchAfter(http, url, config) {
        const params = config?.params;
        const { items, _links } = await this.get(http, url, {
            params: {
                ...(params?.search_after ? { search_after: params.search_after } : {}),
                pagination_type: 'search_after',
                limit: 100,
            },
        });
        const nextUrl = _links?.next?.href;
        if (!nextUrl)
            return { items };
        const search_after = querystring.parse(nextUrl.split('?').at(1))?.search_after || '';
        return {
            items: [
                ...items,
                ...(await this.getAllBySearchAfter(http, url, {
                    params: {
                        ...params,
                        limit: params?.limit || 100,
                        pagination_type: 'search_after',
                        search_after,
                    },
                })).items,
            ],
        };
    },
};
