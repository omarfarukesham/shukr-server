import { z } from "zod";

const blogValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Title must be provided and must be a string",
      })
      .min(5, { message: "Title must be at least 5 characters long" })
      .max(100, { message: "Title cannot exceed 100 characters" }),

    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: "Slug must be lowercase, alphanumeric and hyphens only",
      })
      .optional(),

    description: z.string().optional(),

    content: z
      .string({
        required_error: "Content must be provided and must be a string",
      })
      .min(10, { message: "Content must be at least 10 characters long" }),

    category: z
      .string()
      .optional()
      // .regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId format for category" }),
      ,

    tags: z.array(z.string().min(1)).optional(),

    image: z.string().optional(),

    thumbnail: z.string().optional(),

    author: z
      .string({
        required_error: "Author ID must be provided and must be a string",
      })
      // .regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId format for author" }),
      .optional(),

    isPublished: z.boolean().optional().default(false),

    views: z.number().int().nonnegative().optional().default(0),

    likes: z.number().int().nonnegative().optional().default(0),

    comments: z
      .array(
        z.object({
          user: z.string().optional(),
          text: z.string().optional(),
          createdAt: z.date().optional(),
        })
      )
      .optional(),

    metaTitle: z.string().max(60).optional(),

    metaDescription: z.string().max(160).optional(),

    readTime: z.number().int().positive().optional(),

    status: z
      .enum(["draft", "review", "published", "archived"])
      .optional()
      .default("draft"),

    scheduledAt: z.preprocess(
      (arg) => (typeof arg === "string" || arg instanceof Date ? new Date(arg) : undefined),
      z.date().optional()
    ),
  }),
});

export const BlogValidation = {
  blogValidationSchema,
};
