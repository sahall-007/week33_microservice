import { config } from 'dotenv'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const protoPath = join(__dirname, '../../../proto/user.proto')
const packageDefinition = protoLoader.loadSync(protoPath)
const proto = grpc.loadPackageDefinition(packageDefinition).user

const client = new proto.UserService(process.env.USER_GRPC_URL, grpc.credentials.createInsecure())

export const getMe = (userId) => {
    return new Promise((resolve, reject) => {
        client.GetMe({ userId }, (err, response) => {
            if(err) {
                console.log('gRPC client error: ', err.message)
                reject(err)
            }
            else {
                resolve(response)
                console.log('gRPC servier response: ', JSON.stringify(response, null, 2))
            }
        })      
    })
}