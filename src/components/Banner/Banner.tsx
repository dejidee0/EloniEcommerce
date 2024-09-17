/** @jsxImportSource theme-ui */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '@/components/Navbar/Navbar';
import BannerSlider from '@/components/BannerSlider/BannerSlider';
import ShowAll from "@/components/ShowAll/ShowAll";

function Banner() {
  return (
    <section sx={{
      fontFamily: 'heading',
      color: 'primary',
      position: 'relative',
      marginTop: 2
    }}>

      <Navbar />
      <BannerSlider />
      <ShowAll />
    </section>
  )
}

export default Banner
