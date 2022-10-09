import joi from 'joi';

const signUpSchema = joi.object({
  username: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

const signInSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const filmSchema = joi.object({
  originalId: joi.number().required(),
  title: joi.string().required(),
  overview: joi.string().required(),
  posterUrl: joi.string().required(),
  releaseDate: joi.string().required(),
});

const reviewSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

export { signUpSchema, signInSchema, filmSchema, reviewSchema };
