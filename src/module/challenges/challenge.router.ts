import { Router } from "express";
import { challengeController } from "./challenge.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constants";
// import { ChallengeController } from "./challenge.controller";

const ChallengeRouter = Router();


ChallengeRouter.post("/", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.createChallenge);
ChallengeRouter.get("/", challengeController.getChallenges);
ChallengeRouter.get("/:id",  challengeController.getSingleChallenge);
ChallengeRouter.patch("/:id", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.updateChallenge);
ChallengeRouter.delete("/:id", auth(USER_ROLE.admin, USER_ROLE.user), challengeController.deleteChallenge);

export default ChallengeRouter;
