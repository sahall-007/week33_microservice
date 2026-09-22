import { HTTP_STATUS } from '../constants/status.code.js'
import { STATUS_MESSAGE } from '../constants/status.message.js'

const authorize = (role) => {
    return (req, res, next) => {
        if(!req.user){
            res.status(HTTP_STATUS.UNAUTHORIZED).json({
                success: false,
                message: STATUS_MESSAGE.UNAUTHORIZED
            })
        }

        if(role != req.user.role){
            res.status(HTTP_STATUS.FORBIDDEN).json({
                success: false,
                message: STATUS_MESSAGE.FORBIDDEN
            })
        }

        next()
    }
}

export default authorize