import express from 'express'
import { crearCliente, editarCliente, mostrarCliente,eliminarCliente } from "../controllers/ControllerClientes.js";

const clienteRouter = express.Router();


clienteRouter.get('/',crearCliente)
clienteRouter.get('/',editarCliente)
clienteRouter.get('/:id',mostrarCliente)
clienteRouter.get('/',eliminarCliente)

export default clienteRouter