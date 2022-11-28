"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecords = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entities
 */
const get = (http, { query }) => raw_1.default.get(http, `/api/rest/v1/reference-entities`, {
    params: query,
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_reference_entity_records
 */
const getRecords = (http, { referenceEntityCode, query, }) => raw_1.default.get(http, `/api/rest/v1/reference-entities/${referenceEntityCode}/records`, {
    params: query,
});
exports.getRecords = getRecords;
