import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entities
 */
export const get = (http, { query }) => raw.get(http, `/api/rest/v1/reference-entities`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entity_records
 */
export const getRecords = (http, { referenceEntityCode, query, }) => raw.get(http, `/api/rest/v1/reference-entities/${referenceEntityCode}/records`, {
    params: query,
});
