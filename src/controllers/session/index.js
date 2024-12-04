export const sessionController = {
  pong: {
    handler: async (request, h) => {
      return h
        .response({
          error: false,
          message: "Sucess",
          data: "pong",
        })
        .code(200);
    },
  },
};
