import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models
 */
export const get = (http, { query }) => raw.get(http, `/api/rest/v1/product-models`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models__code_
 */
export const getOne = (http, params) => raw.getOne(http, `/api/rest/v1/product-models/${params.code}`, {});
export const getAll = (http, { query }) => {
    // support legacy pagination_type "page"
    if (query?.pagination_type === 'page') {
        return raw.getAllByPage(http, `/api/rest/v1/product-models`, {
            params: query,
        });
    }
    return raw.getAllBySearchAfter(http, `/api/rest/v1/product-models`, {
        params: query,
    });
};
