import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { shukrPostService } from './shukrPost.service';

const createShukrPost = catchAsync(async (req, res) => {
  const payload = { ...req.body, createdAt: new Date(), updatedAt: new Date() };
  const result = await shukrPostService.createShukrPost(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: 'Shukr Post created successfully',
    data: result,
  });
});

const getAllShukrPosts = catchAsync(async (req, res) => {
  const result = await shukrPostService.getAllShukrPosts(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Posts retrieved successfully',
    data: result,
  });
});

const getShukrPostById = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const result = await shukrPostService.getSingleShukrPost(postId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Post not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Post retrieved successfully',
    data: result,
  });
});

const updateShukrPost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const payload = { ...req.body, updatedAt: new Date() };

  const result = await shukrPostService.updateShukrPost(postId, payload);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Post not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Post updated successfully',
    data: result,
  });
});

const deleteShukrPost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const result = await shukrPostService.deleteShukrPost(postId);

  if (!result) {
    return sendResponse(res, {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Shukr Post not found',
      data: null,
    });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Shukr Post deleted successfully',
    data: {},
  });
});

export const shukrPostController = {
  createShukrPost,
  getAllShukrPosts,
  getShukrPostById,
  updateShukrPost,
  deleteShukrPost,
};
