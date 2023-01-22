const {sequelize,Sequelize} = require('../config/db')
const { Cliente } = require('./Cliente')

const Contrato = sequelize.define('contratos', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: Sequelize.STRING,
    monto:{
        type:Sequelize.FLOAT,
        defaultValue:0
    },
    fecha: Sequelize.DATE,
    clienteID:{
        type: Sequelize.INTEGER,
        references: {
            model: Cliente, // 'Actors' would also work
            key: 'id'
        }
    }
},{
    tableName: 'Contrato',
    timestamps: false,
})



module.exports = {Contrato}