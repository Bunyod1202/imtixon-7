import React from 'react'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import BannerImg from "../../assets/image/banner.png"
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
export const CaruserlBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <OwlCarousel
        loop={true}
        items={1}
        autoplayTimeout={3000}
        responsiveClass={true}
        autoplayHoverPause={true}
        smartSpeed={1000}
        autoplay={true}
        sx={{
          width: "100%"
        }}>
        <Box
          sx={{
            margin: 0,
            width: "100%",
            height: "346px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            borderRadius: "21px",
            paddingTop: "45px",
            paddingLeft: "86px"

          }} >
          <Typography
            sx={{
              width: "337px",
              fontFamily: 'Aref',
              fontWeight: "400",
              fontSize: "61px",
              lineHeight: " 67px",
              color: "#C9AC8C",
            }}>{t("category.literature_period_timurids")}</Typography>
        </Box>
        <Box
          sx={{
            margin: 0,
            width: "100%",
            height: "346px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            borderRadius: "21px",
            paddingTop: "45px",
            paddingLeft: "86px"

          }} >
          <Typography
            sx={{
              width: "337px",
              fontFamily: 'Aref',
              fontWeight: "400",
              fontSize: "61px",
              lineHeight: " 67px",
              color: "#C9AC8C",
            }}>{t("category.literature_modern_literature")}</Typography>
        </Box>
        <Box
          sx={{
            margin: 0,
            width: "100%",
            height: "346px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            borderRadius: "21px",
            paddingTop: "45px",
            paddingLeft: "86px"

          }} >
          <Typography
            sx={{
              width: "337px",
              fontFamily: 'Aref',
              fontWeight: "400",
              fontSize: "61px",
              lineHeight: " 67px",
              color: "#C9AC8C",
            }}>{t("category.literature_Soviet_era")}</Typography>
        </Box>
        <Box
          sx={{
            margin: 0,
            width: "100%",
            height: "346px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            borderRadius: "21px",
            paddingTop: "45px",
            paddingLeft: "86px"

          }} >
          <Typography
            sx={{
              width: "337px",
              fontFamily: 'Aref',
              fontWeight: "400",
              fontSize: "61px",
              lineHeight: " 67px",
              color: "#C9AC8C",
            }}>{t("category.independence_period_literature")}</Typography>
        </Box>
      </OwlCarousel>
    </>
  )
}
