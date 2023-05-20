/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useAuthContext } from '../Providers/authProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopByCategory = ({ shop_category: categories }) => {
    const { isUser } = useAuthContext()
    const navigate = useNavigate()
    const handleViewPage = (id) => {
        if (!isUser) {
            toast.warning('You have to log in first to view details')
        }
        navigate(`/toy/${id}`)
    }
    return (
        <>
            <section className="py-10 md:px-10 px-5">
                <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
                <Tabs>
                    <TabList className="flex justify-center mb-4">
                        {categories.map((category, index) => (
                            <Tab
                                key={index}
                                className={`px-4 py-2 me-2 rounded-lg font-semibold`}
                            >
                                {category.title}
                            </Tab>
                        ))}
                    </TabList>
                    {categories.map((category, index) => (
                        <TabPanel key={index}>
                            <div className="mt-8 flex flex-col md:flex-row items-center gap-5 justify-center">
                                {category.toys.map((toy, index) => (
                                    <div key={index} className="bg-[#301008] max-w-[300px] rounded-lg shadow-md p-6">
                                        <img src={toy.image} alt={toy.name} className="min-w-[200px] h-40 object-cover rounded-lg mb-4" />

                                        <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
                                        <p className="text-gray-500 mb-2">${toy.price}</p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">{toy.rating} </span>
                                            <span className="text-sm text-gray-500">(Rating)</span>
                                        </div>
                                        <button onClick={() => handleViewPage(toy._id)} className="px-4 py-2 rounded-lg mt-4">
                                            View Details
                                        </button>
                                    </div>

                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </section>

        </>
    );
};

export default ShopByCategory;
