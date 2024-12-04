export const userController = {
  findAll: {
    handler: async (request, h) => {
      try {
        return h
          .response({
            error: false,
            message: "User listed with success",
          })
          .code(200);
      } catch (e) {
        return h
          .response({
            error: false,
            message: "Success",
          })
          .code(500);
      }
    },
    auth: false,
  },
};
