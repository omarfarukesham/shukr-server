"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const template_controller_1 = require("./template.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constants_1 = require("../user/user.constants");
const templateRouter = express_1.default.Router();
templateRouter.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), template_controller_1.templateController.createTemplate);
templateRouter.get("/", template_controller_1.templateController.getTemplates);
templateRouter.get("/:id", template_controller_1.templateController.getSingleTemplate);
templateRouter.patch("/:id", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), template_controller_1.templateController.updateTemplate);
templateRouter.delete("/:id", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), template_controller_1.templateController.deleteTemplate);
exports.default = templateRouter;
