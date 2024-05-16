const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User is Conected");

  socket.on("submitNote", (param) => {
    socket.emit("funcSubmitCalled");
    //emitimos el evento
  });

  socket.emit("initialData", {});
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/home/index.html`);
}); //conexion para profesor

/*app.get("/alumno", (req, res) => {
  res.sendFile(`${__dirname}/alumno/index.html`);
  console.log(`${__dirname}`);
}); //conexion para alumno */

server.listen(3010, () => {
  console.log("servidor corriendo en el puerto http://localhost:3010");
}); //iniciamos el servidor
