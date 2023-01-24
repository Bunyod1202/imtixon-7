import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { BookCardItem } from '../bookCardItem/BookCardItem'
import { api } from '../../../API/API'
import { useSelector } from 'react-redux'

export const BookCardList = ({ id, afterGet }) => {
  const token_id = useSelector((state) => state.token.token)
  const [data, setData] = useState([])
  const bookGanreGet = async (id, token_id) => {
    const cardCasts = await api.BookGanreGet(id, token_id)
    setData(cardCasts.data)
  }
  useEffect(() => {
    bookGanreGet(id, token_id)
  }, [id, token_id])
  return (
    <>
      <Grid container spacing={2} >
        {
          afterGet.length ? afterGet?.map((item, index) => <Grid key={index} item xs={2}>
            <BookCardItem item={item} />
          </Grid>) :
            data?.map((item, index) => <Grid key={index} item xs={2}>
              <BookCardItem item={item} />
            </Grid>)
        }
        {

        }


      </Grid>
    </>
  )
}
