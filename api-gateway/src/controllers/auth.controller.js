import { asyncHandler } from '../utils/async.handler.js'
import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'
import * as AuthService from '../services/auth.service.js'

export const register = asyncHandler(async (req, res) => {
    const registerUser = await AuthService.register(req.body)
    const { accessToken, user } = registerUser

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(HTTP_STATUS.OK).json({
        success: true,
        accessToken,
        user
    })    
})     

export const login = asyncHandler(async (req, res) => {
    const registerUser = await AuthService.login(req.body)
    const { accessToken, user } = registerUser

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(HTTP_STATUS.OK).json({
        success: true,
        accessToken,
        user
    })  
})