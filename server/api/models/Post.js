/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "posts",
  publishCreate: true,
  attributes: {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    author: {
      model: "user",
    },
  },
};
