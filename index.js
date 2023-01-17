import dataBase from './database/conexionDatabase.js';
import clienteRouter from './routes/RouteCliente.js';
import express from 'express';
import cors from 'cors';


const app = express();
const port = 3100;

try {
  await dataBase.authenticate();
  console.log("Se conectó a la base de datos correctamente");
  console.log("Servidor corriendo en el puerto " + port);
  console.log(`http://localhost:${port}`);
  
} catch (error) {
  console.log("Conexión no exitosa "+error);
  
}

app.use(cors())
app.use(express.json())
//app.use(routerCliente)
app.use('/clientes',clienteRouter )
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:3100`)
  });
