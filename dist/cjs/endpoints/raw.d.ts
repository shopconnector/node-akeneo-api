import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ListResponse } from '../types';
declare const _default: {
    get: (http: AxiosInstance, url: string, config: AxiosRequestConfig) => Promise<ListResponse<any> & {
        _links: any;
    }>;
    getOne: (http: AxiosInstance, url: string, config?: AxiosRequestConfig | undefined) => Promise<any>;
    post: (http: AxiosInstance, url: string, body: any) => Promise<any>;
    getAllByPage: (http: AxiosInstance, url: string, { params }: AxiosRequestConfig) => Promise<ListResponse<any>>;
    getAllBySearchAfter: (http: AxiosInstance, url: string, config?: AxiosRequestConfig | undefined) => Promise<ListResponse<any>>;
};
export default _default;
