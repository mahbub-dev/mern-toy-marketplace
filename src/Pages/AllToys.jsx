import React, { useState } from 'react';

const AllToys = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const toys = [
        {
            seller: 'John Doe',
            name: 'ABC Puzzle',
            subCategory: 'Math Toys',
            price: 19.99,
            quantity: 5
        },
        {
            name: 'Word Explorer',
            subCategory: 'Language Toys',
            price: 14.99,
            quantity: 8
        },
        {
            seller: 'Jane Smith',
            name: 'Building Blocks',
            subCategory: 'Engineering Toys',
            price: 24.99,
            quantity: 3
        }
        // Add more toy objects as needed
    ];

    const handleSearch = () => {
        // Logic to handle the search term and perform search
        console.log('Search term:', searchTerm);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 py-5">All Toys</h2>

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
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <div className='overflow-scroll'>

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
                            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-4 border">{toy.seller || '-'}</td>
                                <td className="py-2 px-4 border">{toy.name}</td>
                                <td className="py-2 px-4 border">{toy.subCategory}</td>
                                <td className="py-2 px-4 border">${toy.price.toFixed(2)}</td>
                                <td className="py-2 px-4 border">{toy.quantity}</td>
                                <td className="py-2 px-4 border">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
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
