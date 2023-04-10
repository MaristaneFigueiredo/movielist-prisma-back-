import moviesRepository from "../repositories/moviesRepository.js";
import { MovieEntity, MovieResponse } from "../protocols/movies.js";
import genericErros from "../errors/genericErros.js";
import { boolean, number } from "joi";


async function movieExistPlataform({name, plataformId}:MovieResponse)  {    
   
   const {rows : movies} = await moviesRepository.movieExistPlataform ({name, plataformId} )      
   
   const [movieExistPlataform] = movies
 

   if(movieExistPlataform) {        
         throw genericErros.conflitctError("Movie already exists for this plataform")            
   }        
}

async function movieExistById(id:number) {
 
  const {rows : movies} = await moviesRepository.movieExistById(id)    
   
  const [movieExist] = movies
  if(!movieExist) {        
        throw genericErros.notFoundError()            
  }  

}


async function createMovies({ name, plataformId, genreId }: MovieEntity) : Promise<void> {
    await moviesRepository.createMovies({ name, plataformId, genreId });   
}

async function getMovies()  {
    const movies = await moviesRepository.getMovies();
    
    return movies
}

async function countMoviesBypPlatform() {
  
  const movies = await moviesRepository.countMoviesBypPlatform();
    
  return movies
}

async function deleteMovie(id:number) {

  await moviesRepository.deleteMovie(id);

}
async function updateWatchedMovie(whatchedMovie:boolean, id:number) {  
  
  await moviesRepository.updateWatchedMovie(whatchedMovie, id);  

}

export default {
  createMovies,
  getMovies,
  countMoviesBypPlatform,
  updateWatchedMovie,
  deleteMovie, 
  movieExistPlataform,
  movieExistById
}
