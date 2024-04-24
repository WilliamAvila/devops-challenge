"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhoto = exports.getPhoto = exports.getPhotos = exports.createPhoto = void 0;
var database_1 = __importStar(require("@dc/database"));
var s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
var client_s3_1 = require("@aws-sdk/client-s3");
var s3Client = new client_s3_1.S3Client({ region: process.env.AWS_REGION });
var createPhoto = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var originalName, photo, command, signedUrl, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    originalName = req.body.originalName;
                    return [4 /*yield*/, database_1.default
                            .insert(database_1.schema.photos)
                            .values({ originalName: originalName })
                            .returning()];
                case 1:
                    photo = (_a.sent())[0];
                    command = new client_s3_1.PutObjectCommand({
                        Bucket: process.env.PHOTOS_BUCKET,
                        Key: "uploads/".concat(photo.id)
                    });
                    return [4 /*yield*/, (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 })];
                case 2:
                    signedUrl = _a.sent();
                    return [2 /*return*/, res.status(200).json(__assign(__assign({}, photo), { signedUrl: signedUrl }))];
                case 3:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.createPhoto = createPhoto;
var getPhotos = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var photos, signedUrlPromises, signedS3Urls_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, database_1.default.query.photos.findMany()];
                case 1:
                    photos = _a.sent();
                    signedUrlPromises = photos.map(function (photo) {
                        var command = new client_s3_1.GetObjectCommand({
                            Bucket: photo.bucketName || '',
                            Key: photo.key || ''
                        });
                        return (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 });
                    });
                    return [4 /*yield*/, Promise.all(signedUrlPromises)];
                case 2:
                    signedS3Urls_1 = _a.sent();
                    return [2 /*return*/, res.status(200).json(photos.map(function (photo, index) { return (__assign(__assign({}, photo), { signedUrl: signedS3Urls_1[index] })); }))];
                case 3:
                    error_2 = _a.sent();
                    next(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.getPhotos = getPhotos;
var getPhoto = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var photo, command, signedUrl, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, database_1.default.query.photos.findFirst({
                            where: database_1.orm.eq(database_1.schema.photos.id, req.params.id)
                        })];
                case 1:
                    photo = _a.sent();
                    if (!photo)
                        throw new Error('Photo not found');
                    command = new client_s3_1.GetObjectCommand({
                        Bucket: photo.bucketName || '',
                        Key: photo.key || ''
                    });
                    return [4 /*yield*/, (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 })];
                case 2:
                    signedUrl = _a.sent();
                    return [2 /*return*/, res.status(200).json(__assign(__assign({}, photo), { signedUrl: signedUrl }))];
                case 3:
                    error_3 = _a.sent();
                    next(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.getPhoto = getPhoto;
var deletePhoto = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, photo, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, database_1.default
                            .delete(database_1.schema.photos)
                            .where(database_1.orm.eq(database_1.schema.photos.id, id))
                            .returning()];
                case 1:
                    photo = (_a.sent())[0];
                    return [2 /*return*/, res.status(200).json(photo)];
                case 2:
                    error_4 = _a.sent();
                    next(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.deletePhoto = deletePhoto;
//# sourceMappingURL=controllers.js.map