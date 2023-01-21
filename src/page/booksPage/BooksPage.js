import React from 'react'
import { Stack, Box, Button, InputBase, Typography, Paper, Container } from '@mui/material'
import { SearchIcon } from '../../assets/icons/Icon'
import { CaruserlBanner } from '../../components/caruselBanner/CaruserlBanner'
import { BookCard } from '../../components/bookCard/BookCard'
import { Header } from '../../components/header/Header'

export const BooksPage = () => {
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
              padding: "29px 73px"
            }}>
            <Box>
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
              >Qidirish</Typography>
              <Box>
                <form>
                  <Stack direction="row" spacing={2}>
                    <InputBase
                      placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
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
                    >Izlash</Button>
                  </Stack>
                </form>
              </Box>
            </Box>
          </Paper>
        </Box>
        <BookCard />
      </Container>

    </>
  )
}
