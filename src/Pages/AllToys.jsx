import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
const AllToys = () => {
    useTitle('All Toys')
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    const data = useLoaderData()
    const [toys, setToys] = useState(data)
    const handleSearch = async () => {
        const res = await fetch(`${import.meta.env.VITE_APP_API_SERVER_URI}/all_toys/?toy_name=${searchTerm}`)
        const data = await res.json()
        setToys(data)
    };


    return (
        <div className="container min-h-[600px] mx-auto bg-gray-700 pb-5 px-4">
            <h2 className="text-3xl text-white font-bold text-center mb-4 py-5">All Toys</h2>
            <div className="mb-4 flex">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 px-4 py-2 mr-2 w-1/2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    type='button'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className='overflow-auto'>
                <table className="w-full  border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border">Seller</th>
                            <th className="py-2 px-4 border">Toy Name</th>
                            <th className="py-2 px-4 border">Sub-category</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Available Quantity</th>
                            <th className="py-2 px-4 border"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <tr key={index} className={`text-center ${(index % 2 === 0) ? 'bg-gray-100' : 'bg-gray-200'}`}>
                                <td className="py-2 px-4 border">{toy.sellerName || '-'}</td>
                                <td className="py-2 px-4 border">{toy.toyName}</td>
                                <td className="py-2 px-4 border">{toy.subCategory}</td>
                                <td className="py-2 px-4 border">${toy.price}</td>
                                <td className="py-2 px-4 border">{toy.availableQuantity}</td>
                                <td className="py-2 px-4 border">
                                    <button onClick={() => navigate(`/toy/${toy._id}`)} className=" hover:bg-blue-600 text-white py-1 px-3 rounded">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
