import prisma from "../config/database.js"
import { MovieEntity, MovieResponse, MovieReturn } from "../protocols/movies.js"

async function createMovies({
  name,
  plataformId,
  genreId,
}: MovieEntity): Promise<void> {
  const newMovie = await prisma.movies.create({
    data: {
      name: name,
      plataformId: plataformId,
      genreId: genreId,
    },
  })
}

async function movieExistPlataform({
  name,
  plataformId,
}: MovieResponse): Promise<MovieResponse> {
  return await prisma.movies.findFirst({
    where: {
      name: name,
      plataformId: plataformId,
    },
  })
}

async function movieExistById(id: number): Promise<MovieResponse> {
  return await prisma.movies.findFirst({
    where: {
      id,
    },
  })
}

async function getMovies(): Promise<MovieReturn> {
  const movies = await prisma.movies.findMany({
    select: {
      id: true,
      name: true, // movie
      whatched: true,
      plataforms: {
        select: {
          name: true, // plataform
        },
      },
      genres: {
        select: {
          name: true, //genre
        },
      },
    },
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

async function deleteMovie(id: number): Promise<void> {
  await prisma.movies.delete({
    where: {
      id,
    },
  })
}

async function updateWatchedMovie(
  whatchedMovie: boolean,
  id: number
): Promise<void> {
  await prisma.movies.update({
    where: {
      id,
    },
    data: {
      whatched: whatchedMovie,
      updateAt: new Date(),
    },
  })
}

export default {
  createMovies,
  getMovies,
  countMoviesBypPlatform,
  updateWatchedMovie,
  deleteMovie,
  movieExistPlataform,
  movieExistById,
}
