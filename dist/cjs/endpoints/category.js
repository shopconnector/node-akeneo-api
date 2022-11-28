"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getOne = exports.get = void 0;
const raw_1 = __importDefault(require("./raw"));
/**
 * @see https://api.akeneo.com/api-reference.html#Category
 */
const get = (http, params) => raw_1.default.get(http, `/api/rest/v1/categories`, {
    params: Object.assign({}, params.query),
});
exports.get = get;
/**
 * @see https://api.akeneo.com/api-reference.html#get_categories__code_
 */
const getOne = (http, _a) => {
    var { code } = _a, params = __rest(_a, ["code"]);
    return raw_1.default.getOne(http, `/api/rest/v1/categories/${code}`, {
        params,
    });
};
exports.getOne = getOne;
const getAll = (http, params) => raw_1.default.getAllByPage(http, `/api/rest/v1/categories`, {
    params,
});
exports.getAll = getAll;
