import app from './app.js'
import mongodb from './configs/monogdb.js'
import { config } from 'dotenv'
import gRPC from './gRPC/user.gRPC.server.js'

config()

const main = async () => {
    await mongodb()
    await gRPC()
    app.listen(process.env.PORT, () => {
        console.log('User service listening on port: ', process.env.PORT)
    })
}

main()