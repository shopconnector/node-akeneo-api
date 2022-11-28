"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.post = exports.getOne = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#get_products
 */
const get = (http, { query }) => raw_1.default.get(http, `/api/rest/v1/products`, {
    params: query,
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_products__code_
 */
const getOne = (http, { code, query, }) => raw_1.default.getOne(http, `/api/rest/v1/products/${code}`, {
    params: query,
});
exports.getOne = getOne;
const post = (http, { product }) => raw_1.default.post(http, `/api/rest/v1/products`, {
    data: product
});
exports.post = post;
const getAll = (http, { query = {} }) => {
    // support legacy pagination_type "page"
    if ((query === null || query === void 0 ? void 0 : query.pagination_type) === 'page') {
        return raw_1.default.getAllByPage(http, `/api/rest/v1/products`, {
            params: query,
        });
    }
    return raw_1.default.getAllBySearchAfter(http, `/api/rest/v1/products`, {
        params: query,
    });
};
exports.getAll = getAll;
