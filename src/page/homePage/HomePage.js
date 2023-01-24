import React, { useState } from 'react'
import { Stack, Box, Button, InputBase, Typography, Paper, Container } from '@mui/material'
import { SearchIcon } from '../../assets/icons/Icon'
import { CardAftor } from '../../components/cardAftor/CardAftor'
import { CaruserlBanner } from '../../components/caruselBanner/CaruserlBanner'
import { Header } from '../../components/header/Header'
import { api } from '../../API/API'
import { useRef } from 'react'
import { t } from 'i18next'

export const HomePage = () => {
  const [afterGet, setAfterGet] = useState([]);
  const afterRef = useRef()

  const searchAfter = (evt) => {
    evt.preventDefault();
    const afterSearchGet = async () => {
      const cardCasts = await api.SearchAferApi(afterRef.current.value)
      setAfterGet(cardCasts.data)
    }
    if (afterRef.current.value !== "") {
      afterSearchGet()
    } else {
      setAfterGet([])
    }

  }

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "1310px"
        }}>
        <Header />
        <Box
          sx={{
            position: "relative"
          }}>
          <CaruserlBanner />
          <Paper
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
              zIndex: "20",
              transform: "translateY(60%)",
              width: "1000px",
              marginX: "auto",
              bgcolor: 'background.default',
              boxShadow: "0px 4px 77px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              padding: "29px 73px",

            }}>
            <Box sx={{

            }}>
              <Typography
                sx={{
                  marginBottom: "9px",
                  fontFamily: 'Poppins',
                  fontWeight: "400",
                  fontSize: "32px",
                  lineHeight: "48px",
                  color: "#C9AC8C",
                  textAlign: "center"
                }}
              >{t("search")}</Typography>
              <Box>
                <form onSubmit={searchAfter}>
                  <Stack direction="row" spacing={2}>
                    <InputBase
                      placeholder={t("Literature_books_audios_articles")}
                      inputRef={afterRef}
                      sx={{
                        width: "100%",
                        padding: "12px 27px",
                        backgroundColor: "background.form",
                        borderRadius: "15px",
                        fontFamily: 'Poppins',
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "24px",
                        "&::placeholder": {
                          fontFamily: 'Poppins',
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }
                      }} />
                    <Button
                      type='submit'
                      sx={{
                        backgroundColor: "#C9AC8C",
                        borderRadius: "15px",
                        padding: "14px 44px",
                        color: "background.default",
                        "&:hover": {
                          backgroundColor: "#D1B89D",
                        }
                      }}
                      startIcon={<SearchIcon />}
                    >{t("search")}</Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          </Paper>
        </Box>
        <CardAftor afterGet={afterGet} />
      </Container>

    </>
  )
}
