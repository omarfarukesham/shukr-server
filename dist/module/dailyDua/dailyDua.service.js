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
exports.dailyDuaService = void 0;
const dailyDua_model_1 = __importDefault(require("./dailyDua.model"));
const createDua = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dailyDua_model_1.default.create(payload);
});
const getAllDuas = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dailyDua_model_1.default.find(query);
});
const getDuaById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dailyDua_model_1.default.findById(id);
});
const updateDua = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dailyDua_model_1.default.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
});
const deleteDua = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield dailyDua_model_1.default.findByIdAndDelete(id);
});
exports.dailyDuaService = {
    createDua,
    getAllDuas,
    getDuaById,
    updateDua,
    deleteDua,
};
