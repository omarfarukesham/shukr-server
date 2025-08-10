"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const blogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: "Title must be provided and must be a string",
        })
            .min(5, { message: "Title must be at least 5 characters long" })
            .max(100, { message: "Title cannot exceed 100 characters" }),
        slug: zod_1.z
            .string()
            .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be lowercase, alphanumeric and hyphens only",
        })
            .optional(),
        description: zod_1.z.string().optional(),
        content: zod_1.z
            .string({
            required_error: "Content must be provided and must be a string",
        })
            .min(10, { message: "Content must be at least 10 characters long" }),
        category: zod_1.z
            .string()
            .optional()
        // .regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId format for category" }),
        ,
        tags: zod_1.z.array(zod_1.z.string().min(1)).optional(),
        image: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().optional(),
        author: zod_1.z
            .string({
            required_error: "Author ID must be provided and must be a string",
        })
            // .regex(/^[a-fA-F0-9]{24}$/, { message: "Invalid ObjectId format for author" }),
            .optional(),
        isPublished: zod_1.z.boolean().optional().default(false),
        views: zod_1.z.number().int().nonnegative().optional().default(0),
        likes: zod_1.z.number().int().nonnegative().optional().default(0),
        comments: zod_1.z
            .array(zod_1.z.object({
            user: zod_1.z.string().optional(),
            text: zod_1.z.string().optional(),
            createdAt: zod_1.z.date().optional(),
        }))
            .optional(),
        metaTitle: zod_1.z.string().max(60).optional(),
        metaDescription: zod_1.z.string().max(160).optional(),
        readTime: zod_1.z.number().int().positive().optional(),
        status: zod_1.z
            .enum(["draft", "review", "published", "archived"])
            .optional()
            .default("draft"),
        scheduledAt: zod_1.z.preprocess((arg) => (typeof arg === "string" || arg instanceof Date ? new Date(arg) : undefined), zod_1.z.date().optional()),
    }),
});
exports.BlogValidation = {
    blogValidationSchema,
};
