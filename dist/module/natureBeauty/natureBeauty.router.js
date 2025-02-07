"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.natureBeautyRouter = void 0;
const express_1 = __importDefault(require("express"));
const natureBeauty_controller_1 = require("./natureBeauty.controller");
const router = express_1.default.Router();
router.post('/', natureBeauty_controller_1.natureBeautyController.createNatureBeauty);
router.get('/', natureBeauty_controller_1.natureBeautyController.getAllNatureBeauties);
router.get('/:id', natureBeauty_controller_1.natureBeautyController.getNatureBeautyById);
router.patch('/:id', natureBeauty_controller_1.natureBeautyController.updateNatureBeauty);
router.delete('/:id', natureBeauty_controller_1.natureBeautyController.deleteNatureBeauty);
exports.natureBeautyRouter = router;
