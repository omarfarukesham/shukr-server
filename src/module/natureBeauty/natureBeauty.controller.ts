import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { natureBeautyService } from './natureBeauty.service';

const createNatureBeauty = catchAsync(async (req, res) => {
  const payload = { ...req.body, createdAt: new Date(), updatedAt: new Date() };
  const result = await natureBeautyService.createNatureBeauty(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Nature Beauty created successfully',
    data: result,
  });
});

const getAllNatureBeauties = catchAsync(async (req, res) => {
  const result = await natureBeautyService.getAllNatureBeauties(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Nature Beauties retrieved successfully',
    data: result,
  });
});

const getNatureBeautyById = catchAsync(async (req, res) => {
  const beautyId = req.params.id;
  const result = await natureBeautyService.getSingleNatureBeauty(beautyId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Nature Beauty not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Nature Beauty retrieved successfully',
    data: result,
  });
});

const updateNatureBeauty = catchAsync(async (req, res) => {
  const beautyId = req.params.id;
  const payload = { ...req.body, updatedAt: new Date() };

  const result = await natureBeautyService.updateNatureBeauty(beautyId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Nature Beauty not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Nature Beauty updated successfully',
    data: result,
  });
});

const deleteNatureBeauty = catchAsync(async (req, res) => {
  const beautyId = req.params.id;
  const result = await natureBeautyService.deleteNatureBeauty(beautyId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Nature Beauty not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Nature Beauty deleted successfully',
    data: {},
  });
});

export const natureBeautyController = {
  createNatureBeauty,
  getAllNatureBeauties,
  getNatureBeautyById,
  updateNatureBeauty,
  deleteNatureBeauty,
};
