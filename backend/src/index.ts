import express from 'express';
import routes from './routes';


const app = express();

app.use(routes)

app.listen(3333,() => {
    console.log('corriendo en la puerta 3333');
})
