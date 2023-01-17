import { DataTypes } from "sequelize";
import dataBase from "../database/conexionDatabase.js";

const Cliente = dataBase.define('clientes',{
    tipoidentificacion:{
        type: DataTypes.STRING
    },
    numidentificacion:{
        type:DataTypes.STRING
    },
    nombres:{
        type:DataTypes.STRING
    },
    apellidos:{
        type:DataTypes.STRING
    },
    fnacimiento:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    ciudad:{
        type:DataTypes.STRING
    },
    departamento:{
        type:DataTypes.STRING
    },
    pais:{
        type:DataTypes.STRING
    },
    marca:{
        type:DataTypes.STRING
    }

    
})

export default Cliente