"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveThinkingRouter = void 0;
const express_1 = __importDefault(require("express"));
const positiveThinking_controller_1 = require("./positiveThinking.controller");
const router = express_1.default.Router();
router.post('/', positiveThinking_controller_1.positiveThinkingController.createPositiveThinking);
router.get('/', positiveThinking_controller_1.positiveThinkingController.getAllPositiveThinkings);
router.get('/:id', positiveThinking_controller_1.positiveThinkingController.getPositiveThinkingById);
router.patch('/:id', positiveThinking_controller_1.positiveThinkingController.updatePositiveThinking);
router.delete('/:id', positiveThinking_controller_1.positiveThinkingController.deletePositiveThinking);
exports.positiveThinkingRouter = router;
