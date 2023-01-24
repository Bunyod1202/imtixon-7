import { Grid } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { api } from "../../../API/API"
import { CardAftorItem } from "../cardAftorItem/CardAftorItem"

export const CardAftorList = ({ id, afterGet }) => {
  const token_id = useSelector((state) => state.token.token)
  const [data, setData] = useState([])
  const afterGanreGet = async (id, token_id) => {
    const cardCasts = await api.AfterGanreGet(id, token_id)

    setData(cardCasts.data)
  }
  useEffect(() => {
    afterGanreGet(id, token_id)
  }, [id, token_id, afterGet])

  return (
    <>
      <Grid container spacing={2} >
        {afterGet.length ? afterGet?.map((item, index) =>
          <Grid key={index} item xs={3}>
            <CardAftorItem item={item} />
          </Grid>) :
          data?.map((item, index) =>
            <Grid key={index} item xs={3}>
              <CardAftorItem item={item} />
            </Grid>)

        }

      </Grid>
    </>
  )
}
