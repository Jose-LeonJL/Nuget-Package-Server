
const Crear_Usuario = (req, res) => {
    let Response = {
        code:200,
        Estado:"Ok",
        Mensaje:"Usuario Creado"
    }
    res.json(Response)
};

const Get_UsuarioById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Devolviendo Usuarios"
    }
    res.json(Response)
};

const Update_UsuarioById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Actualizando Usuarios"
    }
    res.json(Response)
};

const Delete_UsuarioById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Borrando Usuarios"
    }
    res.json(Response)
};

module.exports={Crear_Usuario,Get_UsuarioById,Update_UsuarioById,Delete_UsuarioById}