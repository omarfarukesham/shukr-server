import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { challengeService } from "./challenge.service";

const createChallenge = catchAsync(async (req, res) => {
  if (!req.user) {
    throw new Error("User is not authenticated");
  }
  const payload = {
    ...req.body,
    createdBy: req.user.id,
  };

  const result = await challengeService.createChallenge(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Challenge created successfully",
    data: result,
  });
});

const getChallenges = catchAsync(async (req, res) => {
  const result = await challengeService.getChallenges(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Challenges retrieved successfully",
    data: result,
  });
});

const getSingleChallenge = catchAsync(async (req, res) => {
  const challengeId = req.params.id;
  const result = await challengeService.getSingleChallenge(challengeId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Challenge retrieved successfully",
    data: result,
  });
});

const updateChallenge = catchAsync(async (req, res) => {
  const challengeId = req.params.id;
  const body = req.body;
  const result = await challengeService.updateChallenge(challengeId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Challenge updated successfully",
    data: result,
  });
});

const deleteChallenge = catchAsync(async (req, res) => {
  const challengeId = req.params.id;
  // const userId = req.user?.id;

  await challengeService.deleteChallenge(challengeId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Challenge deleted successfully",
    data: {},
  });
});

export const challengeController = {
  createChallenge,
  getChallenges,
  getSingleChallenge,
  updateChallenge,
  deleteChallenge,
};
