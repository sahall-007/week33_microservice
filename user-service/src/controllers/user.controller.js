import { asyncHandler } from '../utils/async.handler.js'
import { HTTP_STATUS } from "../constants/status.code.js"
import * as UserService from '../services/user.service.js'

// b. Implement the following endpoints: 
// POST /auth/register (hash password with bcrypt, return JWT), 
// POST /auth/login (verify credentials, return JWT with userId and role), 
// GET /users/me (protected, return user without password field),
// GET /users/:id (protected, admin-only, return 403 for non-admin callers).

export const register = asyncHandler(async (req, res) => {
    const result = await UserService.register(req.body)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const login = asyncHandler(async (req, res) => {
    const result = await UserService.login(req.body)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const getMe = asyncHandler(async (req, res) => {
    const result = await UserService.getUser(req.params.userId)

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
