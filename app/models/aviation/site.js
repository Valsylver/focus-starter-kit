/** 
 * @module app/models/aviation/site
 * @description This model is use in : __TO_FILL__
 */

// Dependencies.
var URL = require('../URL'); //TODO : Ne garder que si nécéssaire

/**
 * [__TO_FILL__] Define a model for site 
 * @type {Model} - see lib/models/model.coffee in fmk.
 * @property {string} modelName - It corresponds to the metadatas of the model _module.entityName_.
 * @property {string} urlRoot - The api url which corresponds to the model.
 */
module.exports = Fmk.Models.Model.extend({
    modelName: "aviation.site", // TODO: Verify that the modelName is correct.
    urlRoot: URL.aviation.site // TODO: Define the Url and corresponding controller.
});