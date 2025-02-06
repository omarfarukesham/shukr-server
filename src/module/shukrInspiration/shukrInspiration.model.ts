import { Schema, model } from "mongoose";
import { IShukrInspiration } from "./shukrInspiration.interface";

const shukrInspirationSchema = new Schema<IShukrInspiration>(
  {
    image: {
      type: String,
      required: [true, "Image is required"],
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

const ShukrInspiration = model<IShukrInspiration>("ShukrInspiration", shukrInspirationSchema);
export default ShukrInspiration;
