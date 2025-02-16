import { Router } from "express";
import { contentController } from "./content.controller";
// import ContentController from "./content.controller";

const contentRouter = Router();

contentRouter.post("/", contentController.createContent);
contentRouter.get("/", contentController.getAllContent);
contentRouter.get("/:id", contentController.getSingleContent);
contentRouter.patch("/:id", contentController.updateContent);
contentRouter.delete("/:id", contentController.deleteContent);

export default contentRouter;
