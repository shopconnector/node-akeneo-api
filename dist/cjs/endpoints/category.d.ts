import { AxiosInstance } from 'axios';
import { ListResponse, Category, CategoryQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#Category
 */
export declare const get: (http: AxiosInstance, params: {
    query?: CategoryQueryParameters;
}) => Promise<ListResponse<Category>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_categories__code_
 */
export declare const getOne: (http: AxiosInstance, { code, ...params }: {
    code: string;
    query?: {
        with_attribute_options?: boolean | undefined;
        with_quality_scores?: boolean | undefined;
    } | undefined;
}) => Promise<Category>;
export declare const getAll: (http: AxiosInstance, params: {
    query?: CategoryQueryParameters;
}) => Promise<ListResponse<Category>>;
