import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#get_products
 */
export const get = (http, { query }) => raw.get(http, `/api/rest/v1/products`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_products__code_
 */
export const getOne = (http, { code, query, }) => raw.getOne(http, `/api/rest/v1/products/${code}`, {
    params: query,
});
export const post = (http, { product }) => raw.post(http, `/api/rest/v1/products`, {
    data: product
});
export const getAll = (http, { query = {} }) => {
    // support legacy pagination_type "page"
    if (query?.pagination_type === 'page') {
        return raw.getAllByPage(http, `/api/rest/v1/products`, {
            params: query,
        });
    }
    return raw.getAllBySearchAfter(http, `/api/rest/v1/products`, {
        params: query,
    });
};
