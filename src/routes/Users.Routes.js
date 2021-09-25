const Router = require("express").Router;
const Controller = require('../controllers/Users.Controllers');

//Enrutador
const router = Router()

//Rutas
router.get('/',Controller.Get_UsuarioById);
router.post('/:UserId',Controller.Crear_Usuario);
router.put('/:UserId',Controller.Update_UsuarioById);
router.delete('/:UserId',Controller.Update_UsuarioById);

//Exportacion
module.exports = router;