/* eslint-disable react/prop-types */


const GallerySection = ({ galary:images }) => {

    return (
        <>
            <section className="py-10 md:px-10 px-5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {images?.map((image, index) => (
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
           
        </>
    );
};

export default GallerySection;
