import ShukrInspiration from "./shukrInspiration.model";
import { IShukrInspiration } from "./shukrInspiration.interface";

const createShukrInspiration = async (payload: IShukrInspiration): Promise<IShukrInspiration> => {
  const result = await ShukrInspiration.create(payload);
  return result;
};

const getAllShukrInspirations = async (query: Record<string, unknown>): Promise<IShukrInspiration[]> => {
  const result = await ShukrInspiration.find(query);
  return result;
};

const getSingleShukrInspiration = async (id: string): Promise<IShukrInspiration | null> => {
  const result = await ShukrInspiration.findById(id);
  return result;
};

const updateShukrInspiration = async (id: string, data: Partial<IShukrInspiration>): Promise<IShukrInspiration | null> => {
  const result = await ShukrInspiration.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  return result;
};

const deleteShukrInspiration = async (id: string): Promise<IShukrInspiration | null> => {
  const result = await ShukrInspiration.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Shukr Inspiration not found or could not be deleted");
  }
  return result;
};

export const shukrInspirationService = {
  createShukrInspiration,
  getAllShukrInspirations,
  getSingleShukrInspiration,
  updateShukrInspiration,
  deleteShukrInspiration,
};
