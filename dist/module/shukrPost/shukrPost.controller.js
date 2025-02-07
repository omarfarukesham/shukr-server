"use strict";
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
exports.shukrPostController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const shukrPost_service_1 = require("./shukrPost.service");
const createShukrPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign(Object.assign({}, req.body), { createdAt: new Date(), updatedAt: new Date() });
    const result = yield shukrPost_service_1.shukrPostService.createShukrPost(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Shukr Post created successfully',
        data: result,
    });
}));
const getAllShukrPosts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrPost_service_1.shukrPostService.getAllShukrPosts(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Posts retrieved successfully',
        data: result,
    });
}));
const getShukrPostById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const result = yield shukrPost_service_1.shukrPostService.getSingleShukrPost(postId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Post not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Post retrieved successfully',
        data: result,
    });
}));
const updateShukrPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield shukrPost_service_1.shukrPostService.updateShukrPost(postId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Post not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Post updated successfully',
        data: result,
    });
}));
const deleteShukrPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.params.id;
    const result = yield shukrPost_service_1.shukrPostService.deleteShukrPost(postId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Post not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Post deleted successfully',
        data: {},
    });
}));
exports.shukrPostController = {
    createShukrPost,
    getAllShukrPosts,
    getShukrPostById,
    updateShukrPost,
    deleteShukrPost,
};
