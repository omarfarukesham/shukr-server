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
const challenge_router_1 = __importDefault(require("./module/challenges/challenge.router"));
const content_router_1 = __importDefault(require("./module/content/content.router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const template_router_1 = __importDefault(require("./module/template/template.router"));
const app = (0, express_1.default)();
// CORS configuration has solved the issue
// const allowedOrigins = ['http://localhost:5173','http://localhost:3000', 'http://localhost:5174'];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true, 
// }));
// const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174','https://shukr-dashboard.vercel.app'];
// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, origin); // Return the actual origin dynamically
//     } else {
//       callback(new Error('The CORS policy does not allow this origin'), false);
//     }
//   },
//   credentials: true,
// }));
app.use((0, cors_1.default)({
    origin: true,
    credentials: true
}));
// Parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Routes
app.use('/api/auth', auth_router_1.default);
app.use('/api/admin', admin_router_1.default);
app.use('/api/user', user_router_1.default);
app.use('/api/blogs', blog_router_1.default);
app.use('/api/sticky', newSticky_router_1.default);
app.use('/api/category', category_router_1.default);
app.use('/api/dailydua', dailyDua_router_1.dailyDuaRouter);
app.use('/api/homeContent', content_router_1.default);
app.use('/api/template', template_router_1.default);
app.use('/api/challenge', challenge_router_1.default);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Shukur Admin Server is now Live - Alhamdulillah',
    });
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;
