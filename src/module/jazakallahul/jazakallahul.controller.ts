import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { jazakallahulService } from './jazakallahul.service';

const createJazakallahul = catchAsync(async (req, res) => {
  const payload = { ...req.body};
  const result = await jazakallahulService.createJazakallahul(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Jazakallahul created successfully',
    data: result,
  });
});

const getAllJazakallahul = catchAsync(async (req, res) => {
  const result = await jazakallahulService.getAllJazakallahul(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Jazakallahul retrieved successfully',
    data: result,
  });
});

const getJazakallahulById = catchAsync(async (req, res) => {
  const jazakallahulId = req.params.id;
  const result = await jazakallahulService.getSingleJazakallahul(jazakallahulId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Jazakallahul not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Jazakallahul retrieved successfully',
    data: result,
  });
});

const updateJazakallahul = catchAsync(async (req, res) => {
  const jazakallahulId = req.params.id;
  const payload = { ...req.body, updatedAt: new Date() };

  const result = await jazakallahulService.updateJazakallahul(jazakallahulId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Jazakallahul not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Jazakallahul updated successfully',
    data: result,
  });
});

const deleteJazakallahul = catchAsync(async (req, res) => {
  const jazakallahulId = req.params.id;
  const result = await jazakallahulService.deleteJazakallahul(jazakallahulId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Jazakallahul not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Jazakallahul deleted successfully',
    data: {},
  });
});

export const jazakallahulController = {
  createJazakallahul,
  getAllJazakallahul,
  getJazakallahulById,
  updateJazakallahul,
  deleteJazakallahul,
};
