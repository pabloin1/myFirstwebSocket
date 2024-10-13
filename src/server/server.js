import express from "express";
import cors from "cors";
import http from "http";
import { Server as socketServer } from "socket.io";
import socketController from "../socket/socket.controller.js";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.server = http.createServer(this.app);
    this.io = new socketServer(this.server);

    this.paths = {};

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();

    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Directorio Público
    this.app.use(express.static("src/public"));
  }

  routes() {}

  // Método para manejar eventos de socket.io
  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
