/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";
const ToyDetailsPage = () => {
  const toy = useLoaderData()
  return (
    <div className="container min-h-[720px] mx-auto px-4 bg-gray-700">
      <h1 className="text-3xl text-center text-white pt-3 font-semibold mb-6">Toy Details</h1>
      <div className="mx-auto flex flex-col md:flex-row rounded overflow-hidden shadow-lg bg-[#301008]  p-5">
        <img src={toy.picture} alt={toy.toyName} className="max-w-[400px]" />
        <div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-50 mb-2">{toy.toyName}</div>
          <p className="text-gray-100 text-base">{toy.detailDescription}</p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-400 font-semibold">${toy.price}</p>
          <p className="text-gray-400">{toy.sellerName}</p>
          <p className="text-gray-400">{toy.sellerEmail}</p>
          <p className="text-gray-400">Rating: {toy.rating}</p>
          <p className="text-gray-400">Available Quantity: {toy.availableQuantity}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsPage;

