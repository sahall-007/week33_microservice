import { HTTP_STATUS } from '../constants/status.code.js'
import { AppError } from '../utils/app.error.js'
import axios from 'axios'
import { userService } from '../configs/services.js'

export const register = async (data) => {
    const response = await axios.post(`${userService}/auth/register`, data)

    return response.data.data
}

export const login = async (data) => {
    const response = await axios.post(`${userService}/auth/login`, data)

    return response.data.data
}