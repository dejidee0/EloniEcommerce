/** @jsxImportSource theme-ui */
import elon_banner_2 from '@/assets/elon_banner2.jpg'
import elon_banner from '@/assets/elon_banner.jpg'
import elon_banner_1 from '@/assets/elon_banner_1.jpg'
import elon_banner_3 from '@/assets/elon_banner_3.jpg'
import { theme } from '@/Theme/theme'
import { useState, useEffect } from 'react'


const BannerSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: elon_banner, alt: "women's latest fashion sale" },
    { src: elon_banner_1, alt: 'discount sale' },
    { src: elon_banner_2, alt: 'new fashion sale' },
    { src: elon_banner_3, alt: 'discount sale' },
  ];


  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="banner" sx={{ ...theme.bannerStyles.banner }}>
      <div className="container" sx={{ ...theme.container }}>
        <div className="slider-item" sx={{ ...theme.bannerStyles.sliderItem }}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              // className={`banner-img fade ${index === currentSlide ? 'active' : ''}`}
              sx={{ ...theme.bannerStyles.bannerImg }}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            />
          ))}
        </div>

        <div sx={{ ...theme.bannerStyles.dotPoints }}>
          {slides.map((_, index) => {
            console.log('wow', { backgroundColor: index === currentSlide ? theme.bannerStyles.active.backgroundColor : theme.bannerStyles.dot.backgroundColor })
            return (
              (
                <span
                  key={index}
                  // className={`dot ${index === currentSlide ? 'active' : ''}`}
                  sx={{
                    ...theme.bannerStyles.dot,
                    backgroundColor: index === currentSlide ? theme.bannerStyles.active.backgroundColor : theme.bannerStyles.dot.backgroundColor, // Active and inactive styles
                  }}
                  onClick={() => changeSlide(index)}
                ></span>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BannerSlider