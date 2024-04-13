import express from 'express'
import { createListing } from '../Controller/listingCtrl.js'
import { verifyToken } from '../util/varifyUser.js'

const router = express.Router()

router.post('/create',verifyToken,createListing)

export default router