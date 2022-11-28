/**
 * Akeneo Management API SDK. Allows you to create instances of a client
 * with access to the Akeneo API.
 */
import createHttpClient from './http-client';
import * as endpoints from './endpoints';
const ATTRIBUTES_PATH = '/api/rest/v1/attributes';
const ASSET_MEDIA_FILES = '/api/rest/v1/asset-media-files';
const REFERENCE_ENTITIES_MEDIA_FILES = '/api/rest/v1/reference-entities-media-files';
const wrap = (http, fn) => (params) => fn(http, params);
/**
 * Create a client instance
 * @param params - Client initialization parameters
 *
 * ```javascript
 * const client = akeneo({
 *   url: AKENEO_API_URL,
 *   username: AKENEO_USERNAME,
 *   password: AKENEO_PASSWORD,
 *   clientId: AKENEO_CLIENT_ID,
 *   secret: AKENEO_SECRET,
 * });
 * ```
 */
export const createClient = (params) => {
    const http = createHttpClient(params);
    return {
        raw: {
            http,
        },
        category: {
            getOne: wrap(http, endpoints.category.getOne),
            get: wrap(http, endpoints.category.get),
            getAll: wrap(http, endpoints.category.getAll),
        },
        productModel: {
            getOne: wrap(http, endpoints.productModel.getOne),
            get: wrap(http, endpoints.productModel.get),
            getAll: wrap(http, endpoints.productModel.getAll),
        },
        product: {
            getOne: wrap(http, endpoints.product.getOne),
            get: wrap(http, endpoints.product.get),
            getAll: wrap(http, endpoints.product.getAll),
        },
        assetFamily: {
            getOne: wrap(http, endpoints.assetFamily.getOne),
            get: wrap(http, endpoints.assetFamily.get),
            getAll: wrap(http, endpoints.assetFamily.getAll),
            getAssets: wrap(http, endpoints.assetFamily.getAssets),
            getAsset: wrap(http, endpoints.assetFamily.getAsset),
            getAssetsAll: wrap(http, endpoints.assetFamily.getAssetsAll),
        },
        assetMediaFile: {
            /**
             *
             * @see https://api.akeneo.com/api-reference.html#get_asset_media_files__code
             */
            get: async (code) => http.get(`${ASSET_MEDIA_FILES}/${code}`, {
                responseType: 'arraybuffer',
                params: {},
            }),
        },
        referenceEntitiesMediaFile: {
            /**
             * @see https://api.akeneo.com/api-reference.html#get_reference_entity_media_files__code
             */
            get: async (code) => http.get(`${REFERENCE_ENTITIES_MEDIA_FILES}/${code}`, {
                responseType: 'arraybuffer',
                params: {},
            }),
        },
        attribute: {
            getOne: wrap(http, endpoints.attribute.getOne),
            get: wrap(http, endpoints.attribute.get),
            getAll: wrap(http, endpoints.attribute.getAll),
            getOptions: wrap(http, endpoints.attribute.getOptions),
            add: async ({ code, attribute }) => http.patch(`${ATTRIBUTES_PATH}/${code}`, attribute),
            addOption: async ({ attributeCode, code, option, }) => http.patch(`${ATTRIBUTES_PATH}/${attributeCode}/options/${code}`, option),
        },
        referenceEntity: {
            get: wrap(http, endpoints.referenceEntity.get),
            getRecords: wrap(http, endpoints.referenceEntity.getRecords),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity__code_
             */ add: async ({ code, body }) => http.patch(`/api/rest/v1/reference-entities/${code}`, body),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__code_
             */
            addAttribute: async ({ referenceEntityCode, code, attribute, }) => {
                await http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${code}`, attribute);
            },
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__attribute_code__options__code_
             */
            addAttributeOption: ({ referenceEntityCode, attributeCode, code, option, }) => http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options/${code}`, option),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_records
             */
            addRecords: ({ referenceEntityCode, records, }) => http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/records`, records),
        },
        family: {
            get: wrap(http, endpoints.family.get),
            getVariants: wrap(http, endpoints.family.getVariants),
        },
    };
};
export * from './types';
export default createClient;
