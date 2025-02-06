"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shukrInspiration_controller_1 = require("./shukrInspiration.controller");
// import shukrInspirationController from "./shukrInspiration.controller";
const shukrInspirationRouter = express_1.default.Router();
shukrInspirationRouter.post("/", shukrInspiration_controller_1.shukrInspirationController.createShukrInspiration);
shukrInspirationRouter.get("/", shukrInspiration_controller_1.shukrInspirationController.getAllShukrInspirations);
shukrInspirationRouter.get("/:id", shukrInspiration_controller_1.shukrInspirationController.getShukrInspirationById);
shukrInspirationRouter.patch("/:id", shukrInspiration_controller_1.shukrInspirationController.updateShukrInspiration);
shukrInspirationRouter.delete("/:id", shukrInspiration_controller_1.shukrInspirationController.deleteShukrInspiration);
exports.default = shukrInspirationRouter;
