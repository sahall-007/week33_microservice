import express from 'express'
import userRoute from './routes/user.routes.js'
import { errorHandler } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', userRoute)
app.use(errorHandler)

export default app 