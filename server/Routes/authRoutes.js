import express from 'express'
import {google, signin, signup} from '../Controller/authCtrl.js'
import { signout } from '../Controller/userCtrl.js'
const router =  express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/google',google)
router.get('/signout',signout)
export default router;