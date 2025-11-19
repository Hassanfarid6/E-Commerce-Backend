const Joi = require("joi");

const cardValidation = Joi.object({
  title: Joi.string().trim().min(3).max(100).required(),

  description: Joi.string().allow("").max(500),

  price: Joi.number().min(1).required(),

  sku: Joi.string().alphanum().min(3).max(20).required(),

  quantity: Joi.number().integer().min(1).default(1),

  image: Joi.string().uri().allow("").required(),
});

module.exports = { cardValidation };
