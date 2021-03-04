import productController from '../controller/product.controller';
import express from 'express';

const router = express.Router();

router.get('/', productController.fGetAllProduct);

router.post('/',productController.fSaveProduct);

export default router;
