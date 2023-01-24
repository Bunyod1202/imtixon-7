import { Box, Container, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { CaruselCardList } from '../../components/caruselCardList/CaruselCardList'
import { BookCardItem } from '../../components/bookCard/bookCardItem/BookCardItem'
import SouthIcon from '@mui/icons-material/South';
import { useTranslation } from 'react-i18next'
import { NavLink, useParams } from 'react-router-dom'
import { api, BASE_URL } from '../../API/API'
import { useSelector } from 'react-redux'

export const BookPage = () => {
  const token_id = useSelector((state) => state.token.token)
  const [dataAfterBook, setDataAfterBook] = useState([])
  const { id } = useParams()
  const { t } = useTranslation();
  const [data, setData] = useState({})

  const bookIdGet = async (id, token_id) => {
    const cardCasts = await api.BookIdGet(id, token_id)
    setData(cardCasts.data)
  }
  useEffect(() => {
    bookIdGet(id, token_id)
  }, [id, token_id])


  const afterBookGet = async (id, token_id) => {
    const cardCasts = await api.AfterBookApi(id, token_id)
    setDataAfterBook(cardCasts.data)
  }
  useEffect(() => {
    afterBookGet(data?.author_id, token_id)
  }, [data, token_id])
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
            <img width={505} height={681} src={BASE_URL + "/" + data.image} alt="adib" />
          </Box>
          <Box sx={{
            width: "100%",
          }}>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "48px",
                lineHeight: "72px",
                color: "#C9AC8C",
              }}
            >{data.title}</Typography>
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
                  }}>{data.page}page</Typography>
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
                  }}>{data.year} years</Typography>
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
                  }}>${data.price}</Typography>
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
              <Box sx={{ width: "78%", height: "1px", bgcolor: "#D1B89D" }}></Box>
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
            >{data.description}</Typography>

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
              component={NavLink}
              to="/home/1"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.default",
                textDecoration: "none"
              }} >{t("see_all")}</Link>
          </Box>


          {
            dataAfterBook.length ? <CaruselCardList items={6}>
              {
                dataAfterBook?.map((item, index) => <BookCardItem key={index} item={item} />)
              }
            </CaruselCardList> : ""

          }


        </Paper>
      </Container>
    </>
  )
}
