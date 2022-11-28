"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const querystring = __importStar(require("querystring"));
const error_handler_1 = __importDefault(require("../error-handler"));
exports.default = {
    get: function get(http, url, config) {
        return http
            .get(url, Object.assign({}, config))
            .then((response) => {
            const { data } = response;
            return Object.assign(Object.assign(Object.assign({}, (data.current_page ? { current_page: data.current_page } : {})), (data.items_count ? { items_count: data.items_count } : {})), { items: data._embedded.items, _links: data._links });
        }, error_handler_1.default);
    },
    getOne: function getOne(http, url, config) {
        return http
            .get(url, Object.assign({}, config))
            .then((response) => {
            const { data } = response;
            return data;
        }, error_handler_1.default);
    },
    post: function post(http, url, config) {
        return http
            .post(url, Object.assign({}, config))
            .then((response) => {
            const { data } = response;
            return data;
        }, error_handler_1.default);
    },
    getAllByPage: function getAllByPage(http, url, { params = {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = (params === null || params === void 0 ? void 0 : params.page) || 1;
            const { items_count = 0, items } = yield this.get(http, url, {
                params: Object.assign(Object.assign({}, params), { with_count: true, limit: 100, page }),
            });
            return items_count / 100 > page
                ? {
                    items: [
                        ...items,
                        ...(yield this.getAllByPage(http, url, {
                            params: Object.assign(Object.assign({}, params), { limit: 100, page: page + 1 }),
                        })).items,
                    ],
                }
                : { items };
        });
    },
    getAllBySearchAfter: function getAllBySearchAfter(http, url, config) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const params = config === null || config === void 0 ? void 0 : config.params;
            const { items, _links } = yield this.get(http, url, {
                params: Object.assign(Object.assign({}, ((params === null || params === void 0 ? void 0 : params.search_after) ? { search_after: params.search_after } : {})), { pagination_type: 'search_after', limit: 100 }),
            });
            const nextUrl = (_a = _links === null || _links === void 0 ? void 0 : _links.next) === null || _a === void 0 ? void 0 : _a.href;
            if (!nextUrl)
                return { items };
            const search_after = ((_b = querystring.parse(nextUrl.split('?').at(1))) === null || _b === void 0 ? void 0 : _b.search_after) || '';
            return {
                items: [
                    ...items,
                    ...(yield this.getAllBySearchAfter(http, url, {
                        params: Object.assign(Object.assign({}, params), { limit: (params === null || params === void 0 ? void 0 : params.limit) || 100, pagination_type: 'search_after', search_after }),
                    })).items,
                ],
            };
        });
    },
};
