import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const NotFoundPage = () => {
  useTitle('Not Found')
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      <img src="https://d3jl769oy69y7b.cloudfront.net/2022/08/blizzard.gif" alt="404 Error" className="w-80 h-80 mb-8" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
