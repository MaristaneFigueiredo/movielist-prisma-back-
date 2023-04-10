import joi from "joi";

export const movieSchema = joi.object({
  name: joi.string().required().min(3),
  plataformId: joi.number().required(),
  genreId: joi.number().required(),
});
