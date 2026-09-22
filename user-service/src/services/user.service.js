import bcrypt, { hash } from 'bcrypt'
import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'
import { AppError } from '../utils/app.error.js'
import { generateAccessToken } from '../utils/jwt.js'
import * as UserRepository from '../repositories/user.repository.js'

// b. Implement the following endpoints: 
// POST /auth/register (hash password with bcrypt, return JWT), 
// POST /auth/login (verify credentials, return JWT with userId and role), 
// GET /users/me (protected, return user without password field),
// GET /users/:id (protected, admin-only, return 403 for non-admin callers).

export const register = async (userData) => {
    const { email, password } = userData

    const userAlreadyExist = await UserRepository.findByEmail(email)
    if(userAlreadyExist) throw new AppError(STATUS_MESSAGE.USER_ALREADY_EXIST, HTTP_STATUS.CONFLICT)

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await UserRepository.createUser({...userData, password: hashedPassword})
    const accessToken = await generateAccessToken(user._id, user.email, user.role)
    
    return {
        accessToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    }
}

export const login = async (userData) => {
    const { email, password } = userData

    const user = await UserRepository.findByEmail(email)
    if(!user) throw new AppError(STATUS_MESSAGE.USER_NOT_FOUND, HTTP_STATUS.NOT_FOUND)
    
    console.log('user: ', user)

    const comparePassword = await bcrypt.compare(password, user.password)
    console.log('=================== compare password', comparePassword)
    if(!comparePassword) throw new AppError(STATUS_MESSAGE.INVALID_CREDENTIALS, HTTP_STATUS.UNAUTHORIZED)

    console.log('=========== after compare')

    const accessToken = await generateAccessToken(user._id, user.email, user.role)
    
    return {
        accessToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    }
}

// export const getMe = async (userId) => {
//     const user = await UserRepository.getUser(userId)

//     return {
//         name: user.name,
//         email: user.email,
//         role: user.role
//     }
// }

export const getUser = async (userId) => {
    const user = await UserRepository.getUser(userId)

    return {
        name: user.name,
        email: user.email,
        role: user.role
    }
}