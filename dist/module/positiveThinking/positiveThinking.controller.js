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
exports.positiveThinkingController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const positiveThinking_service_1 = require("./positiveThinking.service");
const createPositiveThinking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign({}, req.body);
    const result = yield positiveThinking_service_1.positiveThinkingService.createPositiveThinking(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: 'Positive Thinking created successfully',
        data: result,
    });
}));
const getAllPositiveThinkings = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_service_1.positiveThinkingService.getAllPositiveThinkings(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Positive Thinkings retrieved successfully',
        data: result,
    });
}));
const getPositiveThinkingById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const positiveThinkingId = req.params.id;
    const result = yield positiveThinking_service_1.positiveThinkingService.getSinglePositiveThinking(positiveThinkingId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Positive Thinking not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Positive Thinking retrieved successfully',
        data: result,
    });
}));
const updatePositiveThinking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const positiveThinkingId = req.params.id;
    const payload = Object.assign(Object.assign({}, req.body), { updatedAt: new Date() });
    const result = yield positiveThinking_service_1.positiveThinkingService.updatePositiveThinking(positiveThinkingId, payload);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Positive Thinking not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Positive Thinking updated successfully',
        data: result,
    });
}));
const deletePositiveThinking = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const positiveThinkingId = req.params.id;
    const result = yield positiveThinking_service_1.positiveThinkingService.deletePositiveThinking(positiveThinkingId);
    if (!result) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.NOT_FOUND,
            message: 'Positive Thinking not found',
            data: null,
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'Positive Thinking deleted successfully',
        data: {},
    });
}));
exports.positiveThinkingController = {
    createPositiveThinking,
    getAllPositiveThinkings,
    getPositiveThinkingById,
    updatePositiveThinking,
    deletePositiveThinking,
};
