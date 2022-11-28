import { path } from 'ramda';
const cleanHeaders = (headers) => headers && headers.Authorization
    ? {
        ...headers,
        Authorization: `Bearer ${`...${headers.Authorization.substr(-5)}`}`,
    }
    : headers;
export default function errorHandler({ config, response }) {
    const data = response?.data;
    const errorData = {
        status: response?.status,
        statusText: response?.statusText,
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
    error.name = `${response?.status} ${response?.statusText}`;
    try {
        error.message = JSON.stringify(errorData, null, '  ');
    }
    catch {
        error.message = path(['message'], errorData) || '';
    }
    throw error;
}
