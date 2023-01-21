import { Grid } from "@mui/material"
import { CardAftorItem } from "../cardAftorItem/CardAftorItem"

export const CardAftorList = () => {

  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
        <Grid item xs={3}>
          <CardAftorItem />
        </Grid>
      </Grid>
    </>
  )
}
