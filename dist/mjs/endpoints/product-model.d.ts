import { AxiosInstance } from 'axios';
import { ListResponse, ProductModel, ProductModelQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models
 */
export declare const get: (http: AxiosInstance, { query }: {
    query?: ProductModelQueryParameters | undefined;
}) => Promise<ListResponse<ProductModel>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models__code_
 */
export declare const getOne: (http: AxiosInstance, params: {
    code: string;
}) => Promise<ProductModel>;
export declare const getAll: (http: AxiosInstance, { query }: {
    query?: ProductModelQueryParameters | undefined;
}) => Promise<ListResponse<ProductModel>>;
