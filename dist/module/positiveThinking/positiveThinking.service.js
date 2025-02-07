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
exports.positiveThinkingService = void 0;
const positiveThinking_model_1 = __importDefault(require("./positiveThinking.model"));
const createPositiveThinking = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_model_1.default.create(payload);
    return result;
});
const getAllPositiveThinkings = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_model_1.default.find(filters);
    return result;
});
const getSinglePositiveThinking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_model_1.default.findById(id);
    return result;
});
const updatePositiveThinking = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_model_1.default.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deletePositiveThinking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield positiveThinking_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.positiveThinkingService = {
    createPositiveThinking,
    getAllPositiveThinkings,
    getSinglePositiveThinking,
    updatePositiveThinking,
    deletePositiveThinking,
};
