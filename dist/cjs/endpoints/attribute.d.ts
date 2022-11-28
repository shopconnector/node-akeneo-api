import { AxiosInstance } from 'axios';
import { ListResponse, Attribute, AttributeOption, AttributeQueryParameters, AttributeOptionQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes
 */
export declare const get: (http: AxiosInstance, params: {
    query?: AttributeQueryParameters;
}) => Promise<ListResponse<Attribute>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__code_
 */
export declare const getOne: (http: AxiosInstance, { code, }: {
    code: string;
}) => Promise<Attribute>;
export declare const getAll: (http: AxiosInstance, { query }: {
    query?: AttributeQueryParameters | undefined;
}) => Promise<ListResponse<Attribute>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__attribute_code__options
 */
export declare const getOptions: (http: AxiosInstance, { attributeCode, query, }: {
    attributeCode: string;
    query?: AttributeOptionQueryParameters | undefined;
}) => Promise<ListResponse<AttributeOption>>;
