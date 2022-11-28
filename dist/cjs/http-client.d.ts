import { AxiosInstance } from 'axios';
import { ClientParams } from './types';
/**
 * Create pre-configured axios instance
 * @private
 * @param {ClientParams} options - Initialization parameters for the HTTP client
 * @return {AxiosInstance} Initialized axios instance
 */
declare const createHttpClient: (options: ClientParams) => AxiosInstance;
export default createHttpClient;
