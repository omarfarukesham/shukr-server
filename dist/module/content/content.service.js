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
exports.contentService = void 0;
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const content_model_1 = __importDefault(require("./content.model"));
const createContent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield content_model_1.default.create(payload);
    return result;
});
// Get all content grouped by category
const getAllContent = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ['title', 'details', 'arabicText', 'ref'];
    const queryBuilder = new querybuilder_1.default(content_model_1.default.find(), query)
        .search(searchableFields)
        .filter()
        .sort()
        .select();
    const allContent = yield queryBuilder.modelQuery;
    // Group content by category
    const groupedContent = {
        shukrInspiration: allContent.filter(c => c.category === 'ShukrIns'),
        positiveThinking: allContent.filter(c => c.category === 'positiveThinking'),
        jazakallahulKhair: allContent.filter(c => c.category === 'jazakallahulKhair'),
        shukrPosts: allContent.filter(c => c.category === 'shukrPosts'),
        duaOfTheDay: allContent.filter(c => c.category === 'duaOfTheDay'),
        natureImg: allContent.filter(c => c.category === 'natureImg'),
        whatNew: allContent.filter(c => c.category === 'whatNew'),
    };
    return {
        status: 'success',
        message: 'Data retrieved successfully',
        data: groupedContent,
    };
});
const getContentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield content_model_1.default.findById(id);
});
const updateContent = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield content_model_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
});
const deleteContent = (contentId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield content_model_1.default.findOneAndDelete({ _id: contentId, author: userId });
    if (!result) {
        throw new Error('Could not delete content');
    }
    return result;
});
exports.contentService = {
    createContent,
    getAllContent,
    getContentById,
    updateContent,
    deleteContent,
};
