import { useState } from "react";
import ConfirmModal from "../Components/ConfirmModal";
import UpdateModal from "../Components/UpdateModal";
import { useAsyncError } from "react-router-dom";
const MyToys = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState({ isOpen: false, id: '' })
    const [isUpdateOpen, setIsUpdateOpen] = useState({ isOpen: false, data: {} })
    const toys = [
        {
            _id: 1,
            imageUrl: 'https://m.media-amazon.com/images/I/81UnWUd5NbL.jpg',
            name: 'Toy 1',
            sellerName: 'John Doe',
            sellerEmail: 'john.doe@example.com',
            subCategory: 'Math Toys',
            price: 19.99,
            rating: 4.5,
            quantity: 10,
            description: 'This is a math toy for learning numbers and counting.',
        },
        {
            _id: 2,
            imageUrl: 'https://m.media-amazon.com/images/I/81txbXMFWQL._AC_SL1500_.jpg',
            name: 'Toy 2',
            sellerName: 'Jane Smith',
            sellerEmail: 'jane.smith@example.com',
            subCategory: 'Language Toys',
            price: 14.99,
            rating: 3.8,
            quantity: 5,
            description: 'This is a language toy for learning vocabulary and spelling.',
        },
        // Add more toys as needed
    ];

    const handleUpdateToy = (toyId) => {
        // Handle updating the toy information
        // Redirect to the toy update page or show a modal for updating the toy details
        // You can use your preferred routing mechanism
        // For example, if you're using React Router:
        // history.push(`/toys/${toyId}/update`);
        console.log(isUpdateOpen.data._id)
    };

    const handleDeleteToy = (toyId) => {
        console.log(isDeleteOpen.id)
        // Handle deleting the toy
        // You can show a confirmation modal before deleting the toy
    };


    return (
        <div className=" p-5 mx-auto py-8 bg-gray-100">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">My Toys</h2>
            {
                isUpdateOpen.isOpen && <UpdateModal
                    isOpen={isUpdateOpen.isOpen}
                    onCancel={() => setIsUpdateOpen(p => ({ ...p, isOpen: !p.isOpen }))}
                    onUpdate={handleUpdateToy}
                    initialPrice={isUpdateOpen?.data?.price}
                    initialQuantity={isUpdateOpen?.data?.quantity}
                    initialDescription={isUpdateOpen?.data?.description}
                />
            }
            {
                isDeleteOpen && <ConfirmModal isOpen={isDeleteOpen.isOpen} onConfirm={handleDeleteToy} onCancel={() => setIsDeleteOpen(p => ({ ...p, isOpen: !p.isOpen }))} />
            }
            <div className='overflow-auto'>
                <table className="w-full bg-white shadow-md rounded">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="py-2 px-4 border-b">Picture</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Seller Name</th>
                            <th className="py-2 px-4 border-b">Seller Email</th>
                            <th className="py-2 px-4 border-b">Sub-category</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Rating</th>
                            <th className="py-2 px-4 border-b">Quantity</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <tr key={toy._id} className="text-gray-700">
                                <td className="py-2 px-4 border-b">
                                    <img src={toy.imageUrl} alt={toy.name} className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="py-2 px-4 border-b">{toy.name}</td>
                                <td className="py-2 px-4 border-b">{toy.sellerName}</td>
                                <td className="py-2 px-4 border-b">{toy.sellerEmail}</td>
                                <td className="py-2 px-4 border-b">{toy.subCategory}</td>
                                <td className="py-2 px-4 border-b">{toy.price}</td>
                                <td className="py-2 px-4 border-b">{toy.rating}</td>
                                <td className="py-2 px-4 border-b">{toy.quantity}</td>
                                <td className="py-2 px-4 border-b">{toy.description}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 mb-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                                        onClick={() => setIsUpdateOpen(p => ({ isOpen: !p.isOpen, data: toy }))}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="bg-gray-500 hover:gray-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsDeleteOpen(p => ({ ...p, isOpen: !p.isOpen, id: toy._id }))}
                                    >
                                        Delete
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

export default MyToys;
