module.exports = {
  friendlyName: "Create",

  description: "Create post.",

  inputs: {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "New post was created successfully.",
    },
    error: {
      description: "Something went wrong.",
    },
  },

  fn: async function (inputs, exits) {
    try {
      const token = this.req.session.authToken;
      const createdBy = await sails.helpers.getUserFromToken(token);
      const { title, content } = inputs;
      const newPost = await Post.create({
        title,
        content,
        author: createdBy,
      }).fetch();
      return exits.success({
        message: "New post was created successfully.",
        data: newPost,
      });
    } catch (error) {
      return exits.error({
        message: "Something went wrong.",
        error: error.message,
      });
    }
  },
};
