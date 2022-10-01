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

export { signUpSchema, signInSchema };
