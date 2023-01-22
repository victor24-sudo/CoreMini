const { Cliente } = require("../Models/Cliente")
const { Contrato } = require("../Models/Contrato")


const getAllClients=async(req,res)=>{
    await Cliente.findAll({raw:true}).then(clientes=>{
        return res.status(200).json({
            ok:true,
            clientes
        })
    })
}


const getAllContrats = async(req,res) =>{
    await Contrato.findAll({raw:true}).then(contratos=>{
        return res.status(200).json({
            ok:true,
            contratos
        })
    })
}

const getReport=async(req, res)=>{
    const endDate = new Date(req.body.fecha2);
    const beginDate = new Date(req.body.fecha1);
    
    const reporte=[];
    const clientesLista = await Cliente.findAll({raw:true}).then();
    const contratosLista = (await Contrato.findAll({raw:true}).then()).filter(contrato => {
        const fecha = new Date(contrato.fecha);
        return  beginDate.valueOf() <= fecha.valueOf()  &&  endDate.valueOf() >=fecha.valueOf()
    
    });

    clientesLista.forEach(cliente =>{
        let montoTotal =0;

        contratosLista.forEach(contrato =>{
            if(contrato.clienteID === cliente.id){
                montoTotal = montoTotal + contrato.monto;
            }
        })
        reporte.push({nombre:cliente.nombre,montoTotal})

    })

    

    return res.status(200).json({
        ok:true,
        reporte,
        
    })


}

module.exports={
    getAllClients,getAllContrats,getReport
}