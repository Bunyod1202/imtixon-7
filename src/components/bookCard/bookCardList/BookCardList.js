import { Grid } from '@mui/material'
import React from 'react'
import { BookCardItem } from '../bookCardItem/BookCardItem'

export const BookCardList = () => {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <BookCardItem />
        </Grid>
      </Grid>
    </>
  )
}
