import { config } from 'dotenv'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import {  fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getUser } from '../services/user.service.js'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const protoPath = join(__dirname, '../../../proto/user.proto')
const packageDefinition = protoLoader.loadSync(protoPath)
const proto = grpc.loadPackageDefinition(packageDefinition).user

async function getMe (call, callback) {
    const user = await getUser(call.request.userId)
    if(!user){
        callback({code: grpc.status.NOT_FOUND, message: 'User not found'});
        return
    }

    callback(null, user)
}

function main() {
    const server = new grpc.Server()
    server.addService(proto.UserService.service, { GetMe: getMe })
    server.bindAsync(`0.0.0.0:${process.env.GRPC_PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) console.log(`User service gRPC error: ${err}`)
        else console.log(`User service gRPC running on port: ${port} ...`)
    })
}

export default main