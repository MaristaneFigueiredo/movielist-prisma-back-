/* import pg from "pg"

import dotenv from "dotenv"

dotenv.config()

const {Pool} = pg



const connectionDB = new Pool({
    connectionString:process.env.DATABASE_URL
})



export default connectionDB
 */

import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default prisma