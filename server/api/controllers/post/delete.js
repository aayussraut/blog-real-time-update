module.exports = {
  friendlyName: "Delete",

  description: "Delete post.",

  inputs: {},

  exits: {
    success: {
      description: "Post was deleted successfully.",
    },
    notFound: {
      statusCode: 404,
      description: "Post not found.",
    },
    serverError: {
      statusCode: 500,
      description: "Something went wrong.",
    },
  },

  fn: async function (inputs, exits) {
    const postId = this.req.params.id;
    const userId = await sails.helpers.getUserIdFromToken(
      this.req.session.authToken
    );

    try {
      const post = await Post.findOne({ id: postId, author: userId });

      if (!post) {
        return exits.notFound({
          error: "Post not found.",
        });
      }

      await Post.destroyOne({ id: postId, author: userId });

      return exits.sucess({
        message: "Post was deleted successfully.",
        data: deletedPost,
      });
    } catch (error) {
      return exits.serverError({
        message: "Something went wrong.",
        error: error.message,
      });
    }
  },
};
