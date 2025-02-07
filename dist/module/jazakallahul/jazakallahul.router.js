"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jazakallahulRouter = void 0;
const express_1 = __importDefault(require("express"));
const jazakallahul_controller_1 = require("./jazakallahul.controller");
const router = express_1.default.Router();
router.post('/', jazakallahul_controller_1.jazakallahulController.createJazakallahul);
router.get('/', jazakallahul_controller_1.jazakallahulController.getAllJazakallahul);
router.get('/:id', jazakallahul_controller_1.jazakallahulController.getJazakallahulById);
router.patch('/:id', jazakallahul_controller_1.jazakallahulController.updateJazakallahul);
router.delete('/:id', jazakallahul_controller_1.jazakallahulController.deleteJazakallahul);
exports.jazakallahulRouter = router;
