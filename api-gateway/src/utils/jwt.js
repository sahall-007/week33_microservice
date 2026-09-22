import jwt from 'jsonwebtoken'

export const verifyAccessToken = async (token) => {    
    return jwt.verify(token, process.env.JWT_ACCESS)
}

export const verifyRefreshToken = async (token) => {
    return jwt.verify(token, process.env.JWT_REFRESH)
}