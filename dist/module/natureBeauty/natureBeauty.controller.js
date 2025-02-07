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
exports.natureBeautyController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const natureBeauty_service_1 = require("./natureBeauty.service");
const createNatureBeauty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign(Object.assign({}, req.body), { createdAt: new Date(), updatedAt: new Date() });
    const result = yield natureBeauty_service_1.natureBeautyService.createNatureBeauty(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Nature Beauty created successfully',
        data: result,
    });
}));
const getAllNatureBeauties = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield natureBeauty_service_1.natureBeautyService.getAllNatureBeauties(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Nature Beauties retrieved successfully',
        data: result,
    });
}));
const getNatureBeautyById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beautyId = req.params.id;
    const result = yield natureBeauty_service_1.natureBeautyService.getSingleNatureBeauty(beautyId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Nature Beauty not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Nature Beauty retrieved successfully',
        data: result,
    });
}));
const updateNatureBeauty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beautyId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield natureBeauty_service_1.natureBeautyService.updateNatureBeauty(beautyId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Nature Beauty not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Nature Beauty updated successfully',
        data: result,
    });
}));
const deleteNatureBeauty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const beautyId = req.params.id;
    const result = yield natureBeauty_service_1.natureBeautyService.deleteNatureBeauty(beautyId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Nature Beauty not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Nature Beauty deleted successfully',
        data: {},
    });
}));
exports.natureBeautyController = {
    createNatureBeauty,
    getAllNatureBeauties,
    getNatureBeautyById,
    updateNatureBeauty,
    deleteNatureBeauty,
};
