import Cliente from '../models/Modelcliente.js';

const crearCliente = async (req, res) => {
  try {
   await Cliente.create(req.body);
   res.json({
   message: "cliente inscripto correctamente"
  });
  }catch (error) { 
    res.json({message: error.message});
  }
};
const editarCliente = async (req, res) => {
    try {
     await Cliente.update(req.body);
     res.json({
     message: "cliente editado correctamente"
    });
    }catch (error) { 
      res.json({message: error.message});
    }
  };
  const mostrarCliente = async (req, res) => {
    try {
     const Cliente =await Cliente.finOne({ where:{ id:req.params.id}});
     res.json(Cliente);
     
    }catch (error) { 
      res.json({
        message: error.message
    });
    }
  };
  const eliminarCliente = async (req, res) => {
    await Cliente.destroy({ where:{id: req.params.id}});
    res.json({
        message: "registro eliminado correctamente",
    });
    res.json({message: error.message});

};

export {
    crearCliente,
    mostrarCliente,
    eliminarCliente,
    editarCliente

};
  
  
  


