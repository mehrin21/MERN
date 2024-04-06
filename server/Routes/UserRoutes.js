import express from 'express'
import { deleteUser, updateUser } from '../Controller/userCtrl.js';
import { verifyToken } from '../util/varifyUser.js';

const router = express.Router();

router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)


export default router