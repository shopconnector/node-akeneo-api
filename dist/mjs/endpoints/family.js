import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#get_families
 */
export const get = (http, params) => raw.get(http, `/api/rest/v1/families`, {
    params: {
        ...params.query,
    },
});
/**
 * @see https://api.akeneo.com/api-reference.html#Familyvariant
 */
export const getVariants = (http, params) => raw.get(http, `/api/rest/v1/families/${params.familyCode}/variants`, {
    params: {
        ...params.query,
    },
});
