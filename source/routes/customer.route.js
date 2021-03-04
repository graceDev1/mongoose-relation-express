import customerController from '../controller/customer.controler';
import express from 'express';

let router = express.Router()

router.post('/', customerController.fSaveCustomer);

router.get('/',customerController.fGetCustomer);





export default router;