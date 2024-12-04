import Hapi from "@hapi/hapi";
import Boom from "@hapi/boom";
import * as hapiCookie from "@hapi/cookie";
import { apiRoutes } from "./routes/index.js";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    routes: {
      cors: {
        origin: ["*"],
        headers: ["Accept", "Content-Type"],
        additionalHeaders: ["Acess-Control-Allow-Origin"],
        credentials: true,
      },
    },
  });

  await server.register([hapiCookie]);

  server.auth.strategy("session", "cookie", {
    cookie: {
      name: "portal_noticias",
      password: "alksdflaksjdflakjsdflkaj",
      isSecure: false,
      isHttpOnly: true,
      path: "/",
      isSameSite: "None",
    },
    redirectTo: false,
  });

  server.auth.scheme("session", () => {
    return {
      authenticate: async (request, h) => {
        const session = request.state["portal_noticias"];

        if (!session || !session.isValid) {
          throw Boom.unauthorized("Invalid session");
        }

        return h.authenticated({ credentials: session });
      },
    };
  });

  server.auth.default("session");
  // routes
  server.route(apiRoutes);

  await server.start();
  console.log("Server running...", server.info.uri);
};

init();
