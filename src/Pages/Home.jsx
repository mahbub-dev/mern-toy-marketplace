import GallerySection from "../Components/Galary"
import BannerSlider from "../Components/Slider"
import ShopByCategory from "../Components/ShopByCategory"
import DealsAndDiscounts from "../Components/DealsAndDIscount"
import AboutUs from "../Components/AboutUs"
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const { galary, shop_category } = useLoaderData()
  return (
    <div className="bg-gray-700 text-white">
      <BannerSlider />
      <GallerySection galary={galary} />
      <ShopByCategory shop_category={shop_category} />
      <DealsAndDiscounts />
      <AboutUs />
    </div>
  )
}

export default Home