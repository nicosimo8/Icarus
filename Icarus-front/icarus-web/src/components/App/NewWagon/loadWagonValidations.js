import Joi from 'joi';

export const schema = Joi.object({
  wagonNumValue: Joi.string()
    .min(1)
    .max(50)
    .messages({
      'number.min': 'Must contain at least 1 character',
      'number.max': 'Max 50 characters'
    })
    .required(),
  tareValue: Joi.number()
    .min(0.00)
    .max(9999999999.00)
    .messages({
    'number.min': 'Must be 0.0 or greater',
    'number.max': 'Max weight 9999999999.00'})
    .required(),
  rawValue: Joi.number()
  .min(0.00)
  .max(9999999999.00)
  .messages({
  'number.min': 'Must be 0.0 or greater',
  'number.max': 'Max weight 9999999999.00'})
  .required()
});
