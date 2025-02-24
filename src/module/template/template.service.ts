import QueryBuilder from "../../builder/querybuilder";
import { ITemplate } from "./template.interface";
import Template from "./template.model";

const createTemplate = async (payload: ITemplate): Promise<ITemplate> => {
  const result = await Template.create(payload);
  return result;
};

// Search, filtering, and pagination functions for templates
const getTemplates = async (query: Record<string, unknown>) => {
  const searchableFields = ["title", "templateDetails", "category"];

  const templates = new QueryBuilder(Template.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .select();

  const result = await templates.modelQuery;
  return result;
};

const getSingleTemplate = async (id: string) => {
  const result = await Template.findById(id);
  return result;
};

const updateTemplate = async (id: string, data: ITemplate) => {
  const result = await Template.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteTemplate = async (templateId: string, userId: string) => {
  const result = await Template.findOneAndDelete({
    _id: templateId,
    createdBy: userId,
  });

  if (!result) {
    throw new Error("Template could not be deleted");
  }

  return result;
};

export const templateService = {
  createTemplate,
  getTemplates,
  getSingleTemplate,
  updateTemplate,
  deleteTemplate,
};
