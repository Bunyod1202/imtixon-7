import React from 'react'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
export const CaruselCardList = (props) => {
  return (
    <>
      <OwlCarousel
        {...props}
        loop={true}
        autoplayTimeout={3000}
        responsiveClass={true}
        autoplayHoverPause={true}
        smartSpeed={1000}
        autoplay={true}
        sx={{
          width: "100%"
        }}>
        {props.children}
        </OwlCarousel>
    </>
  )
}
