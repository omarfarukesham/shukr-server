"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.challengeController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const challenge_service_1 = require("./challenge.service");
const createChallenge = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        throw new Error("User is not authenticated");
    }
    const payload = Object.assign(Object.assign({}, req.body), { createdBy: req.user.id });
    const result = yield challenge_service_1.challengeService.createChallenge(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Challenge created successfully",
        data: result,
    });
}));
const getChallenges = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield challenge_service_1.challengeService.getChallenges(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Challenges retrieved successfully",
        data: result,
    });
}));
const getSingleChallenge = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const challengeId = req.params.id;
    const result = yield challenge_service_1.challengeService.getSingleChallenge(challengeId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Challenge retrieved successfully",
        data: result,
    });
}));
const updateChallenge = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const challengeId = req.params.id;
    const body = req.body;
    const result = yield challenge_service_1.challengeService.updateChallenge(challengeId, body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Challenge updated successfully",
        data: result,
    });
}));
const deleteChallenge = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const challengeId = req.params.id;
    // const userId = req.user?.id;
    yield challenge_service_1.challengeService.deleteChallenge(challengeId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Challenge deleted successfully",
        data: {},
    });
}));
exports.challengeController = {
    createChallenge,
    getChallenges,
    getSingleChallenge,
    updateChallenge,
    deleteChallenge,
};
