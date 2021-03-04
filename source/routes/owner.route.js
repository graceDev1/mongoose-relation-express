import ownerController from '../controller/owner.controller';
import express from 'express';

const router = express.Router()

router.get('/',ownerController.fListOwner);

//

router.post('/', ownerController.fSaveOwner);


export default router;