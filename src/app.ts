
import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'
import authRouter from './module/auth/auth.router'
import blogRouter from './module/blog/blog.router'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import adminRouter from './module/admin/admin.router'
import notFound from './middlewares/notFound'
import newStickyRouter from './module/newSticky/newSticky.router'
import categoryRouqter from './module/category/category.router'
import { dailyDuaRouter } from './module/dailyDua/dailyDua.router'
import ChallengeRouter from './module/challenges/challenge.router'
import contentRouter from './module/content/content.router'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import templateRouter from './module/template/template.router'

const app = express()


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

const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin); // Return the actual origin dynamically
    } else {
      callback(new Error('The CORS policy does not allow this origin'), false);
    }
  },
  credentials: true,
}));


// Parsers
app.use(express.json());
app.use(cookieParser());


// Routes

app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/sticky', newStickyRouter)
app.use('/api/category', categoryRouqter)
app.use('/api/dailydua', dailyDuaRouter)
app.use('/api/homeContent', contentRouter)
app.use('/api/template', templateRouter)
app.use('/api/challenge', ChallengeRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Shukur Admin Server is now Live - Alhamdulillah',
  })
})


app.use(globalErrorHandler)
app.use(notFound)



export default app
