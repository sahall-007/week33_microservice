import { HTTP_STATUS } from '../constants/status.code.js'
import { AppError } from '../utils/app.error.js'
import axios from 'axios'
import { userService } from '../configs/services.js'

export const getMe = async (userId) => {
    const response = await axios.get(`${userService}/user/me/${userId}`)

    return response.data.data
}

export const getUser = async (userId) => {
    const response = await axios.get(`${userService}/user/${userId}`)

    return response.data.data
}