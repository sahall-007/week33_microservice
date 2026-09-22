import { getMe } from '../gRPC/user.gRPC.client.js'
import * as OrderRepository from '../repositories/order.repository.js'
import { AppError } from '../utils/app.error.js'
import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'

// b. Implement the following endpoints: 
// POST /orders (create order, read userId from JWT), 
// GET /orders (return only the authenticated user's orders),
// GET /orders/:id (return 403 if order does not belong to the requesting user), 
// PATCH /orders/:id (update status, owner or admin only).

export const createOrder = async (orderData) => {
    const orderItems = orderData.items
    const order = {
        userId: orderData.userId,
        totalAmount: orderData.totalAmount,
        status: orderData.status
    }

    const result = await OrderRepository.createOrder(order, orderItems)

    console.log('order service create order result: ', result)

    return result
}   

export const getOrder = async (userId) => {
    const result = await OrderRepository.getOrder(userId)

    return result
}   

export const updateOrderStatus = async (userId, orderId, status) => {
    console.log('order service update order service reached')
    const user = await getMe(userId)
    console.log('user from getme gRPC', user)
    if(!user) throw new AppError(STATUS_MESSAGE.FORBIDDEN, HTTP_STATUS.FORBIDDEN)
        
    const result = await OrderRepository.updateOrderStatus(orderId, status)

    return result
}