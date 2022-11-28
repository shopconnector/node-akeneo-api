/**
 * Akeneo Management API SDK. Allows you to create instances of a client
 * with access to the Akeneo API.
 */
import { AxiosInstance } from 'axios';
import { ClientParams } from './types';
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
export declare const createClient: (params: ClientParams) => {
    raw: {
        http: AxiosInstance;
    };
    category: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types").Category<Record<string, any>>>;
        get: (params: {
            query?: import("./types").CategoryQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Category<Record<string, any>>>>;
        getAll: (params: {
            query?: import("./types").CategoryQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Category<Record<string, any>>>>;
    };
    productModel: {
        getOne: (params: {
            code: string;
        }) => Promise<import("./types").ProductModel>;
        get: (params: {
            query?: import("./types").ProductModelQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").ProductModel>>;
        getAll: (params: {
            query?: import("./types").ProductModelQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").ProductModel>>;
    };
    product: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types").Product>;
        get: (params: {
            query?: import("./types").ProductQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Product>>;
        getAll: (params: {
            query?: import("./types").ProductQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Product>>;
        post: (params: {
            product: import("./types").Product;
        }) => Promise<import("./types").Product>;
    };
    assetFamily: {
        getOne: (params: {
            code: string;
            query?: {
                with_attribute_options?: boolean | undefined;
                with_quality_scores?: boolean | undefined;
            } | undefined;
        }) => Promise<import("./types").AssetFamily>;
        get: (params: {
            query?: import("./types").AssetFamilyQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").AssetFamily>>;
        getAll: (params: {
            query?: import("./types").AssetFamilyQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").AssetFamily>>;
        getAssets: (params: {
            assetFamilyCode: string;
            query?: import("./types").AssetQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Asset>>;
        getAsset: (params: {
            assetFamilyCode: string;
            code: string;
        }) => Promise<import("./types").Asset>;
        getAssetsAll: (params: {
            assetFamilyCode: string;
            query?: import("./types").AssetQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Asset>>;
    };
    assetMediaFile: {
        /**
         *
         * @see https://api.akeneo.com/api-reference.html#get_asset_media_files__code
         */
        get: (code: string) => Promise<import("axios").AxiosResponse<any>>;
    };
    referenceEntitiesMediaFile: {
        /**
         * @see https://api.akeneo.com/api-reference.html#get_reference_entity_media_files__code
         */
        get: (code: string) => Promise<any>;
    };
    attribute: {
        getOne: (params: {
            code: string;
        }) => Promise<import("./types").Attribute>;
        get: (params: {
            query?: import("./types").AttributeQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Attribute>>;
        getAll: (params: {
            query?: import("./types").AttributeQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Attribute>>;
        getOptions: (params: {
            attributeCode: string;
            query?: import("./types").AttributeOptionQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").AttributeOption>>;
        add: ({ code, attribute }: {
            code: string;
            attribute: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        addOption: ({ attributeCode, code, option, }: {
            attributeCode: string;
            code: string;
            option: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
    };
    referenceEntity: {
        get: (params: {
            query?: import("./types").ReferenceEntityQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Entity>>;
        getRecords: (params: {
            referenceEntityCode: string;
            query?: import("./types").ReferenceEntityRecordQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").EntityRecord>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity__code_
         */ add: ({ code, body }: {
            code: string;
            body: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__code_
         */
        addAttribute: ({ referenceEntityCode, code, attribute, }: {
            referenceEntityCode: string;
            code: string;
            attribute: any;
        }) => Promise<void>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__attribute_code__options__code_
         */
        addAttributeOption: ({ referenceEntityCode, attributeCode, code, option, }: {
            referenceEntityCode: string;
            attributeCode: string;
            code: string;
            option: any;
        }) => Promise<import("axios").AxiosResponse<any>>;
        /**
         * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_records
         */
        addRecords: ({ referenceEntityCode, records, }: {
            referenceEntityCode: string;
            records: any[];
        }) => Promise<import("axios").AxiosResponse<any>>;
    };
    family: {
        get: (params: {
            query?: import("./types").FamilyQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Family>>;
        getVariants: (params: {
            familyCode: string;
            query?: import("./types").FamilyVariantQueryParameters | undefined;
        }) => Promise<import("./types").ListResponse<import("./types").Variant>>;
    };
};
export declare type AkeneoClientAPI = ReturnType<typeof createClient>;
export * from './types';
export default createClient;
