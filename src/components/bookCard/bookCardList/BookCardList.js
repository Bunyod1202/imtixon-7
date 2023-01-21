import React from 'react'
import { Grid } from '@mui/material'
import { BookCardItem } from '../bookCardItem/BookCardItem'

export const BookCardList = () => {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
        <Grid item xs={2}>
          <BookCardItem />
        </Grid>
      </Grid>
    </>
  )
}
