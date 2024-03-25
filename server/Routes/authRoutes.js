import express from 'express'
import {signup} from '../Controller/authCtrl.js'
const router =  express.Router()

router.post('/signup',signup)

export default router;