import raw from './raw';
/**
 * @see https://api.akeneo.com/api-reference.html#Assetfamily
 */
export const get = (http, params) => raw.get(http, `/api/rest/v1/asset-families`, {
    params: {
        ...params.query,
    },
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_asset_family__code_
 */
export const getOne = (http, { code, query, }) => raw.getOne(http, `/api/rest/v1/asset-families/${code}`, {
    params: query,
});
export const getAll = (http, { query }) => raw.getAllBySearchAfter(http, `/api/rest/v1/asset-families`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets
 */
export const getAssets = (http, { assetFamilyCode, query, }) => raw.get(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets`, {
    params: query,
});
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets__code_
 */
export const getAsset = (http, { assetFamilyCode, code, }) => raw.getOne(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets/${code}`, {});
export const getAssetsAll = (http, { assetFamilyCode, query, }) => raw.getAllBySearchAfter(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets`, {
    params: query,
});
