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
exports.dailyDuaController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const dailyDua_service_1 = require("./dailyDua.service");
const createDua = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign(Object.assign({}, req.body), { createdAt: new Date(), updatedAt: new Date() });
    const result = yield dailyDua_service_1.dailyDuaService.createDua(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Dua created successfully',
        data: result,
    });
}));
const getAllDuas = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield dailyDua_service_1.dailyDuaService.getAllDuas(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Duas retrieved successfully',
        data: result,
    });
}));
const getDuaById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const duaId = req.params.id;
    const result = yield dailyDua_service_1.dailyDuaService.getDuaById(duaId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Dua not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Dua retrieved successfully',
        data: result,
    });
}));
const updateDua = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const duaId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield dailyDua_service_1.dailyDuaService.updateDua(duaId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Dua not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Dua updated successfully',
        data: result,
    });
}));
const deleteDua = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const duaId = req.params.id;
    const result = yield dailyDua_service_1.dailyDuaService.deleteDua(duaId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Dua not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Dua deleted successfully',
        data: {},
    });
}));
exports.dailyDuaController = {
    createDua,
    getAllDuas,
    getDuaById,
    updateDua,
    deleteDua,
};
