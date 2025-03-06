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
exports.templateController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const template_service_1 = require("./template.service");
// import { templateService } from "./template.service";
const createTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.user)
    if (!req.user) {
        throw new Error("User is not authenticated");
    }
    const payload = Object.assign(Object.assign({}, req.body), { createdBy: req.user.id });
    const result = yield template_service_1.templateService.createTemplate(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Template created successfully",
        data: result,
    });
}));
const getTemplates = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield template_service_1.templateService.getTemplates(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Templates retrieved successfully",
        data: result,
    });
}));
const getSingleTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const templateId = req.params.id;
    const result = yield template_service_1.templateService.getSingleTemplate(templateId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Template retrieved successfully",
        data: result,
    });
}));
const updateTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const templateId = req.params.id;
    const body = req.body;
    const result = yield template_service_1.templateService.updateTemplate(templateId, body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Template updated successfully",
        data: result,
    });
}));
const deleteTemplate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const templateId = req.params.id;
    yield template_service_1.templateService.deleteTemplate(templateId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Template deleted successfully",
        data: {},
    });
}));
exports.templateController = {
    createTemplate,
    getTemplates,
    getSingleTemplate,
    updateTemplate,
    deleteTemplate,
};
