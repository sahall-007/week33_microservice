import { db } from "./db/index.js";
import { sql } from "drizzle-orm";
import app from "./app.js";
import { config } from 'dotenv'

config()

const main = async () => {
    try{
        // await db.execute(sql`SELECT 1`);
        // console.log("PostgreSQL connected successfully");

        app.listen(process.env.PORT, () => {
            console.log('Order service listening on port: ', process.env.PORT)
        })
    }
    catch(err){
        console.error("Failed to connect to PostgreSQL:", err);
        // await pool.end();

        // process.exit(1);
    }
    
}

main()