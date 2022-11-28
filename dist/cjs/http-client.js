"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
const qs_1 = __importDefault(require("qs"));
const axios_1 = __importDefault(require("axios"));
const TOKEN_PATH = '/api/oauth/v1/token';
const defaultConfig = {
    insecure: false,
    retryOnError: true,
    headers: {},
    httpAgent: false,
    httpsAgent: false,
    timeout: 30000,
    proxy: false,
    basePath: '',
    adapter: undefined,
    maxContentLength: 1073741824,
    paramsSerializer: qs_1.default.stringify,
};
/**
 * Create pre-configured axios instance
 * @private
 * @param {ClientParams} options - Initialization parameters for the HTTP client
 * @return {AxiosInstance} Initialized axios instance
 */
const createHttpClient = (options) => {
    let accessToken = '';
    const { url, clientId, secret, username, password } = options;
    const baseURL = url.replace(/\/+$/, '');
    const instance = axios_1.default.create(Object.assign(Object.assign(Object.assign({}, defaultConfig), (options.axiosOptions || {})), { baseURL }));
    const base64Encoded = Buffer.from(`${clientId}:${secret}`).toString('base64');
    const refreshAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
        const tokenResult = yield axios_1.default.post(`${baseURL}${TOKEN_PATH}`, { grant_type: 'password', username, password }, {
            headers: {
                Authorization: `Basic ${base64Encoded}`,
            },
        });
        accessToken = tokenResult.data.access_token;
        return accessToken;
    });
    instance.interceptors.request.use((config) => __awaiter(void 0, void 0, void 0, function* () {
        return (Object.assign(Object.assign({}, config), { headers: Object.assign(Object.assign({}, config.headers), { Authorization: `Bearer ${accessToken || (yield refreshAccessToken())}` }) }));
    }));
    instance.interceptors.response.use((response) => response, (error) => __awaiter(void 0, void 0, void 0, function* () {
        const originalRequest = error.config;
        if (error.response &&
            (error.response.status === 403 || error.response.status === 401) &&
            !originalRequest._retry) {
            originalRequest._retry = true;
            accessToken = '';
            originalRequest.headers.Authorization = `Bearer ${yield refreshAccessToken()}`;
            return instance(originalRequest);
        }
        return Promise.reject(error);
    }));
    return instance;
};
exports.default = createHttpClient;
