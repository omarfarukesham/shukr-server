import { Schema, model } from 'mongoose';

export interface INatureBeauty {
  image: string;
  isShowing: boolean;
}

const natureBeautySchema = new Schema<INatureBeauty>(
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

const NatureBeauty = model<INatureBeauty>('NatureBeauty', natureBeautySchema);
export default NatureBeauty;
