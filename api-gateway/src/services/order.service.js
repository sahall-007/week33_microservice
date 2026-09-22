import { HTTP_STATUS } from '../constants/status.code.js'
import { AppError } from '../utils/app.error.js'
import axios from 'axios'
import { orderService } from '../configs/services.js'

export const createOrder = async (data) => {
    const response = await axios.post(`${orderService}/order`, data)

    return response.data.data
}

export const getOrder = async (userId) => {
    const response = await axios.get(`${orderService}/order/${userId}`)

    return response.data.data
}

export const updateOrderStatus = async (userId, orderId, status) => {
    console.log({userId, ...status})
    const response = await axios.patch(`${orderService}/order/${orderId}`, {userId, ...status})

    return response.data.data
}