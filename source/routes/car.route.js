import carController from '../controller/car.controller';
import express from 'express';

const router = express.Router();

router.get('/',carController.fListCard);

router.post('/',carController.fSaveCar);

export default router