import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { dailyDuaService } from './dailyDua.service';

const createDua = catchAsync(async (req, res) => {
  const payload = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await dailyDuaService.createDua(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Dua created successfully',
    data: result,
  });
});

const getAllDuas = catchAsync(async (req, res) => {
  const result = await dailyDuaService.getAllDuas(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Duas retrieved successfully',
    data: result,
  });
});

const getDuaById = catchAsync(async (req, res) => {
  const duaId = req.params.id;
  const result = await dailyDuaService.getDuaById(duaId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Dua not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Dua retrieved successfully',
    data: result,
  });
});

const updateDua = catchAsync(async (req, res) => {
  const duaId = req.params.id;
  const payload = {
    ...req.body,
    updatedAt: new Date(),
  };

  const result = await dailyDuaService.updateDua(duaId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Dua not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Dua updated successfully',
    data: result,
  });
});

const deleteDua = catchAsync(async (req, res) => {
  const duaId = req.params.id;
  const result = await dailyDuaService.deleteDua(duaId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Dua not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Dua deleted successfully',
    data: {},
  });
});

export const dailyDuaController = {
  createDua,
  getAllDuas,
  getDuaById,
  updateDua,
  deleteDua,
};
