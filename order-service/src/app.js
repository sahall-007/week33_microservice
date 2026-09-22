import express from 'express'
import orderRoute from './routes/order.routes.js'
import { errorHandler } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', orderRoute)
app.use(errorHandler)

export default app