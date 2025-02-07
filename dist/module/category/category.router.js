"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const categoryRouqter = express_1.default.Router();
categoryRouqter.post('/', category_controller_1.createCategory);
categoryRouqter.get('/', category_controller_1.getAllByCategoryType);
categoryRouqter.get('/all', category_controller_1.getAllCategories);
categoryRouqter.get('/:id', category_controller_1.getCategoryById);
categoryRouqter.patch('/:id', category_controller_1.updateCategory);
categoryRouqter.delete('/:id', category_controller_1.deleteCategory);
exports.default = categoryRouqter;
