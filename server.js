const express = require('express');
const path = require('path');
const app = express();

//obteniendo el puerto de la pagina
// const port = process.env.PORT;
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  //el puerto que esta escuchando
  console.log(`Escuchando desde el puerto ${port}`);
});
