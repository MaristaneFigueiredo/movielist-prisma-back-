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

async function countMoviesBypPlatform(): Promise<MovieReturn> {
  const movieExistPlataform = await prisma.movies.groupBy({
    by: ["plataformId"], // Campo pelo qual você deseja agrupar
    _count: true, // Usar a função de agregação _count para contar os registros
    orderBy: {
      plataformId: "asc",
    },
  })
  return movieExistPlataform
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
