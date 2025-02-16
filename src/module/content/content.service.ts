import QueryBuilder from '../../builder/querybuilder';
import { IContent } from './content.interface';
import Content from './content.model';

const createContent = async (payload: IContent): Promise<IContent> => {
  const result = await Content.create(payload);
  return result;
};

// Get all content grouped by category
const getAllContent = async (query: Record<string, unknown>) => {
  const searchableFields = ['title', 'details', 'arabicText', 'ref'];

  const queryBuilder = new QueryBuilder(Content.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .select();

  const allContent = await queryBuilder.modelQuery;

  // Group content by category
  const groupedContent = {
    shukrInspiration: allContent.filter(c => c.category === 'ShukrIns'),
    positiveThinking: allContent.filter(c => c.category === 'positiveThinking'),
    jazakallahulKhair: allContent.filter(c => c.category === 'jazakallahulKhair'),
    shukrPosts: allContent.filter(c => c.category === 'shukrPosts'),
    duaOfTheDay: allContent.filter(c => c.category === 'duaOfTheDay'),
    whatNew: allContent.filter(c => c.category === 'whatNew'),
  };

  return {
    status: 'success',
    message: 'Data retrieved successfully',
    data: groupedContent,
  };
};

const getContentById = async (id: string) => {
  return await Content.findById(id);
};

const updateContent = async (id: string, data: Partial<IContent>) => {
  return await Content.findOneAndUpdate({ _id: id }, data, { new: true });
};

const deleteContent = async (contentId: string, userId: string) => {
  const result = await Content.findOneAndDelete({ _id: contentId, author: userId });

  if (!result) {
    throw new Error('Could not delete content');
  }

  return result;
};

export const contentService = {
  createContent,
  getAllContent,
  getContentById,
  updateContent,
  deleteContent,
};
