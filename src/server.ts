import express, {json} from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/index.js"
import "express-async-errors"
import { handleApplicationErros } from "./middlewares/handleApplicationErrors.js"

dotenv.config()


const server = express()
server.use(json()) 
server.use(cors())

server.use(routes)
server.use(handleApplicationErros)


const port = process.env.PORT || 5000
server.listen(port, () => console.log(`Server running in port: ${port}`))