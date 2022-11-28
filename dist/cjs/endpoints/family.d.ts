import { AxiosInstance } from 'axios';
import { ListResponse, Family, Variant, FamilyQueryParameters, FamilyVariantQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#get_families
 */
export declare const get: (http: AxiosInstance, params: {
    query?: FamilyQueryParameters;
}) => Promise<ListResponse<Family>>;
/**
 * @see https://api.akeneo.com/api-reference.html#Familyvariant
 */
export declare const getVariants: (http: AxiosInstance, params: {
    familyCode: string;
    query?: FamilyVariantQueryParameters;
}) => Promise<ListResponse<Variant>>;
