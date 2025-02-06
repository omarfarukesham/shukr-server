import { Router } from "express";
import { newStickyController } from "./newSticky.controller";

const newStickyRouter = Router();

newStickyRouter.post("/", newStickyController.createSticky);
newStickyRouter.get("/", newStickyController.getAllStickies);
newStickyRouter.get("/:id", newStickyController.getStickyById);
newStickyRouter.patch("/:id", newStickyController.updateSticky);
newStickyRouter.delete("/:id", newStickyController.deleteSticky);

export default newStickyRouter;
