
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


const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/user', userRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/sticky', newStickyRouter)
app.use('/api/category', categoryRouqter)
app.use('/api/dailydua', dailyDuaRouter)
app.use('/api/challenge', ChallengeRouter)
app.use('/api/homeContent', contentRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Shukur Admin Server is now Live - Alhamdulillah',
  })
})


app.use(globalErrorHandler)
app.use(notFound)



export default app
