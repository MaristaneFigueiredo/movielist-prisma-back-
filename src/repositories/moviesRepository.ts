import { QueryResult } from "pg";
/* import connectionDb from "../config/database.js"; */
import prisma from "../config/database.js";
import { MovieEntity, MovieResponse, MovieReturn} from "../protocols/movies.js";


async function createMovies({ name, plataformId, genreId}: MovieEntity) : Promise<void>  {
  
  const newMovie = await prisma.movies.create({
    data: {
      name: name,
      plataformId: plataformId,
      genreId: genreId
    }
  })   
  
}

//: Promise<QueryResult<MovieResponse>> 
async function movieExistPlataform({name, plataformId}:MovieResponse) {
    
    /* const query = `
        SELECT * FROM movies WHERE name = $1 AND "plataformId" = $2       
    `;   

    return await connectionDb.query(query, [name, plataformId]); */
    const moviePlataform = await prisma.movies.findFirst({
      where: {
        name: name,
        plataformId: plataformId
      }
    })
    console.log('moviePlataform', moviePlataform)

    return movieExistPlataform
}

//: Promise<QueryResult<MovieResponse>>
async function movieExistById(id:number)  {
/*   const query = `
       SELECT * FROM movies WHERE id = $1      
   `

    return await connectionDb.query(query, [id]); */
}

async function getMovies(): Promise<MovieReturn>   { 

    const movies = await prisma.movies.findMany({    
     
       select: {
        id: true,   
        name: true, // movie
        whatched: true,
        plataforms: {
          select: {
              name:true, // plataform
          }
        }, 
        genres:{
          select:{
            name:true //genre
          }
        }
      }   

 
     /* include: {        
        plataforms: true, // inclui as plataformas na consulta
        genres: true
      } */
    })

    return movies


}

//: Promise<QueryResult<MovieResponse>>
async function countMoviesBypPlatform() {
/*   const query = `        
      SELECT p.name as Plataform , COUNT(m."plataformId") as Qtde 
      FROM movies m 
          INNER JOIN plataforms p ON m."plataformId" = p.id
      GROUP BY m."plataformId", p.name
  `; 
  return await connectionDb.query(query) */

}


async function deleteMovie(id:number) : Promise<void> {
 /*  const query = `
        DELETE from movies WHERE id = $1
    `;

  await connectionDb.query(query, [id]); */

}

async function updateWatchedMovie(whatchedMovie:boolean, id:number): Promise<void>  { 
  
  /* const query = `
        UPDATE movies SET whatched = $1 WHERE id = $2      
    `;
    
    await connectionDb.query(query, [whatchedMovie, id]);  */

}



export default {
  createMovies,
  getMovies,
  countMoviesBypPlatform,
  updateWatchedMovie,
  deleteMovie,
  movieExistPlataform,
  movieExistById
};
