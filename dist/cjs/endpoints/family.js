"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariants = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#get_families
 */
const get = (http, params) => raw_1.default.get(http, `/api/rest/v1/families`, {
    params: Object.assign({}, params.query),
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#Familyvariant
 */
const getVariants = (http, params) => raw_1.default.get(http, `/api/rest/v1/families/${params.familyCode}/variants`, {
    params: Object.assign({}, params.query),
});
exports.getVariants = getVariants;
