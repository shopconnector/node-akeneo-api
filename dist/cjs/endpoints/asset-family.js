"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetsAll = exports.getAsset = exports.getAssets = exports.getAll = exports.getOne = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#Assetfamily
 */
const get = (http, params) => raw_1.default.get(http, `/api/rest/v1/asset-families`, {
    params: Object.assign({}, params.query),
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_asset_family__code_
 */
const getOne = (http, { code, query, }) => raw_1.default.getOne(http, `/api/rest/v1/asset-families/${code}`, {
    params: query,
});
exports.getOne = getOne;
const getAll = (http, { query }) => raw_1.default.getAllBySearchAfter(http, `/api/rest/v1/asset-families`, {
    params: query,
});
exports.getAll = getAll;
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets
 */
const getAssets = (http, { assetFamilyCode, query, }) => raw_1.default.get(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets`, {
    params: query,
});
exports.getAssets = getAssets;
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets__code_
 */
const getAsset = (http, { assetFamilyCode, code, }) => raw_1.default.getOne(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets/${code}`, {});
exports.getAsset = getAsset;
const getAssetsAll = (http, { assetFamilyCode, query, }) => raw_1.default.getAllBySearchAfter(http, `/api/rest/v1/asset-families/${assetFamilyCode}/assets`, {
    params: query,
});
exports.getAssetsAll = getAssetsAll;
