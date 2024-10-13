import env from "dotenv";
env.config();

import Server from "./src/server/server.js";

const server = new Server();

server.listen();
