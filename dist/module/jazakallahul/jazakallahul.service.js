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
exports.jazakallahulService = void 0;
const jazakallahul_model_1 = __importDefault(require("./jazakallahul.model"));
const createJazakallahul = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_model_1.default.create(payload);
    return result;
});
const getAllJazakallahul = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_model_1.default.find(filters);
    return result;
});
const getSingleJazakallahul = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_model_1.default.findById(id);
    return result;
});
const updateJazakallahul = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_model_1.default.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteJazakallahul = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jazakallahul_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.jazakallahulService = {
    createJazakallahul,
    getAllJazakallahul,
    getSingleJazakallahul,
    updateJazakallahul,
    deleteJazakallahul,
};
