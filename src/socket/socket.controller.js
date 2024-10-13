const socketController = (socket) => {
    console.log("Nuevo cliente conectado", socket.id);
    // Aquí puedes manejar eventos del socket
  
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  
    socket.on("message", (payload, callback) => {
      
  
      const id = 1234456;
      callback(id);
      socket.broadcast.emit("message", payload);
    });
  };

  
  export default socketController;
  