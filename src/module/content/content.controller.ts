import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { contentService } from './content.service';

const createContent = catchAsync(async (req, res) => {
  const payload = {
    ...req.body,
  };
  const result = await contentService.createContent(payload);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Content created successfully',
    data: result,
  });
});

const getAllContent = catchAsync(async (req, res) => {
  const result = await contentService.getAllContent(req.query);
  
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Content retrieved successfully',
    data: result,
  });
});

const getSingleContent = catchAsync(async (req, res) => {
  const contentId = req.params.id;
  const result = await contentService.getContentById(contentId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Content retrieved successfully',
    data: result,
  });
});

const updateContent = catchAsync(async (req, res) => {
  const contentId = req.params.id;
  const body = req.body;

  const result = await contentService.updateContent(contentId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Content updated successfully',
    data: result,
  });
});

const deleteContent = catchAsync(async (req, res) => {
  const contentId = req.params.id;
  const userId = req.user?.id;

  await contentService.deleteContent(contentId, userId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Content deleted successfully',
    data: {},
  });
});

export const contentController = {
  createContent,
  getAllContent,
  getSingleContent,
  updateContent,
  deleteContent,
};
