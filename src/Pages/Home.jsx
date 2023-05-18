import GallerySection from "../Components/Galary"
import BannerSlider from "../Components/Slider"
import ShopByCategory from "../Components/ShopByCategory"
import DealsAndDiscounts from "../Components/DealsAndDIscount"
import AboutUs from "../Components/AboutUs"


BannerSlider
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <GallerySection />
      <ShopByCategory />
      <DealsAndDiscounts />
      <AboutUs/>
    </div>
  )
}

export default Home