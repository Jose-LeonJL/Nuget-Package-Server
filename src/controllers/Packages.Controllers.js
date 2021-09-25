
const Crear_Packages = (req, res) => {
    let Response = {
        code:200,
        Estado:"Ok",
        Mensaje:"Package Creado"
    }
    res.json(Response)
};

const Get_PackagesById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Devolviendo Package"
    }
    res.json(Response)
};


const Get_Packages = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Devolviendo Package all"
    }
    res.json(Response)
};

const Update_PackageById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Actualizando Package"
    }
    res.json(Response)
};

const Delete_PackageById = (req, res) => {
    let Response = {
        code:res.statusCode,
        Estado:"Ok",
        Mensaje:"Borrando Package"
    }
    res.json(Response)
};

module.exports = {Get_Packages,Get_PackagesById,Crear_Packages,Update_PackageById,Delete_PackageById};