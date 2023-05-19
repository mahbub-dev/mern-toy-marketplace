
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddToyPage = () => {
    const [formData, setFormData] = useState({
        picture: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: '',
        rating: '',
        quantity: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (Object.values(formData).some(i => i === '')) {
                toast.warning('Please fill all the fields before submit')
                return
            }
            const res = await fetch(`${import.meta.env.VITE_APP_API_SERVER_URI}/add_toy`, {
                headers: { "Content-Type": 'application/json' },
                method: 'post',
                body: JSON.stringify(formData)
            })
            await res.json()
            toast.success('Toy added successfuly')
            // Reset the form fields after submission if needed
            setFormData({
                picture: '',
                name: '',
                sellerName: '',
                sellerEmail: '',
                subCategory: '',
                price: '',
                rating: '',
                quantity: '',
                description: '',
            });
        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen py-5 bg-gray-700">
            <div className="bg-white p-8 md:w-[500px] w-[320px] rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Add Toy</h2>
                <form onSubmit={handleSubmit} className=" mx-auto">
                    <div className="mb-4">
                        <label htmlFor="picture" className="block text-gray-700 font-medium mb-2">
                            Picture URL
                        </label>
                        <input
                            type="text"
                            name='picture'
                            id="picture"
                            value={formData.image}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block text-gray-700 font-medium mb-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            name='sellerName'
                            id="sellerName"
                            value={formData.sellerName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="sellerEmail" className="block text-gray-700 font-medium mb-2">
                            Seller Email
                        </label>
                        <input
                            type="email"
                            name='sellerEmail'
                            id="sellerEmail"
                            value={formData.sellerEmail}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subCategory" className="block text-gray-700 font-medium mb-2">
                            Sub-category
                        </label>
                        <select
                            id="subCategory"
                            value={formData.subCategory}
                            name='subCategory'
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        >
                            <option value="">Select Sub-category</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            name='price'
                            id="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
                            Rating
                        </label>
                        <input
                            type="number"
                            name='rating'
                            id="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                            Available Quantity
                        </label>
                        <input
                            type="number"
                            name='quantity'
                            id="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                            Detail Description
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            name='description'
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md py-2 px-3 w-full"
                        ></textarea>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Add Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToyPage;
