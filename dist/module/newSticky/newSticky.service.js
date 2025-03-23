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
exports.newStickyService = void 0;
const newSticky_model_1 = __importDefault(require("./newSticky.model"));
const createSticky = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newSticky_model_1.default.create(payload);
    return result;
});
const getStickies = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newSticky_model_1.default.find();
    return result;
});
const getSingleSticky = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newSticky_model_1.default.findById(id);
    return result;
});
const updateSticky = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newSticky_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return result;
});
const deleteSticky = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newSticky_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new Error("Sticky not found or could not be deleted");
    }
    return result;
});
exports.newStickyService = {
    createSticky,
    getStickies,
    getSingleSticky,
    updateSticky,
    deleteSticky,
};
