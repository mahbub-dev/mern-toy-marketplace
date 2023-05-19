/* eslint-disable react/prop-types */

const ToyDetailsPage = ({ toy }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl text-center font-semibold mb-6">Toy Details</h1>

      <div className="flex flex-col items-center">
        <img src={toy.picture} alt="Toy" className="w-64 h-64 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{toy.name}</h2>
        <p className="text-gray-500 mb-4">
          Seller: {toy.sellerName} ({toy.sellerEmail})
        </p>
        <p className="text-lg mb-2">Price: ${toy.price.toFixed(2)}</p>
        <p className="text-lg mb-4">Rating: {toy.rating}/5</p>
        <p className="text-lg mb-4">Available Quantity: {toy.quantity}</p>
        <p className="text-gray-700">{toy.description}</p>
      </div>
    </div>
  );
};

export default ToyDetailsPage;
