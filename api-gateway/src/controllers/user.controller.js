import { asyncHandler } from '../utils/async.handler.js'
import { HTTP_STATUS } from '../constants/status.code.js' 
import { STATUS_MESSAGE } from '../constants/status.message.js'
import * as UserService from '../services/user.service.js'

export const getMe = asyncHandler(async (req, res) => {
    const result = await UserService.getMe(req.user.userId)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const getUser = asyncHandler(async (req, res) => {
    const result = await UserService.getUser(req.params.userId)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})