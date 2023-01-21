import { Box, Container, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { Header } from '../../components/header/Header'
import AdibImg from "../../assets/image/Rectangle 3 (1).png"
import { CaruselCardList } from '../../components/caruselCardList/CaruselCardList'
import { BookCardItem } from '../../components/bookCard/bookCardItem/BookCardItem'
import SouthIcon from '@mui/icons-material/South';
import { useTranslation } from 'react-i18next'

export const BookPage = () => {
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
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "30px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.disabled",
                  }}>{t("number_of_pages")}</Typography>
                <Typography
                  sx={{
                    marginTop: "30px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.primary",
                  }}>376 page</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "14px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.disabled",
                  }}>{t("published_by")}</Typography>
                <Typography
                  sx={{
                    marginTop: "14px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.primary",
                  }}>2021 years</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "14px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.disabled",
                  }}>{t("book_price")}</Typography>
                <Typography
                  sx={{
                    marginTop: "14px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "text.primary",
                  }}>$124.9</Typography>
              </Box>
            </Box>
            <Box sx={{
                        marginTop: "30px",
              display: "flex",
              alignItems: "center",
            }}>
              <Typography
                sx={{
           
                  fontFamily: 'Poppins',
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#D1B89D",
                }}>{t("full_information")}</Typography><SouthIcon sx={{ fontSize: "16px" }} />
              <Box sx={{width:"78%",height:"1px" ,bgcolor:"#D1B89D"}}></Box>
            </Box>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.primary",
              }}
            >Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan </Typography>
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
