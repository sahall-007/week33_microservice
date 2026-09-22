import UserSchema from '../models/user.schema.js'
import { HTTP_STATUS } from '../constants/status.code.js'
import { AppError } from '../utils/app.error.js'

// b. Implement the following endpoints: 
// POST /auth/register (hash password with bcrypt, return JWT), 
// POST /auth/login (verify credentials, return JWT with userId and role), 
// GET /users/me (protected, return user without password field),
// GET /users/:id (protected, admin-only, return 403 for non-admin callers).

export const createUser = async (userData) => {
    return await UserSchema.insertOne(userData)
}

export const getUser = async (_id) => {
    return await UserSchema.findOne({ _id })
}

export const findByEmail = async (email) => {
    return await UserSchema.findOne({ email })
}