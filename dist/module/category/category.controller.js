"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getAllCategories = exports.getAllByCategoryType = exports.createCategory = void 0;
const categoryService = __importStar(require("./category.service"));
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
/**
 * Creates a new category
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next middleware function
 *
 * @returns {Promise<void>}
 */
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categoryService.createCategory(req.body);
        res.status(201).json({ message: 'Category created successfully', data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.createCategory = createCategory;
const getAllByCategoryType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    try {
        const { type } = req.query;
        if (!type || typeof type !== 'string') {
            res.status(400).json({ message: 'Type query parameter is required and must be a string' });
            return;
        }
        const result = yield categoryService.getAllCategoryType(type);
        res.status(200).json({ message: 'Categories retrieved successfully', data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllByCategoryType = getAllByCategoryType;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield categoryService.getAllCategories();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: 'All Categories post retrieved successfully',
        data: result,
    });
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categoryService.getCategoryById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category retrieved successfully', data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.getCategoryById = getCategoryById;
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categoryService.updateCategory(req.params.id, req.body);
        if (!result) {
            res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully', data: result });
    }
    catch (error) {
        next(error);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categoryService.deleteCategory(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteCategory = deleteCategory;
