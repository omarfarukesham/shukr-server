import { model, Schema } from "mongoose";
import { IDailyDua } from "./dailyDua.interface";

  
const dailyDuaSchema = new Schema<IDailyDua>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: 3,
      maxlength: 100,
    },
    arabicText: {
      type: String,
      required: [true, "Arabic text is required"],
    },
    isShowing: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: 10,
      maxlength: 500,
    },
    reference: {
      type: String,
      required: [true, "Reference is required"],
    },
  },
  {
    timestamps: true,
  }
);

const DailyDua = model<IDailyDua>("DailyDua", dailyDuaSchema);
export default DailyDua;
