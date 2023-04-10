import { QueryResult } from "pg";
import connectionDb from "../config/database.js";
import { MovieEntity, MovieResponse} from "../protocols/movies.js";


async function createMovies({ name, plataformId, genreId,}: MovieEntity) : Promise<void>{
  const query = `
        INSERT INTO movies (name, "plataformId", "genreId" ) 
        VALUES ($1, $2, $3)
    `;

  await connectionDb.query(query, [name, plataformId, genreId]);
  
}


async function movieExistPlataform({name, plataformId}:MovieResponse) : Promise<QueryResult<MovieResponse>> {
    
    const query = `
        SELECT * FROM movies WHERE name = $1 AND "plataformId" = $2       
    `;   

    return await connectionDb.query(query, [name, plataformId]);
}

async function movieExistById(id:number) : Promise<QueryResult<MovieResponse>> {
  const query = `
       SELECT * FROM movies WHERE id = $1      
   `

    return await connectionDb.query(query, [id]);
}

async function getMovies(): Promise<QueryResult<MovieResponse>>   { 

    const query = `        
        SELECT m.id, m.name as movie, m.whatched, p.name as plataform, g.name as genre
        FROM movies m 
        INNER JOIN plataforms p ON m."plataformId" = p.id
        INNER JOIN genres g ON m."genreId" = g.id
    `; 
    return await connectionDb.query(query)
}

async function countMoviesBypPlatform(): Promise<QueryResult<MovieResponse>> {
  const query = `        
      SELECT p.name as Plataform , COUNT(m."plataformId") as Qtde 
      FROM movies m 
          INNER JOIN plataforms p ON m."plataformId" = p.id
      GROUP BY m."plataformId", p.name
  `; 
  return await connectionDb.query(query)

}


async function deleteMovie(id:number) : Promise<void> {
  const query = `
        DELETE from movies WHERE id = $1
    `;

  await connectionDb.query(query, [id]);

}

async function updateWatchedMovie(whatchedMovie:boolean, id:number): Promise<void>  { 
  
  const query = `
        UPDATE movies SET whatched = $1 WHERE id = $2      
    `;
    
    await connectionDb.query(query, [whatchedMovie, id]); 

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
