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
exports.shukrInspirationController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const shukrInspiration_service_1 = require("./shukrInspiration.service");
// import shukrInspirationService from './shukrInspiration.service';
const createShukrInspiration = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign(Object.assign({}, req.body), { createdAt: new Date(), updatedAt: new Date() });
    const result = yield shukrInspiration_service_1.shukrInspirationService.createShukrInspiration(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Shukr Inspiration created successfully',
        data: result,
    });
}));
const getAllShukrInspirations = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_service_1.shukrInspirationService.getAllShukrInspirations(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Inspirations retrieved successfully',
        data: result,
    });
}));
const getShukrInspirationById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inspirationId = req.params.id;
    const result = yield shukrInspiration_service_1.shukrInspirationService.getSingleShukrInspiration(inspirationId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Inspiration not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Inspiration retrieved successfully',
        data: result,
    });
}));
const updateShukrInspiration = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inspirationId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield shukrInspiration_service_1.shukrInspirationService.updateShukrInspiration(inspirationId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Inspiration not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Inspiration updated successfully',
        data: result,
    });
}));
const deleteShukrInspiration = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inspirationId = req.params.id;
    const result = yield shukrInspiration_service_1.shukrInspirationService.deleteShukrInspiration(inspirationId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Shukr Inspiration not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Shukr Inspiration deleted successfully',
        data: {},
    });
}));
exports.shukrInspirationController = {
    createShukrInspiration,
    getAllShukrInspirations,
    getShukrInspirationById,
    updateShukrInspiration,
    deleteShukrInspiration,
};
