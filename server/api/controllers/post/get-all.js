module.exports = {
  friendlyName: "Get all",

  description: "",

  inputs: {},

  exits: {
    success: {
      description: "New post was created successfully.",
    },
    error: {
      description: "Something went wrong.",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const posts = await Post.find().populate("author");

      return exits.success({
        message: "New post was created successfully.",
        data: posts,
      });
    } catch (error) {
      return exits.error({
        message: "Something went wrong.",
        error: error.message,
      });
    }
  },
};
