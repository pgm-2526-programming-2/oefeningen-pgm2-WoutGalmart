const Joi = require("joi");

const locationValidator = Joi.object({
  name: Joi.string().min(1).trim().required().messages({
    "string.empty": "Naam mag niet leeg zijn",
    "any.required": "Naam is verplicht",
  }),

  country: Joi.string().trim().required(),

  city: Joi.string().trim().required(),

  coordinates: Joi.object({
    latitude: Joi.number().min(-90).max(90).required(),

    longitude: Joi.number().min(-180).max(180).required(),
  }).required(),
});

module.exports = {
  locationValidator,
};
