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
      console.log("authTOken", this.req.session.authToken);
      const token = this.req.headers.authorization;
      // const token = authorizationHeader.split(" ")[1];
      console.log("token:", token);
      const createdBy = await sails.helpers.getUserFromToken(token);
      console.log("inputs:", inputs);
      const { title, content } = inputs;
      const newPost = await Post.create({
        title,
        content,
        author: createdBy,
      }).fetch();

      const post = await Post.findOne({ id: newPost.id }).populate("author");

      sails.sockets.blast("newBlogPost", post);
      sails.sockets.broadcast("newBlogPost", newPost);
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
