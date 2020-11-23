const express = require("express");
const path = require("path");
const app = express();
const compression = require('compression')

//obteniendo el puerto de la pagina
// const port = process.env.PORT;
const port = 3000;

app.use(compression());

app.get("/api", (req, res)=>{
  return res.status(200).json({
    ok: true,
    message: {
        message:'Todo cheto'
    }
});
})

app.use(express.static(__dirname + "/public"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(port, () => {
  //el puerto que esta escuchando
  console.log(`Escuchando desde el puerto ${port}`);
});
