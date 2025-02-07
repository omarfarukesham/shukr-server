// models/category.model.ts
import { Schema, model } from 'mongoose';

export interface ICategory {
    image: string;
    isShowing: boolean;
    type: string;
}

const categorySchema = new Schema<ICategory>({
  image: {
    type: String,
    required: true,
  },
  isShowing: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
    enum: ['PositiveThinking', 'NatureBeauty', 'ShukrPost', 'Jazakallahul', 'Inspiration'],
  },
}, {
  timestamps: true, 
});

const Category = model<ICategory>('Category', categorySchema);
export default Category;



  /**
   * https://iili.io/2DNwoNf.png
https://iili.io/2DNwnAG.png
https://iili.io/2DNwC9s.png


https://iili.io/2DNwIol.png
https://iili.io/2DNwuPS.png
https://iili.io/2DNwRK7.png
   */