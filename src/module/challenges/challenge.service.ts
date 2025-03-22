import QueryBuilder from "../../builder/querybuilder";
import { IChallenge } from "./challenge.interface";
import Challenge from "./challenge.model";
// import Template from "../template/template.model";

const createChallenge = async (payload: IChallenge): Promise<IChallenge> => {
  const result = await Challenge.create(payload);
  return result;
};


const getChallenges = async (query: Record<string, unknown>) => {
  const searchableFields = ["name", "description", "category"];

  const challenges = new QueryBuilder(Challenge.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .select();

  const result = await challenges.modelQuery;

  const populatedResult = await Promise.all(result.map(async (doc) => {
    await doc.populate("userInfo");
    await doc.populate({
      path: "templateId",
      model: "Template",
      options: { strictPopulate: false },
    });
    return doc;
  }));


  return populatedResult;
};


const getSingleChallenge = async (id: string) => {
  const result = await Challenge.findById(id)
  .populate("userInfo") 
  .populate({
    path: "templateId", 
    model: "Template",  
    options: { strictPopulate: false }, 
  });
  return result;
};

const getFeaturedChallenge = async (query: Record<string, unknown>) => {
  const result = await Challenge.find({ isFeatured: true });
  return result;
};


const updateChallenge = async (id: string, data: IChallenge) => {
  try {
    if (data.isFeatured) {
      const existingFeatured = await Challenge.find({ isFeatured: true });
      
      for (const challenge of existingFeatured) {
        if (challenge._id.toString() !== id) { 
          challenge.isFeatured = false;
          await challenge.save();
        }
      }
    }

    const result = await Challenge.findOneAndUpdate(
      { _id: id },
      data,
      {
        new: true, 
        runValidators: true 
      }
    );

    if (!result) {
      throw new Error('Challenge not found');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update challenge: ${error.message}`);
    } else {
      throw new Error('Failed to update challenge: Unknown error');
    }
  }
};
const deleteChallenge = async (challengeId: string) => {
  const result = await Challenge.findOneAndDelete({
    _id: challengeId,
  });

  if (!result) {
    throw new Error("Challenge could not be deleted");
  }

  return result;
};

export const challengeService = {
  createChallenge,
  getChallenges,
  getSingleChallenge,
  getFeaturedChallenge,
  updateChallenge,
  deleteChallenge,
};
