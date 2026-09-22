import app from './app.js'
import { config } from 'dotenv'

config()

const main = async () => {
    app.listen(process.env.PORT, () => {
        console.log('Api gateway listening on port: ', process.env.PORT)
    })
}

main()