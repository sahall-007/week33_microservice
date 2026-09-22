import { HTTP_STATUS } from '../constants/status.code.js'
import * as OrderService from '../services/order.service.js'
import { asyncHandler } from '../utils/async.handler.js'

// b. Implement the following endpoints: 
// POST /orders (create order, read userId from JWT), 
// GET /orders (return only the authenticated user's orders),
// GET /orders/:id (return 403 if order does not belong to the requesting user), 
// PATCH /orders/:id (update status, owner or admin only).

export const createOrder = asyncHandler(async (req, res) => {
    const result = await OrderService.createOrder(req.body)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const getOrder = asyncHandler(async (req, res) => {
    const result = await OrderService.getOrder(req.params.userId)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const updateOrderStatus = asyncHandler(async (req, res) => {
    console.log('order service update order controller reached', req.body)
    const { userId, status } = req.body
    const { orderId } = req.params
    const result = await OrderService.updateOrderStatus(userId, orderId, status)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})