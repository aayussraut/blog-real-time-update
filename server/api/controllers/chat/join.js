module.exports = {
  friendlyName: "Join",

  description: "Join chat.",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    try {
      const id = this.req.params.id;
      console.log(id);
      sails.sockets.join(this.req, id, (err) => {
        console.log("joined room");
        if (err) {
          return exits.error(err);
        }
        return exits.success({
          message: "Subscribed to a fun room called ChitChat!",
        });
      });
    } catch (err) {
      return exits.success({
        message: err.message,
      });
    }
  },
};
