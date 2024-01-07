const joi = require('joi');

const compoundJoi = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  description: joi.string().required(),

});

const compoundUpdateJoi = joi.object({
  name: joi.string().required(),
  image: joi.string().required(),
  description: joi.string().required(),
});

module.exports = {
  compoundJoi,
  compoundUpdateJoi
};