import Joi from 'joi';

export const schema = Joi.object({
  serialKey: Joi.string().allow(''),
  userName: Joi.string()
    .min(4)
    .max(12)
    .messages({
      'number.min': 'Must contain at least 4 character',
      'number.max': 'Max 12 characters'
    })
    .required(),
  pass: Joi.string()
    .min(6)
    .max(12)
    .messages({
      'number.min': 'Must contain at least 4 character',
      'number.max': 'Max 12 characters'
    })
    .required(),
  newPass: Joi.string()
    .valid(Joi.ref('pass')),
  fName: Joi.string()
    .min(4)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 4 character',
      'number.max': 'Max 50 characters'
    })
    .required(),
  lName: Joi.string()
    .min(4)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 4 character',
      'number.max': 'Max 50 characters'
    })
    .required(),
  accountType: Joi.string()
    .required()
});
