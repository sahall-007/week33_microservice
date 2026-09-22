import { asyncHandler } from '../utils/async.handler.js'
import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'
import * as OrderService from '../services/order.service.js'

export const createOrder = asyncHandler(async (req, res) => {
    const result = await OrderService.createOrder(req.body)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const getOrder = asyncHandler(async (req, res) => {
    const result = await OrderService.getOrder(req.user.userId)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})

export const updateOrderStatus = asyncHandler(async (req, res) => {
    console.log('api gateaway update order controller reached')
    const result = await OrderService.updateOrderStatus(req.user.userId, req.params.orderId, req.body)

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: result
    })
})