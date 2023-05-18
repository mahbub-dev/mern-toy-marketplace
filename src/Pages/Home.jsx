import GallerySection from "../Components/Galary"
import BannerSlider from "../Components/Slider"
import ShopByCategory from "../Components/ShopByCategory"

BannerSlider
const Home = () => {
  return (
    <div>
      <BannerSlider/>
      <GallerySection/>
      <ShopByCategory/>
    </div>
  )
}

export default Home