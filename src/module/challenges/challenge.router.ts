import { Router } from "express";
import { challengeController } from "./challenge.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";

const ChallengeRouter = Router();


ChallengeRouter.post("/",  auth(USER_ROLE.admin, USER_ROLE.user), challengeController.createChallenge);
ChallengeRouter.get("/featured", challengeController.getFeaturedChallenge);
ChallengeRouter.get("/",   challengeController.getChallenges);
ChallengeRouter.get("/:id",   challengeController.getSingleChallenge);
ChallengeRouter.patch("/:id",  challengeController.updateChallenge);
ChallengeRouter.delete("/:id",  challengeController.deleteChallenge);

export default ChallengeRouter;
