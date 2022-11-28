import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes
 */
export const get = (http, params) => raw.get(http, `/api/rest/v1/attributes`, {
    params: {
        ...params.query,
    },
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__code_
 */
export const getOne = (http, { code, }) => raw.getOne(http, `/api/rest/v1/attributes/${code}`);
export const getAll = (http, { query = {} }) => raw.getAllByPage(http, `/api/rest/v1/attributes`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__attribute_code__options
 */
export const getOptions = (http, { attributeCode, query, }) => raw.getAllByPage(http, `/api/rest/v1/attributes/${attributeCode}/options`, {
    params: query,
});
