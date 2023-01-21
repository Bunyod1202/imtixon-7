import { Box, Container, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { Header } from '../../components/header/Header'
import AdibImg from "../../assets/image/Rectangle 3.png"
import { CaruselCardList } from '../../components/caruselCardList/CaruselCardList'
import { BookCardItem } from '../../components/bookCard/bookCardItem/BookCardItem'
import { useTranslation } from 'react-i18next'

export const AfterPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "1310px"
        }}>
        <Header />
        <Paper sx={{
          boxShadow: "0",
          display: "flex",
          bgcolor: "background.default"
        }}>
          <Box
            sx={{
              marginRight: "64px"
            }}>
            <img src={AdibImg} alt="adib" />
          </Box>
          <Box>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "48px",
                lineHeight: "72px",
                color: "#C9AC8C",
              }}
            >O’tkir Hoshimov</Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.primary",
              }}
            >Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</Typography>
            <Box
              sx={{
                // width: "400px",
                marginTop: "44px",
                display: 'flex',
                // justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>Tavallud sanasi</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "39px",
                    lineHeight: "144.4%",
                    color: "#C9AC8C",
                  }}>1941</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>Toshkent, Uzbekistan</Typography>
              </Box>
              <Box
                sx={{
                  height: "4px",
                  width: "20px",
                  bgcolor: "#D1B89D",
                  marginX: "20px",
                }}
              ></Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>Vafot etgan sana </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "39px",
                    lineHeight: "144.4%",
                    color: "#C9AC8C",
                  }}>2013</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>Toshkent, Uzbekistan</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper sx={{
          boxShadow: "0",
          marginTop: "100px",

          bgcolor: "background.default"
        }}>
          <Box
            sx={{
              marginBottom: "30px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "31px",
                lineHeight: "46px",
                color: "#D1B89D",
              }}>
                {t("works")}
            </Typography>
            <Link
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.default",
                textDecoration: "none"
              }} >{t("see_all")}</Link>
          </Box>
          <CaruselCardList items={6}>
            <BookCardItem />
            <BookCardItem />
            <BookCardItem />
            <BookCardItem />
            <BookCardItem />
          </CaruselCardList>
        </Paper>
      </Container>
    </>
  )
}
