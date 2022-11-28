import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#Category
 */
export const get = (http, params) => raw.get(http, `/api/rest/v1/categories`, {
    params: {
        ...params.query,
    },
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_categories__code_
 */
export const getOne = (http, { code, ...params }) => raw.getOne(http, `/api/rest/v1/categories/${code}`, {
    params,
});
export const getAll = (http, params) => raw.getAllByPage(http, `/api/rest/v1/categories`, {
    params,
});
