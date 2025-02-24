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
exports.challengeService = void 0;
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const challenge_model_1 = __importDefault(require("./challenge.model"));
const createChallenge = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield challenge_model_1.default.create(payload);
    return result;
});
// Search, filtering, and pagination functions for challenges
// const getChallenges = async (query: Record<string, unknown>) => {
//   const searchableFields = ["name", "description", "category"];
//   const challenges = new QueryBuilder(Challenge.find(), query)
//     .search(searchableFields)
//     .filter()
//     .sort()
//     .select();
//   const result = await challenges.modelQuery
//     .populate("userInfo") 
//     .populate({
//       path: "templateId", 
//       model: "Template",  
//       options: { strictPopulate: false }, 
//     });
//   return result;
// };
const getChallenges = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ["name", "description", "category"];
    const challenges = new querybuilder_1.default(challenge_model_1.default.find(), query)
        .search(searchableFields)
        .filter()
        .sort()
        .select();
    const result = yield challenges.modelQuery;
    const populatedResult = yield Promise.all(result.map((doc) => __awaiter(void 0, void 0, void 0, function* () {
        yield doc.populate("userInfo");
        yield doc.populate({
            path: "templateId",
            model: "Template",
            options: { strictPopulate: false },
        });
        return doc;
    })));
    return populatedResult;
});
const getSingleChallenge = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield challenge_model_1.default.findById(id)
        .populate("userInfo")
        .populate({
        path: "templateId",
        model: "Template",
        options: { strictPopulate: false },
    });
    return result;
});
const updateChallenge = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield challenge_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
});
const deleteChallenge = (challengeId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield challenge_model_1.default.findOneAndDelete({
        _id: challengeId,
        createdBy: userId,
    });
    if (!result) {
        throw new Error("Challenge could not be deleted");
    }
    return result;
});
exports.challengeService = {
    createChallenge,
    getChallenges,
    getSingleChallenge,
    updateChallenge,
    deleteChallenge,
};
