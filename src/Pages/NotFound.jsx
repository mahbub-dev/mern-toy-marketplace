const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-8">Page Not Found</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
