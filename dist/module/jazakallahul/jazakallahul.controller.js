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
exports.jazakallahulController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const jazakallahul_service_1 = require("./jazakallahul.service");
const createJazakallahul = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign({}, req.body);
    const result = yield jazakallahul_service_1.jazakallahulService.createJazakallahul(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Jazakallahul created successfully',
        data: result,
    });
}));
const getAllJazakallahul = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_service_1.jazakallahulService.getAllJazakallahul(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Jazakallahul retrieved successfully',
        data: result,
    });
}));
const getJazakallahulById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jazakallahulId = req.params.id;
    const result = yield jazakallahul_service_1.jazakallahulService.getSingleJazakallahul(jazakallahulId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Jazakallahul not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Jazakallahul retrieved successfully',
        data: result,
    });
}));
const updateJazakallahul = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jazakallahulId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield jazakallahul_service_1.jazakallahulService.updateJazakallahul(jazakallahulId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Jazakallahul not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Jazakallahul updated successfully',
        data: result,
    });
}));
const deleteJazakallahul = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jazakallahulId = req.params.id;
    const result = yield jazakallahul_service_1.jazakallahulService.deleteJazakallahul(jazakallahulId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Jazakallahul not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Jazakallahul deleted successfully',
        data: {},
    });
}));
exports.jazakallahulController = {
    createJazakallahul,
    getAllJazakallahul,
    getJazakallahulById,
    updateJazakallahul,
    deleteJazakallahul,
};
