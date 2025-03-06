import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { templateService } from "./template.service";
// import { templateService } from "./template.service";

const createTemplate = catchAsync(async (req, res) => {
    // console.log(req.user)

  if (!req.user) {
    throw new Error("User is not authenticated");
  }

  const payload = {
    ...req.body,
    createdBy: req.user.id,
  };

  const result = await templateService.createTemplate(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Template created successfully",
    data: result,
  });
});

const getTemplates = catchAsync(async (req, res) => {
  const result = await templateService.getTemplates(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Templates retrieved successfully",
    data: result,
  });
});

const getSingleTemplate = catchAsync(async (req, res) => {
  const templateId = req.params.id;
  const result = await templateService.getSingleTemplate(templateId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Template retrieved successfully",
    data: result,
  });
});

const updateTemplate = catchAsync(async (req, res) => {
  const templateId = req.params.id;
  const body = req.body;

  const result = await templateService.updateTemplate(templateId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Template updated successfully",
    data: result,
  });
});

const deleteTemplate = catchAsync(async (req, res) => {
  const templateId = req.params.id;
  
  await templateService.deleteTemplate(templateId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Template deleted successfully",
    data: {},
  });
});

export const templateController = {
  createTemplate,
  getTemplates,
  getSingleTemplate,
  updateTemplate,
  deleteTemplate,
};
