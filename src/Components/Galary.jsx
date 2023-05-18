import React from 'react';

const GallerySection = () => {
    const images = [
        'https://cdn.shopify.com/s/files/1/0104/6331/3977/collections/science-experiment-kits_1200x1200.jpg?v=1672937402',
        'https://i.ytimg.com/vi/Cfg-mt5hv7o/maxresdefault.jpg',
        'https://m.media-amazon.com/images/I/718jnYWfK+L._AC_SL1500_.jpg',
        'https://tinybeans.com/wp-content/uploads/2021/11/kid-doing-science-.png?w=640',
        'https://ae01.alicdn.com/kf/HTB1Oex_as_vK1RkSmRyq6xwupXaF.jpg',
        'https://media1.popsugar-assets.com/files/thumbor/ZdimSCRjVwDyqfclHa4xEsWJ-LM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/06/887/n/24155406/ece5288f1aaf1d14_netimgB57YHB/i/Educational-Insights-Math-Whiz-Electronic-Math-Game.jpg',
        'https://cdn.shopify.com/s/files/1/0583/5918/5560/products/Magnetic-Math-Learning-Toys-Numbers-and-Symbols-Counting-Arithmetic-Tools-Montessori-Magic-Intelligence-Puzzle-Educational-Gifts.jpg?v=1656798874',
        'https://www.alifstores.com/media/wysiwyg/Kid_s_Development_Web_Banner_V1.1Educational_Toys_-_1080x540px_1.jpg',
        'https://img.freepik.com/premium-vector/collection-wooden-educational-logic-toys-montessori-games-montessori-system-early-childhood-development-set-vector-objects-white-background_507280-11.jpg',
        'https://www.alifstores.com/media/wysiwyg/Kid_s_Development_Web_Banner_V1.1Science_-_1080x540px.jpg',
        'https://media.4rgos.it/i/Argos/3920-m0014-m007-m050-asym-m008-m022-STEMtoys-8170949?maxW=1200&qlt=75&fmt.jpeg.interlaced=true',
        'https://m.media-amazon.com/images/I/81txbXMFWQL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/81UnWUd5NbL.jpg'
    ];

    return (
        <>
        <section className="py-10 md:px-10 px-5 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg">
                            <img
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300">
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <hr />
        </>
    );
};

export default GallerySection;
