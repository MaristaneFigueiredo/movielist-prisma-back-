export type messageError = {
  name: string
  message: string
  email?: string
}

export type MovieEntity = {
  id?: number
  name: string
  whatched?: boolean
  plataformId: number
  genreId: number
}

export type MovieResponse = {
  id?: number
  name?: string
  createdAt?: Date
  updateAt?: Date
  plataformId?: number
  plataformName?: string
  genreId?: number
  genreName?: string
  whatched?: boolean
}

export type MovieReturn = {
  id?: number
  name?: string
  whatched?: boolean
  plataformId?: number
  plataformName?: string
  genreId?: number
  genreName?: string
}[]
