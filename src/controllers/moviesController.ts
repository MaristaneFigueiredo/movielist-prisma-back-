import {Request, Response, NextFunction} from "express"
import { MovieEntity } from "../protocols/movies.js"
import moviesService from "../services/moviesService.js"
import httpStatus from "http-status"

async function createMovies(req: Request, res: Response, next:NextFunction) {   
 
    const {name, plataformId, genreId} = req.body as MovieEntity      
    
    try {
        await moviesService.movieExistPlataform({ name, plataformId})

        await moviesService.createMovies ({name, plataformId, genreId})
        
        return res.sendStatus(httpStatus.CREATED)        
        
    } catch (error) {        
        next(error)
    }
    
}

async function getMovies(req: Request, res: Response, next:NextFunction) {
    try {           
        /* const {rows : movies} = await moviesService.getMovies() */
        const movies = await moviesService.getMovies()
        res.send(movies);

      } catch (error) {
        next(error);
      }
    
}
async function countMoviesBypPlatform(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    /* const {rows : movies}  = await moviesService.countMoviesBypPlatform(); */
    const movies = await moviesService.countMoviesBypPlatform()
    res.send(movies);
  } catch (error) {
    next(error);
  }
}

async function deleteMovie(req: Request, res: Response, next: NextFunction) {
  
  const id = Number(req.params.id)
 
  
  try {
    await moviesService.movieExistById(id)
    
    await moviesService.deleteMovie(id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

async function updateWatchedMovie(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const id = Number(req.params.id)
  
  const whatchedMovie = req.body.whatched as boolean        
       

  try {    

    await moviesService.movieExistById(id)    

    await moviesService.updateWatchedMovie(whatchedMovie, id);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}


export default {
  createMovies,
  getMovies,
  countMoviesBypPlatform,
  updateWatchedMovie,
  deleteMovie  
};
