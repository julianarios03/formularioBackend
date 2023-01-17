import { Sequelize } from "sequelize";

const dataBase= new Sequelize('formulariobackend', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
export default dataBase