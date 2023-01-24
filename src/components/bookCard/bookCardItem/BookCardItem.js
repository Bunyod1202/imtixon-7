import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RoutLink } from 'react-router-dom'
import { api, BASE_URL } from '../../../API/API'
import { useSelector } from 'react-redux'
export const BookCardItem = ({ item }) => {
  const { author_id, id, title, image } = item 
  const token_id = useSelector((state) => state.token.token)
  const [data, setData] = useState({})
  
  const afterGanreGet = async (id,token_id) => {
    const cardCasts = await api.AfterIdGet(id,token_id)
    setData(cardCasts.data)
  }
  useEffect(() => {
    afterGanreGet(author_id,token_id)
  }, [author_id,token_id])
  
  return (
    <>
      <Card
        sx={{
          width: "190px",
          boxShadow: "0",
          bgcolor: "transparent",
          marginBottom: "24px",
          borderRadius: "23px"
        }}>
        <Link
          component={RoutLink}
          to={`/book/${id}`}
          sx={{
            textDecoration: "none"
          }}>
          <CardMedia
            sx={{
              height: 283,
              borderRadius:"20px"
            }}
            image={BASE_URL +"/"+image}
            title="green iguana"
          />
          <CardContent
            sx={{
              bgcolor: "transparent",
              paddingLeft: "0",
              paddingBottom: "0"
            }}>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "27px",
                color: "text.card_title",
              }}
              component="div">
             {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "link.primary",
              }}>
              {data.first_name + " " + data.last_name}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}
