export interface IContent {
    image?: string;
    title?: string;
    details?: string;
    arabicText?: string;
    ref?: string;
    isShowing?: boolean;
    publishDate?: Date;
    totalLikes?: number;
    status: "published" | "draft";
    category: 
      | "ShukrIns"
      | "positiveThinking"
      | "jazakallahulKhair"
      | "shukrPosts"
      | "natureImg"
      | "duaOfTheDay"
      | "whatNew";
  }
  