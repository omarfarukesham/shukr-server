import { Schema, model } from 'mongoose';

export interface IShukrPost {
  image: string;
  isShowing: boolean;
}

const shukrPostSchema = new Schema<IShukrPost>(
  {
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    isShowing: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ShukrPost = model<IShukrPost>('ShukrPost', shukrPostSchema);
export default ShukrPost;
