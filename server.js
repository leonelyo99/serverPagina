const express = require("express");
const path = require("path");
const app = express();
const compresión = require("compresión");

//obteniendo el puerto de la pagina
const port = process.env.PORT;
// const port = 3000;

app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

app.use(express.static(__dirname + "/public"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  //el puerto que esta escuchando
  console.log(`Escuchando desde el puerto ${port}`);
});
