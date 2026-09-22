import { Router } from 'express'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'
import * as UserController from '../controllers/user.controller.js'

const router = Router()

router.get('/me', auth, UserController.getMe)
router.get('/:userId', auth, authorize('admin'), UserController.getUser)

export default router