import React, { useEffect, useState } from 'react'
import { Box, Link, List, ListItem, Typography } from '@mui/material'
import { NavLink, Route, Routes } from 'react-router-dom'
import { api } from '../../API/API'
import { BookCardList } from './bookCardList/BookCardList'

export const BookCard = () => {

  const [genre, setGenre] = useState([])

  const genreGet = async (data) => {
    const cardCasts = await api.GenreGet(data)
    console.log(cardCasts);
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
          Asosiy kategoriyalar
        </Typography>
        <List
          sx={{
            display: "flex",
            marginX: "auto",
            width: "715px"
          }}>
          {
            genre?.map((item, index) =>
              <ListItem key={index} sx={{ width: "180px" }}>
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
            <Route path='/1' end element={<BookCardList />} />
            <Route path='/2' element={<BookCardList />} />
            <Route path='/3' element={<BookCardList />} />
            <Route path='/4' element={<BookCardList />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}
