"use strict";
/**
 * Akeneo Management API SDK. Allows you to create instances of a client
 * with access to the Akeneo API.
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
exports.createClient = void 0;
const http_client_1 = __importDefault(require("./http-client"));
const endpoints = __importStar(require("./endpoints"));
const ATTRIBUTES_PATH = '/api/rest/v1/attributes';
const ASSET_MEDIA_FILES = '/api/rest/v1/asset-media-files';
const REFERENCE_ENTITIES_MEDIA_FILES = '/api/rest/v1/reference-entities-media-files';
const wrap = (http, fn) => (params) => fn(http, params);
/**
 * Create a client instance
 * @param params - Client initialization parameters
 *
 * ```javascript
 * const client = akeneo({
 *   url: AKENEO_API_URL,
 *   username: AKENEO_USERNAME,
 *   password: AKENEO_PASSWORD,
 *   clientId: AKENEO_CLIENT_ID,
 *   secret: AKENEO_SECRET,
 * });
 * ```
 */
const createClient = (params) => {
    const http = http_client_1.default(params);
    return {
        raw: {
            http,
        },
        category: {
            getOne: wrap(http, endpoints.category.getOne),
            get: wrap(http, endpoints.category.get),
            getAll: wrap(http, endpoints.category.getAll),
        },
        productModel: {
            getOne: wrap(http, endpoints.productModel.getOne),
            get: wrap(http, endpoints.productModel.get),
            getAll: wrap(http, endpoints.productModel.getAll),
        },
        product: {
            getOne: wrap(http, endpoints.product.getOne),
            get: wrap(http, endpoints.product.get),
            getAll: wrap(http, endpoints.product.getAll),
        },
        assetFamily: {
            getOne: wrap(http, endpoints.assetFamily.getOne),
            get: wrap(http, endpoints.assetFamily.get),
            getAll: wrap(http, endpoints.assetFamily.getAll),
            getAssets: wrap(http, endpoints.assetFamily.getAssets),
            getAsset: wrap(http, endpoints.assetFamily.getAsset),
            getAssetsAll: wrap(http, endpoints.assetFamily.getAssetsAll),
        },
        assetMediaFile: {
            /**
             *
             * @see https://api.akeneo.com/api-reference.html#get_asset_media_files__code
             */
            get: (code) => __awaiter(void 0, void 0, void 0, function* () {
                return http.get(`${ASSET_MEDIA_FILES}/${code}`, {
                    responseType: 'arraybuffer',
                    params: {},
                });
            }),
        },
        referenceEntitiesMediaFile: {
            /**
             * @see https://api.akeneo.com/api-reference.html#get_reference_entity_media_files__code
             */
            get: (code) => __awaiter(void 0, void 0, void 0, function* () {
                return http.get(`${REFERENCE_ENTITIES_MEDIA_FILES}/${code}`, {
                    responseType: 'arraybuffer',
                    params: {},
                });
            }),
        },
        attribute: {
            getOne: wrap(http, endpoints.attribute.getOne),
            get: wrap(http, endpoints.attribute.get),
            getAll: wrap(http, endpoints.attribute.getAll),
            getOptions: wrap(http, endpoints.attribute.getOptions),
            add: ({ code, attribute }) => __awaiter(void 0, void 0, void 0, function* () { return http.patch(`${ATTRIBUTES_PATH}/${code}`, attribute); }),
            addOption: ({ attributeCode, code, option, }) => __awaiter(void 0, void 0, void 0, function* () {
                return http.patch(`${ATTRIBUTES_PATH}/${attributeCode}/options/${code}`, option);
            }),
        },
        referenceEntity: {
            get: wrap(http, endpoints.referenceEntity.get),
            getRecords: wrap(http, endpoints.referenceEntity.getRecords),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity__code_
             */ add: ({ code, body }) => __awaiter(void 0, void 0, void 0, function* () { return http.patch(`/api/rest/v1/reference-entities/${code}`, body); }),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__code_
             */
            addAttribute: ({ referenceEntityCode, code, attribute, }) => __awaiter(void 0, void 0, void 0, function* () {
                yield http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${code}`, attribute);
            }),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_attributes__attribute_code__options__code_
             */
            addAttributeOption: ({ referenceEntityCode, attributeCode, code, option, }) => http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/attributes/${attributeCode}/options/${code}`, option),
            /**
             * @see https://api.akeneo.com/api-reference.html#patch_reference_entity_records
             */
            addRecords: ({ referenceEntityCode, records, }) => http.patch(`/api/rest/v1/reference-entities/${referenceEntityCode}/records`, records),
        },
        family: {
            get: wrap(http, endpoints.family.get),
            getVariants: wrap(http, endpoints.family.getVariants),
        },
    };
};
exports.createClient = createClient;
__exportStar(require("./types"), exports);
exports.default = exports.createClient;
