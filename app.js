import express from 'express';
import ProductRoutes from './src/routes/product.router.js'
import CartRoutes from './src/routes/cart.router.js'
const __dirname = import.meta.dirname;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//CONFIGURO LA RUTA PUBLICA, PARA ARCHIVOS PUBLICO (CSS,JS,IMG)
app.use(express.static(__dirname + '/src/public'));
app.use(ProductRoutes)
app.use(CartRoutes)

app.listen(8080, () => console.log('Servidor listo en el puerto 8080'));

