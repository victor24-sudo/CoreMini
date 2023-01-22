const {sequelize,Sequelize} = require('../config/db')

const Cliente = sequelize.define('clientes', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: Sequelize.STRING,
},{
    tableName: 'Cliente',
    timestamps: false,
})



module.exports = {Cliente}