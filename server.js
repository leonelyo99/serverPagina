const express = require('./node_modules/express'); //requiero express
const app = express(); //instancio express

//obteniendo el puerto de la pagina 
const port = process.env.PORT;
// const port = 3000;

//midelware donde se mostrara esto, creando un dominio publicpo
app.use(express.static( __dirname + '/public' )); 
 
app.listen(port, ()=>{ //el puerto que esta escuchando
    console.log(`Escuchando desde el puerto ${port}`);
});