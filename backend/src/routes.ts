import { Router} from 'express';
import userController from './controller/userController';

const routes = Router();

routes.get('/',(req,res) =>{
    res.send('ruta trabajando');
});

routes.get('/controller',userController.index)
routes.get('/email',userController.create)

export default routes;
