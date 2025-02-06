import { model, Schema } from "mongoose";
import { INewsticky } from "./newSticky.interface";

const newStickySchema = new Schema<INewsticky>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: 10,
      maxlength: 500,
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

const NewSticky = model<INewsticky>("NewSticky", newStickySchema);
export default NewSticky;
