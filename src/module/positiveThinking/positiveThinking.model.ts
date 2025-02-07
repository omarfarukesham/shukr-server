export interface IPositiveThinking {
    image: string;
    isShowing: boolean;
  }
  
  import { Schema, model } from "mongoose";
  
  const positiveThinkingSchema = new Schema<IPositiveThinking>(
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
  
  const PositiveThinking = model<IPositiveThinking>("PositiveThinking", positiveThinkingSchema);
  export default PositiveThinking;
  