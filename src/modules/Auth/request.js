const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createUserSchema = Joi.object().keys({
  name:Joi.number().required().messages({
    'any.required':'Name required'
  }),
  email: Joi.string().required().messages({
    'any.required': 'Email is required',
  }),
  role: Joi.string().required().messages({
    'any.required': 'Role is required',
  }),
  firebaseUid: Joi.string().required().messages({
    'any.required': 'firebaseUid is required',
  }),
});


const createUserValidate = (data) => {
  const result = createUserSchema.validate(data, { abortEarly: false });
  result.value = data;
  return result;
};

module.exports = {
  createUserValidate,
};
