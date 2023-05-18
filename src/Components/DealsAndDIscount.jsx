

const DealsAndDiscounts = () => {
    const deals = [
        {
            id: 1,
            title: 'Limited Time Offer',
            description: 'Get 20% off on all outdoor toys',
        },
        {
            id: 2,
            title: 'Summer Sale',
            description: 'Save big on water toys and beach accessories',
        },
        {
            id: 3,
            title: 'Buy One, Get One Free',
            description: 'Purchase any board game and get another one for free',
        },
    ];

    return (
        <>
        <section className="py-10 md:px-10 px-5  bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Deals And Discounts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {deals.map((deal) => (
                        <div key={deal.id} className="bg-white flex flex-col justify-between rounded-lg p-6 shadow-md">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                                <p className="text-gray-600">{deal.description}</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <hr />
        </>
    );
};

export default DealsAndDiscounts;
