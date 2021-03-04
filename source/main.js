import express from 'express';
import productRoute from './routes/customer.route';
import customerRoute from './routes/product.route';
import carRoute from './routes/car.route';
import ownerRoute from './routes/owner.route';

const app = express();
app.use(express.json())

//endpoint
// customer
app.use('/customer',productRoute);

// product
app.use('/product', customerRoute);

// 
app.use('/cars', carRoute);

app.use('/owners', ownerRoute)

const port = process.env.PORT || 5000;


app.listen(port, ()=> console.log(`server runs on port ${port}...`));