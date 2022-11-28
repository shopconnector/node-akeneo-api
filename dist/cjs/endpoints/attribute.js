"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.getAll = exports.getOne = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes
 */
const get = (http, params) => raw_1.default.get(http, `/api/rest/v1/attributes`, {
    params: Object.assign({}, params.query),
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__code_
 */
const getOne = (http, { code, }) => raw_1.default.getOne(http, `/api/rest/v1/attributes/${code}`);
exports.getOne = getOne;
const getAll = (http, { query = {} }) => raw_1.default.getAllByPage(http, `/api/rest/v1/attributes`, {
    params: query,
});
exports.getAll = getAll;
/**
 * @see https://api.akeneo.com/api-reference.html#get_attributes__attribute_code__options
 */
const getOptions = (http, { attributeCode, query, }) => raw_1.default.getAllByPage(http, `/api/rest/v1/attributes/${attributeCode}/options`, {
    params: query,
});
exports.getOptions = getOptions;
