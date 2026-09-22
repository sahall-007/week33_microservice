import express from 'express'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import orderRoute from './routes/order.route.js'
import { errorHandler } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/order', orderRoute)

app.use(errorHandler)

export default app