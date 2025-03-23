"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyDuaRouter = void 0;
const express_1 = __importDefault(require("express"));
const dailyDua_controller_1 = require("./dailyDua.controller");
const router = express_1.default.Router();
router.post('/', dailyDua_controller_1.dailyDuaController.createDua);
router.get('/', dailyDua_controller_1.dailyDuaController.getAllDuas);
router.get('/:id', dailyDua_controller_1.dailyDuaController.getDuaById);
router.put('/:id', dailyDua_controller_1.dailyDuaController.updateDua);
router.delete('/:id', dailyDua_controller_1.dailyDuaController.deleteDua);
exports.dailyDuaRouter = router;
