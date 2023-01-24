import React, { useEffect, useState } from 'react'
import { Box, Link, List, ListItem, Typography } from '@mui/material'
import { NavLink, Route, Routes } from 'react-router-dom'
import { api } from '../../API/API'
import { BookCardList } from './bookCardList/BookCardList'
import { t } from 'i18next'
export const BookCard = ({ afterGet, setAfterGet }) => {

  const [genre, setGenre] = useState([])

  const genreGet = async (data) => {
    const cardCasts = await api.GenreGet(data)
    setGenre(cardCasts.data)
  }
  useEffect(() => {
    genreGet()
  }, [])
  return (
    <>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: '189px',
            fontFamily: 'Poppins',
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "48px",
            color: "#C9AC8C",
          }}
        >
          {t("basic_categories")}
        </Typography>
        <List
          sx={{
            display: "flex",
            marginX: "auto",
            width: "715px"
          }}>
          {
            genre?.map((item, index) =>
              <ListItem key={index} sx={{ width: "180px" }} onClick={() => setAfterGet([])}>
                <Link
                  to={`${item.id}`}
                  component={NavLink}
                  sx={{
                    textAlign: 'center',
                    textDecoration: "none",
                    color: "link.primary",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.4%",
                    width: "180px",
                    '&.active': {
                      color: '#C9AC8C',
                    }
                  }}>
                  {item.name}
                </Link>
              </ListItem>)
          }
        </List>
        <Box marginTop="40px">
          <Routes>
            {
              genre.map((item, index) => <Route key={index} path={`/${item.id}`} end element={<BookCardList id={item.id} afterGet={afterGet} />} />)
            }
          </Routes>
        </Box>
      </Box>
    </>
  )
}
