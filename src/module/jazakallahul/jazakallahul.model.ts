import { Schema, model } from 'mongoose';

export interface IJazakallahul {
  image: string;
  isShowing: boolean;
}

const jazakallahulSchema = new Schema<IJazakallahul>(
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

const Jazakallahul = model<IJazakallahul>('Jazakallahul', jazakallahulSchema);
export default Jazakallahul;
