import { Router } from "express"
import * as OrderController from '../controllers/order.controller.js'

const router = Router()

// b. Implement the following endpoints: 
// POST /orders (create order, read userId from JWT), 
// GET /orders (return only the authenticated user's orders),
// GET /orders/:id (return 403 if order does not belong to the requesting user), 
// PATCH /orders/:id (update status, owner or admin only).

router.post('/order', OrderController.createOrder)
router.get('/order/:userId', OrderController.getOrder)
// router.get('/orders/:id')
router.patch('/order/:orderId', OrderController.updateOrderStatus)

export default router