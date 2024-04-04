import express from 'express'
import { updateUser } from '../Controller/userCtrl.js';
import { verifyToken } from '../util/varifyUser.js';

const router = express.Router();

router.post('/update/:id',verifyToken,updateUser)


export default router