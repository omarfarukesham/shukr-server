import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { shukrInspirationService } from './shukrInspiration.service';
// import shukrInspirationService from './shukrInspiration.service';

const createShukrInspiration = catchAsync(async (req, res) => {
  const payload = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await shukrInspirationService.createShukrInspiration(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Shukr Inspiration created successfully',
    data: result,
  });
});

const getAllShukrInspirations = catchAsync(async (req, res) => {
  const result = await shukrInspirationService.getAllShukrInspirations(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Inspirations retrieved successfully',
    data: result,
  });
});

const getShukrInspirationById = catchAsync(async (req, res) => {
  const inspirationId = req.params.id;
  const result = await shukrInspirationService.getSingleShukrInspiration(inspirationId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Inspiration not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Inspiration retrieved successfully',
    data: result,
  });
});

const updateShukrInspiration = catchAsync(async (req, res) => {
  const inspirationId = req.params.id;
  const payload = {
    ...req.body,
    updatedAt: new Date(),
  };

  const result = await shukrInspirationService.updateShukrInspiration(inspirationId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Inspiration not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Inspiration updated successfully',
    data: result,
  });
});

const deleteShukrInspiration = catchAsync(async (req, res) => {
  const inspirationId = req.params.id;
  const result = await shukrInspirationService.deleteShukrInspiration(inspirationId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Inspiration not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Inspiration deleted successfully',
    data: {},
  });
});

export const shukrInspirationController = {
  createShukrInspiration,
  getAllShukrInspirations,
  getShukrInspirationById,
  updateShukrInspiration,
  deleteShukrInspiration,
};
