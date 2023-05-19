import { useState } from "react";
import ConfirmModal from "../Components/ConfirmModal";
import UpdateModal from "../Components/UpdateModal";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const MyToys = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState({ isOpen: false, id: '' })
    const [isUpdateOpen, setIsUpdateOpen] = useState({ isOpen: false, data: {} })
    const data = useLoaderData()
    const [toys, setToys] = useState(data)
    const url = import.meta.env.VITE_APP_API_SERVER_URI


    const handleUpdateToy = async (price, quantity, description) => {
        try {
            const updateData = { _id: isUpdateOpen.data._id, price, quantity, description }
            const res = await fetch(`${url}/mytoy`, {
                headers: { 'Content-Type': 'application/json' },
                method: 'put',
                body: JSON.stringify(updateData)
            })
            const data = await res.json()
            setToys(p =>
                [...p.filter(i => i._id !== data._id), data]
            )
            toast.success('Toy updated successfully')
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    };

    const handleDeleteToy = async () => {
        if (isDeleteOpen.id) {
            try {
                const res = await fetch(`${url}/mytoy/${isDeleteOpen.id}`, {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'delete'
                })
                await res.json()
                setToys(p => p.filter(i => i._id !== isDeleteOpen.id))
                toast.success('Toy is deleted successfuly')
                setIsDeleteOpen({ isOpen: false, id: '' })
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }

        }
    };


    return (
        <div className=" p-5 mx-auto min-h-[720px] py-8 bg-gray-700">
            <h2 className="text-2xl font-bold text-center text-white mb-4">My Toys</h2>
            {
                isUpdateOpen.isOpen && <UpdateModal
                    isOpen={isUpdateOpen}
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
                                    <img src={toy.picture} alt={toy.name} className="w-10 h-10 rounded-full" />
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
