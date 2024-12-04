import { userController } from "../controllers/user/index.js";
import { sessionController } from "../controllers/session/index.js";

export const apiRoutes = [
  //ping,
  {
    method: "GET",
    path: "/",
    config: sessionController.pong,
  },
  //user
  {
    method: "GET",
    path: "/api/v1/users",
    config: userController.findAll,
  },
];
