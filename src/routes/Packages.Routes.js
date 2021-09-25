const Router = require("express").Router;
const Controller = require('../controllers/Packages.Controllers');

//Enrutador
const router = Router()

//Rutas
router.get('/',Controller.Get_Packages);
router.get('/:PackageId',Controller.Get_PackagesById);
router.post('/',Controller.Crear_Packages);
router.put('/:PackageId',Controller.Update_PackageById);
router.delete('/:PackageId',Controller.Delete_PackageById);

//Exportacion
module.exports = router;