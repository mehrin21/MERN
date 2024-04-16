import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 text-blue-950 ">
        Create a List
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg focus:outline-slate-500"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg  focus:outline-slate-500"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg  focus:outline-slate-500"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="Offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <h4 className="font-semibold text-gray-500">Available</h4>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedroom"
                min="1"
                max="10"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <p>Bedrooms</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathroom"
                min="1"
                max="10"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <p>Bathrooms</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularprice"
                min="1"
                max="10"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center text-">
                <p>Regular Price</p>
                <span className="text-xs">($/month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountprice"
                min="1"
                max="10"
                className="p-2 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discount Price</p>
                <span className="text-xs">($/month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              {" "}
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3  text-green-700 border border-green-700 rounded uppercase hover:bg-green-700 hover:text-white disable:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3  border border-slate-700 rounded uppercase bg-slate-700 text-white hover:bg-white hover:text-slate-700 disable:opacity-80">Create List</button>
        </div>
       
      </form>
    </main>
  );
};

export default CreateListing;
