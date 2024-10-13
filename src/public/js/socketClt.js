//referencias de html
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const btn = document.querySelector("#btnEnviar");
const textMensaje = document.querySelector("#textMensaje");

const socket = io();

socket.on("connect", () => {
  console.log("conectado");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("desconectado");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on('message', (payload)=>{
    console.log(payload);
    
})

btn.addEventListener("click", (event) => {
  
    const mensaje = textMensaje.value;

    const payload = {
      mensaje,
      id: "dasd", // Aquí deberías asignar un ID real si es necesario
      fecha: new Date().getTime(),
    };

    socket.emit("message", payload, (id)=>{
        console.log('id: ', id);
        
    });

});


