"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shukrPostRouter = void 0;
const express_1 = __importDefault(require("express"));
const shukrPost_controller_1 = require("./shukrPost.controller");
const router = express_1.default.Router();
router.post('/', shukrPost_controller_1.shukrPostController.createShukrPost);
router.get('/', shukrPost_controller_1.shukrPostController.getAllShukrPosts);
router.get('/:id', shukrPost_controller_1.shukrPostController.getShukrPostById);
router.patch('/:id', shukrPost_controller_1.shukrPostController.updateShukrPost);
router.delete('/:id', shukrPost_controller_1.shukrPostController.deleteShukrPost);
exports.shukrPostRouter = router;
