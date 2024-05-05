import express from 'express'
import { Update_Listing, createListing, deleteListing } from '../Controller/listingCtrl.js'
import { verifyToken } from '../util/varifyUser.js'

const router = express.Router()

router.post('/create',verifyToken,createListing)
router.delete('/delete/:id',verifyToken,deleteListing)
router.post('/update/:id',verifyToken,Update_Listing)

export default router