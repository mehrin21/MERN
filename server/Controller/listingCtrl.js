import Listing from "../model/ListingModel.js";
import { errorHandler } from "../util/errorHandler.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(404, "You can only delete your own listing!"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json('deleted successfully')
  } catch (error) {
    next(error);
  }
};

export const Update_Listing = async(req,res,next)=>{
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(404, "You can only delete your own listing!"));
  }
  try {
   const updated = await Listing.findByIdAndUpdate(req.params.id,req.body,{new:true})
   await updated.save()
   res.status(200).json(updated)
  } catch (error) {
    next(error)
  }
}