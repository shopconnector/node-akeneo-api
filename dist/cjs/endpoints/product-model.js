"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getOne = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models
 */
const get = (http, { query }) => raw_1.default.get(http, `/api/rest/v1/product-models`, {
    params: query,
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_product_models__code_
 */
const getOne = (http, params) => raw_1.default.getOne(http, `/api/rest/v1/product-models/${params.code}`, {});
exports.getOne = getOne;
const getAll = (http, { query }) => {
    // support legacy pagination_type "page"
    if ((query === null || query === void 0 ? void 0 : query.pagination_type) === 'page') {
        return raw_1.default.getAllByPage(http, `/api/rest/v1/product-models`, {
            params: query,
        });
    }
    return raw_1.default.getAllBySearchAfter(http, `/api/rest/v1/product-models`, {
        params: query,
    });
};
exports.getAll = getAll;
