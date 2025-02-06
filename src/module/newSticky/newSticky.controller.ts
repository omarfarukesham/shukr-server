import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { newStickyService } from './newSticky.service';

const createSticky = catchAsync(async (req, res) => {
  const payload = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await newStickyService.createSticky(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Sticky created successfully',
    data: result,
  });
});

const getAllStickies = catchAsync(async (req, res) => {
  console.log('hi')
  const result = await newStickyService.getStickies(req.query);
  console.log(result)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Stickies retrieved successfully',
    data: result,
  });
});

const getStickyById = catchAsync(async (req, res) => {
  const stickyId = req.params.id;
  const result = await newStickyService.getSingleSticky(stickyId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Sticky not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Sticky retrieved successfully',
    data: result,
  });
});

const updateSticky = catchAsync(async (req, res) => {
  const stickyId = req.params.id;
  const payload = {
    ...req.body,
    updatedAt: new Date(),
  };

  const result = await newStickyService.updateSticky(stickyId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Sticky not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Sticky updated successfully',
    data: result,
  });
});

const deleteSticky = catchAsync(async (req, res) => {
  const stickyId = req.params.id;
  const result = await newStickyService.deleteSticky(stickyId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Sticky not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Sticky deleted successfully',
    data: {},
  });
});

export const newStickyController = {
  createSticky,
  getAllStickies,
  getStickyById,
  updateSticky,
  deleteSticky,
};
