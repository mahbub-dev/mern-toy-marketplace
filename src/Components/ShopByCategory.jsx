
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useAuthContext } from '../Providers/authProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopByCategory = () => {
    const { isUser } = useAuthContext()
    const navigate = useNavigate()
    const categories = [
        {
            title: 'Math Toys',
            toys: [
                {
                    name: 'Toys That Teach Kids Counting, and Math ',
                    price: '$19.99',
                    rating: 4.5,
                    image: 'https://media1.popsugar-assets.com/files/thumbor/ZdimSCRjVwDyqfclHa4xEsWJ-LM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/06/887/n/24155406/ece5288f1aaf1d14_netimgB57YHB/i/Educational-Insights-Math-Whiz-Electronic-Math-Game.jpg',
                },
                {
                    name: 'Educational Abacus for Kids Math - 10 Row',
                    price: '$24.99',
                    rating: 3.8,
                    image: 'https://m.media-amazon.com/images/I/71cVsG8pSYL.jpg',
                },
            ],
        },
        {
            title: 'Language Toys',
            toys: [
                {
                    name: 'Electronic toys may hamper language development in kids',
                    price: '$14.99',
                    rating: 4.2,
                    image: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/24/Pictures/_b1089c88-aa35-11e5-88cc-d150a333af9b.jpg',
                },
                {
                    name: 'Traditional Toys May Beat Gadgets in Language Development',
                    price: '$22.99',
                    rating: 4.7,
                    image: 'https://static01.nyt.com/images/2015/12/24/science/wellblocks/wellblocks-facebookJumbo.jpg',
                },
            ],
        },
        {
            title: 'Engineering Toys',
            toys: [
                {
                    name: 'Smart Engineering Toys for Techie Kids',
                    price: '$29.99',
                    rating: 4.0,
                    image: 'https://www.engineeringworldchannel.com/wp-content/uploads/2019/07/Smart-Engineering-toys-for-kids.jpg',
                },
                {
                    name: 'Basics of Engineering Toys: Lego, Kano, Cubetto ',
                    price: '$34.99',
                    rating: 4.9,
                    image: 'https://media.wired.com/photos/599b2ac44bd395141548f78b/master/w_2560%2Cc_limit/gl_steampower.jpg',
                },
            ],
        },
    ];
    const handleViewPage = () => {
        if (!isUser) {
            toast.warning('You have to log in first to view details')
            navigate('/login')
        }
    }
    return (
        <>
            <section className="py-10 md:px-10 px-5  bg-gray-100">
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
                                    <div key={index} className="bg-white max-w-[300px] rounded-lg shadow-md p-6">
                                        <img src={toy.image} alt={toy.name} className="w-full h-40 object-cover rounded-lg mb-4" />

                                        <h3 className="text-xl font-semibold mb-2">{toy.name}</h3>
                                        <p className="text-gray-500 mb-2">{toy.price}</p>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">{toy.rating} </span>
                                            <span className="text-sm text-gray-500">(Rating)</span>
                                        </div>
                                        <button onClick={handleViewPage} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4">
                                            View Details
                                        </button>
                                    </div>

                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </section>
            <hr />
        </>
    );
};

export default ShopByCategory;
