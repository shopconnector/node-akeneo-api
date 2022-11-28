import { AxiosInstance } from 'axios';
import { ListResponse, Entity, EntityRecord, ReferenceEntityQueryParameters, ReferenceEntityRecordQueryParameters } from '../types';
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entities
 */
export declare const get: (http: AxiosInstance, { query }: {
    query?: ReferenceEntityQueryParameters | undefined;
}) => Promise<ListResponse<Entity>>;
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entity_records
 */
export declare const getRecords: (http: AxiosInstance, { referenceEntityCode, query, }: {
    referenceEntityCode: string;
    query?: ReferenceEntityRecordQueryParameters | undefined;
}) => Promise<ListResponse<EntityRecord>>;
