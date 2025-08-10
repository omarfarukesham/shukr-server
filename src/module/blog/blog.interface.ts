export interface IBlog {
  title: string;
  slug?: string;
  description?: string;
  content?: string;
  category?: string;
  tags?: string[];
  image?: string;
  thumbnail?: string;
  author: string;
  isPublished: boolean;
  views?: number;
  likes?: number;
  comments?: {
    user: string;
    text: string;
    createdAt?: Date;
  }[];
  metaTitle?: string;
  metaDescription?: string;
  readTime?: number;
  status?: "draft" | "review" | "published" | "archived";
  scheduledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
