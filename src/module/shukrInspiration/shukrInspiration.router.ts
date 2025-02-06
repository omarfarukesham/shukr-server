import express from "express";
import { shukrInspirationController } from "./shukrInspiration.controller";
// import shukrInspirationController from "./shukrInspiration.controller";

const shukrInspirationRouter = express.Router();

shukrInspirationRouter.post("/", shukrInspirationController.createShukrInspiration);
shukrInspirationRouter.get("/", shukrInspirationController.getAllShukrInspirations);
shukrInspirationRouter.get("/:id", shukrInspirationController.getShukrInspirationById);
shukrInspirationRouter.patch("/:id", shukrInspirationController.updateShukrInspiration);
shukrInspirationRouter.delete("/:id", shukrInspirationController.deleteShukrInspiration);

export default shukrInspirationRouter;
