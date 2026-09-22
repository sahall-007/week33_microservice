import { Router } from 'express'
import * as userController from '../controllers/user.controller.js'

// b. Implement the following endpoints: 
// POST /auth/register (hash password with bcrypt, return JWT), 
// POST /auth/login (verify credentials, return JWT with userId and role), 
// GET /users/me (protected, return user without password field),
// GET /users/:id (protected, admin-only, return 403 for non-admin callers).

const route = Router()

route.post('/auth/register', userController.register)
route.post('/auth/login', userController.login)
// route.post('/logout', userController.logout)
route.get('/user/me/:userId', userController.getMe)
route.get('/user/:userId', userController.getUser)

export default route