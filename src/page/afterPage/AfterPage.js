import { Box, Container, Link, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { CaruselCardList } from '../../components/caruselCardList/CaruselCardList'
import { BookCardItem } from '../../components/bookCard/bookCardItem/BookCardItem'
import { useTranslation } from 'react-i18next'
import { NavLink, useParams } from 'react-router-dom'
import { api, BASE_URL } from '../../API/API'
import { useSelector } from 'react-redux'

export const AfterPage = () => {
  const token_id = useSelector((state) => state.token.token)
  const { t } = useTranslation();
  const { id } = useParams()


  const [data, setData] = useState({ id })

  const [dataAfterBook, setDataAfterBook] = useState([])

  const afterGanreGet = async (id, token_id) => {
    const cardCasts = await api.AfterIdGet(id, token_id)
    setData(cardCasts.data)
  }
  useEffect(() => {
    afterGanreGet(id, token_id)
  }, [id, token_id])

  const afterBookGet = async (id, token_id) => {
    const cardCasts = await api.AfterBookApi(id, token_id)
    setDataAfterBook(cardCasts.data)
  }
  useEffect(() => {
    afterBookGet(id, token_id)
  }, [id, token_id])

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
            >{data.first_name} {data.last_name}</Typography>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "text.primary",
              }}
            >{data.bio}</Typography>
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
                  }}>{data.date_of_birth}</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>{data.country}</Typography>
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
                  }}>{data.date_of_death}</Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "text.disabled",
                  }}>{data.country}</Typography>
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
              component={NavLink}
              to="/books/1"
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
