import {Router} from "express"
import moviesRouter from "./moviesRouter.js"

const routes = Router()

routes.use("/movies", moviesRouter)

export default routes

