import Joi from 'joi';

export const schema = Joi.object({
  seal1: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal2: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal3: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal4: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal5: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal6: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal7: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal8: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal9: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal10: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal11: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
  seal12: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    }).allow(''),
});
