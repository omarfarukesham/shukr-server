import express from "express";
import { templateController } from "./template.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";

const templateRouter = express.Router();

templateRouter.post("/", auth(USER_ROLE.admin, USER_ROLE.user), templateController.createTemplate);
templateRouter.get("/", templateController.getTemplates);
templateRouter.get("/:id", templateController.getSingleTemplate);
templateRouter.patch("/:id", templateController.updateTemplate);
templateRouter.delete("/:id", templateController.deleteTemplate);

export default templateRouter ;
