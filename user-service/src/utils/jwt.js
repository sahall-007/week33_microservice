import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()

export const generateAccessToken = async (userId, email, role) => {
    return jwt.sign({userId, email, role},
        process.env.JWT_ACCESS,
        {expiresIn: "1h"}
    )
}

export const generateRefreshToken = async (userId) => {
    return jwt.sign({userId}, 
        process.env.JWT_REFRESH, 
        {expiresIn: "7d"}
    )
}