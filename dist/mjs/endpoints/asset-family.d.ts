import { AxiosInstance } from 'axios';
import { Asset, AssetFamily, AssetFamilyQueryParameters, AssetQueryParameters, ListResponse } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#Assetfamily
 */
export declare const get: (http: AxiosInstance, params: {
    query?: AssetFamilyQueryParameters;
}) => Promise<ListResponse<AssetFamily>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_asset_family__code_
 */
export declare const getOne: (http: AxiosInstance, { code, query, }: {
    code: string;
    query?: {
        with_attribute_options?: boolean | undefined;
        with_quality_scores?: boolean | undefined;
    } | undefined;
}) => Promise<AssetFamily>;
export declare const getAll: (http: AxiosInstance, { query }: {
    query?: AssetFamilyQueryParameters | undefined;
}) => Promise<ListResponse<AssetFamily>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets
 */
export declare const getAssets: (http: AxiosInstance, { assetFamilyCode, query, }: {
    assetFamilyCode: string;
    query?: AssetQueryParameters | undefined;
}) => Promise<ListResponse<Asset>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_assets__code_
 */
export declare const getAsset: (http: AxiosInstance, { assetFamilyCode, code, }: {
    assetFamilyCode: string;
    code: string;
}) => Promise<Asset>;
export declare const getAssetsAll: (http: AxiosInstance, { assetFamilyCode, query, }: {
    assetFamilyCode: string;
    query?: AssetQueryParameters | undefined;
}) => Promise<ListResponse<Asset>>;
