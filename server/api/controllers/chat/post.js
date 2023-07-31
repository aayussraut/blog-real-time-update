module.exports = {
  friendlyName: "Post",

  description: "Post chat.",

  inputs: {
    roomid: {
      type: "number",
      required: true,
    },
    msg: {
      type: "string",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    try {
      const { roomid, msg } = inputs;
      sails.sockets.broadcast(roomid, { msg });

      return exits.success({
        message: `Posted message to room ${roomid}`,
      });
    } catch (err) {
      return exits.success({
        message: err.message,
      });
    }
  },
};
