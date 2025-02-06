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
exports.shukrInspirationService = void 0;
const shukrInspiration_model_1 = __importDefault(require("./shukrInspiration.model"));
const createShukrInspiration = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_model_1.default.create(payload);
    return result;
});
const getAllShukrInspirations = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_model_1.default.find(query);
    return result;
});
const getSingleShukrInspiration = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_model_1.default.findById(id);
    return result;
});
const updateShukrInspiration = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_model_1.default.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    return result;
});
const deleteShukrInspiration = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shukrInspiration_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new Error("Shukr Inspiration not found or could not be deleted");
    }
    return result;
});
exports.shukrInspirationService = {
    createShukrInspiration,
    getAllShukrInspirations,
    getSingleShukrInspiration,
    updateShukrInspiration,
    deleteShukrInspiration,
};
