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
exports.templateService = void 0;
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const template_model_1 = __importDefault(require("./template.model"));
const createTemplate = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield template_model_1.default.create(payload);
    return result;
});
// Search, filtering, and pagination functions for templates
const getTemplates = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ["title", "templateDetails", "category"];
    const templates = new querybuilder_1.default(template_model_1.default.find(), query)
        .search(searchableFields)
        .filter()
        .sort()
        .select();
    const result = yield templates.modelQuery;
    return result;
});
const getSingleTemplate = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield template_model_1.default.findById(id);
    return result;
});
const updateTemplate = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield template_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
});
const deleteTemplate = (templateId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield template_model_1.default.findOneAndDelete({
        _id: templateId,
        createdBy: userId,
    });
    if (!result) {
        throw new Error("Template could not be deleted");
    }
    return result;
});
exports.templateService = {
    createTemplate,
    getTemplates,
    getSingleTemplate,
    updateTemplate,
    deleteTemplate,
};
