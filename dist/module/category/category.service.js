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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getAllCategories = exports.getAllCategoryType = exports.createCategory = void 0;
const category_model_1 = __importDefault(require("./category.model"));
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.create(data);
});
exports.createCategory = createCategory;
const getAllCategoryType = (type) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.find({ type });
});
exports.getAllCategoryType = getAllCategoryType;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.find();
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.findById(id);
});
exports.getCategoryById = getCategoryById;
const updateCategory = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.findByIdAndUpdate(id, data, { new: true });
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield category_model_1.default.findByIdAndDelete(id);
});
exports.deleteCategory = deleteCategory;
