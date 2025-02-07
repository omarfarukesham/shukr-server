import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { positiveThinkingService } from './positiveThinking.service';

const createPositiveThinking = catchAsync(async (req, res) => {
  const payload = { ...req.body };
  const result = await positiveThinkingService.createPositiveThinking(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Positive Thinking created successfully',
    data: result,
  });
});

const getAllPositiveThinkings = catchAsync(async (req, res) => {
  const result = await positiveThinkingService.getAllPositiveThinkings(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Positive Thinkings retrieved successfully',
    data: result,
  });
});

const getPositiveThinkingById = catchAsync(async (req, res) => {
  const positiveThinkingId = req.params.id;
  const result = await positiveThinkingService.getSinglePositiveThinking(positiveThinkingId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Positive Thinking not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Positive Thinking retrieved successfully',
    data: result,
  });
});

const updatePositiveThinking = catchAsync(async (req, res) => {
  const positiveThinkingId = req.params.id;
  const payload = { ...req.body, updatedAt: new Date() };

  const result = await positiveThinkingService.updatePositiveThinking(positiveThinkingId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Positive Thinking not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Positive Thinking updated successfully',
    data: result,
  });
});

const deletePositiveThinking = catchAsync(async (req, res) => {
  const positiveThinkingId = req.params.id;
  const result = await positiveThinkingService.deletePositiveThinking(positiveThinkingId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Positive Thinking not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Positive Thinking deleted successfully',
    data: {},
  });
});

export const positiveThinkingController = {
  createPositiveThinking,
  getAllPositiveThinkings,
  getPositiveThinkingById,
  updatePositiveThinking,
  deletePositiveThinking,
};
