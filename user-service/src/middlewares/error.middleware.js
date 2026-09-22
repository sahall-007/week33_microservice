import { AppError } from "../utils/app.error.js"
import { HTTP_STATUS } from "../constants/status.code.js"

export const errorHandler = (err, req, res, next) => {
    if(err instanceof AppError){
        return res
        .status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: err.message })
    }

    return res
    .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message})
}