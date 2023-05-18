import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const banners = [
        'https://www.alifstores.com/media/wysiwyg/Kid_s_Development_Web_Banner_V1.1Educational_Toys_-_1080x540px_1.jpg',
        'https://img.freepik.com/premium-vector/collection-wooden-educational-logic-toys-montessori-games-montessori-system-early-childhood-development-set-vector-objects-white-background_507280-11.jpg',
        'https://www.alifstores.com/media/wysiwyg/Kid_s_Development_Web_Banner_V1.1Science_-_1080x540px.jpg',

    ];

    return (
        <Slider {...settings}>
            {banners.map((banner, index) => (
                <div key={index} className="relative">
                    <img
                        src={banner}
                        alt={`slider${index}`}
                        className="w-full max-h-[600px] sliderimage"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default BannerSlider;
