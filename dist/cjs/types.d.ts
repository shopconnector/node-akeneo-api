import { AxiosRequestConfig } from 'axios';
export declare type ClientParams = {
    /**
     * API host
     */
    url: string;
    /**
     * username
     */
    username: string;
    /**
     * password
     */
    password: string;
    /**
     * clientId of your app
     */
    clientId: string;
    /**
     * matching secret
     */
    secret: string;
    /**
     * Optional: axiosOptions (https://github.com/axios/axios#request-config)
     */
    axiosOptions?: AxiosRequestConfig;
};
export declare type PaginationType = 'page' | 'search_after';
export declare type ProductModelQueryParameters = {
    search?: string;
    scope?: string;
    locales?: string;
    attributes?: string;
    pagination_type?: PaginationType;
    page?: number;
    search_after?: string;
    limit?: number;
    with_count?: boolean;
};
export declare type ProductQueryParameters = {
    search?: string;
    scope?: string;
    locales?: string;
    attributes?: string;
    pagination_type?: PaginationType;
    page?: number;
    search_after?: string;
    limit?: number;
    with_count?: boolean;
    with_attribute_options?: boolean;
    with_quality_scores?: boolean;
};
export declare type CategoryQueryParameters = {
    search?: string;
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type AttributeQueryParameters = {
    search?: string;
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type AttributeOptionQueryParameters = {
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type ReferenceEntityQueryParameters = {
    search?: string;
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type FamilyQueryParameters = {
    search?: string;
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type FamilyVariantQueryParameters = {
    page?: number;
    limit?: number;
    with_count?: boolean;
};
export declare type ReferenceEntityRecordQueryParameters = {
    search_after?: string;
};
export declare type AssetFamilyQueryParameters = {
    search_after?: string;
};
export declare type AssetQueryParameters = {
    search?: string;
    channel?: string;
    locales?: string;
    search_after?: string;
};
export declare type ListResponse<T> = {
    items_count?: number;
    current_page?: number;
    items: T[];
};
declare type Association = {
    products: string[];
    product_models: string[];
    groups: string[];
};
export declare type ProductModel = {
    code: string;
    family: string;
    family_variant: string;
    parent?: string;
    categories: string[];
    values: Record<string, any>;
    created: string;
    updated: string;
    associations: Record<string, Association>;
    quantified_assoications: Record<string, Association>;
    metadata: Record<string, any>;
};
export declare type Product = {
    identifier: string;
    enabled: boolean;
    family: string;
    categories: string[];
    groups: string[];
    parent: string;
    values: Record<string, any>;
    associations: Record<string, Association>;
    created: string;
    updated: string;
    quantified_assoications: Record<string, Association>;
    metadata: Record<string, any>;
};
export declare type Family = {
    code: string;
    attribute_as_label: string;
    attribute_as_image: string;
    attributes: string[];
    attribute_requirements: Record<string, any>;
    labels: Record<string, any>;
};
declare type VariantAttributeSet = {
    level: number;
    attributes: string[];
    axes: string[];
};
export declare type Variant = {
    code: string;
    variant_attribute_sets: VariantAttributeSet[];
    labels: Record<string, any>;
};
export declare type Attribute = {
    code: string;
    type: string;
    labels: Record<string, string>;
    group: string;
    group_labels: Record<string, string>;
    sort_order: number;
    localizable: boolean;
    scopable: boolean;
    available_locales: string[];
    unique: boolean;
    useable_as_grid_filter: boolean;
    max_characters: number;
    validation_rule: string;
    validation_regexp: string;
    wysiwyg_enabled: boolean;
    number_min: string;
    number_max: string;
    decimals_allowed: boolean;
    negative_allowed: boolean;
    metric_family: string;
    default_metric_unit: string;
    date_min: string;
    date_max: string;
    allowed_extensions: string[];
    max_file_size: string;
    reference_data_name: string;
    default_value: boolean;
};
export declare type AttributeOption = {
    code: string;
    attribute: string;
    sort_order: number;
    labels: Record<string, string>;
};
declare type ValuesRecord = {
    locale: string;
    channel: string;
    data: string | string[];
};
export declare type KeyValueMap = Record<string, any>;
export declare type Entity = {
    code: string;
    labels: KeyValueMap;
};
export declare type EntityRecord = {
    code: string;
    values: Record<string, ValuesRecord[]>;
};
export declare type Category<T = KeyValueMap> = {
    code: string;
    parent?: string;
    labels: T;
};
export declare type AssetFamily = {
    code: string;
    labels: Record<string, string>;
    attribute_as_main_media: string;
    product_link_rules: Record<string, Record<string, string>>[];
    transformations: any[];
    naming_convention: {
        source: {
            property: string;
            channel: any;
            locale: any;
        };
        pattern: string;
        abort_asset_creation_on_error: boolean;
    };
};
export declare type Asset = {
    code: string;
    values: Record<string, ValuesRecord[]>;
};
export {};
