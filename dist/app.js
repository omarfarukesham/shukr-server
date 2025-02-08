"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./module/user/user.router"));
const auth_router_1 = __importDefault(require("./module/auth/auth.router"));
const blog_router_1 = __importDefault(require("./module/blog/blog.router"));
const globalErrorHandler_1 = require("./middlewares/globalErrorHandler");
const admin_router_1 = __importDefault(require("./module/admin/admin.router"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const newSticky_router_1 = __importDefault(require("./module/newSticky/newSticky.router"));
const category_router_1 = __importDefault(require("./module/category/category.router"));
const dailyDua_router_1 = require("./module/dailyDua/dailyDua.router");
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use('/api/auth', auth_router_1.default);
app.use('/api/admin', admin_router_1.default);
app.use('/api/user', user_router_1.default);
app.use('/api/blogs', blog_router_1.default);
app.use('/api/sticky', newSticky_router_1.default);
app.use('/api/category', category_router_1.default);
app.use('/api/dailydua', dailyDua_router_1.dailyDuaRouter);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Shukur Admin Server is now Live - Alhamdulillah',
    });
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
