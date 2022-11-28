"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const cleanHeaders = (headers) => headers && headers.Authorization
    ? Object.assign(Object.assign({}, headers), { Authorization: `Bearer ${`...${headers.Authorization.substr(-5)}`}` }) : headers;
function errorHandler({ config, response }) {
    const data = response === null || response === void 0 ? void 0 : response.data;
    const errorData = {
        status: response === null || response === void 0 ? void 0 : response.status,
        statusText: response === null || response === void 0 ? void 0 : response.statusText,
        message: data && 'message' in data ? data.message : '',
        details: data && 'details' in data ? data.details : {},
        request: config
            ? {
                url: config.url,
                headers: cleanHeaders(config.headers),
                method: config.method,
                payloadData: config.data,
            }
            : {},
    };
    const error = new Error();
    error.name = `${response === null || response === void 0 ? void 0 : response.status} ${response === null || response === void 0 ? void 0 : response.statusText}`;
    try {
        error.message = JSON.stringify(errorData, null, '  ');
    }
    catch (_a) {
        error.message = ramda_1.path(['message'], errorData) || '';
    }
    throw error;
}
exports.default = errorHandler;
