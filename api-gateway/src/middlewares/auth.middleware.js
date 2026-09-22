import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'
import { verifyAccessToken } from '../utils/jwt.js'

const auth = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ succuss: false, message: 'Access token required'})
        }
        
        const token = authHeader.split(" ")[1]
        // const token = req.cookies.accessToken
        if(!token){
            res.status(HTTP_STATUS.INVALID_TOKEN).json({
                success: false,
                message: STATUS_MESSAGE.TOKEN_REQUIRED
            })
        }

        const verify = await verifyAccessToken(token)
        console.log('Auth middleware -- verify access token -- userData', verify)
        req.user = verify

        next()
    }
    catch(err){
        console.log(err)
        console.log('Authentication error')
        res.status(HTTP_STATUS.TOKEN_REQUIRED).json({
            success: false,
            message: STATUS_MESSAGE.TOKEN_REQUIRED
        })
    }
}

export default auth