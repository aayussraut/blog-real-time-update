module.exports = {
  friendlyName: "Update",

  description: "Update post.",

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

  exits: {},

  fn: async function (inputs) {
    try {
      const userId = await sails.helpers.getUserFromToken(
        this.req.session.authToken
      );
      const postId = this.req.params.id;
      const post = await Post.findOne({ id: postId, author: userId });
      if (!post) {
        return exits.notFound({
          error: "Post not found",
        });
      }
      const updatedPost = await Post.updateOne({
        id: postId,
        author: userId,
      }).set({
        title: inputs.title,
        content: inputs.content,
      });
      return exits.success({
        message: "Post updated successfully",
        data: updatedPost,
      });
    } catch (err) {
      sails.log.error(err);
      return exits.error({
        error: err.message,
      });
    }
  },
};
