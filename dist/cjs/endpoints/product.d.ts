import { AxiosInstance } from 'axios';
import { ListResponse, Product, ProductQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#get_products
 */
export declare const get: (http: AxiosInstance, { query }: {
    query?: ProductQueryParameters | undefined;
}) => Promise<ListResponse<Product>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_products__code_
 */
export declare const getOne: (http: AxiosInstance, { code, query, }: {
    code: string;
    query?: {
        with_attribute_options?: boolean | undefined;
        with_quality_scores?: boolean | undefined;
    } | undefined;
}) => Promise<Product>;
export declare const post: (http: AxiosInstance, { code, query, }: {
    code: string;
    query?: {
        with_attribute_options?: boolean | undefined;
        with_quality_scores?: boolean | undefined;
    } | undefined;
}) => Promise<Product>;
export declare const getAll: (http: AxiosInstance, { query }: {
    query?: ProductQueryParameters | undefined;
}) => Promise<ListResponse<Product>>;
