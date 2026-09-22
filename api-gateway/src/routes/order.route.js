import { Router } from 'express'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'
import * as OrderController from '../controllers/order.controller.js'

const router = Router()

router.post('/', auth, OrderController.createOrder)
router.get('/', auth, OrderController.getOrder)
// router.get('/orders/:id')
router.patch('/:orderId', auth, authorize('admin'), OrderController.updateOrderStatus)

export default router