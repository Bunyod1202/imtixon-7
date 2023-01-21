import React from 'react'
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RoutLink } from 'react-router-dom'
import AvloniyImg from "../../../assets/image/avloniy.png"
export const CardAftorItem = () => {
  return (
    <>
      <Card
        sx={{
          width: "295px",
          bgcolor: "background.card_collor",
          marginBottom: "24px",
          borderRadius: "23px"
        }}>
        <Link
          component={RoutLink}
          to="/"
          sx={{
            textDecoration: "none"
          }}>
        <CardMedia
          sx={{ height: 224 }}
          image={AvloniyImg}
          title="green iguana"
        />
        <CardContent sx={{
          bgcolor: "background.card_collor",
        }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "36px",
              color: "text.card_title",
            }}
            component="div">
            Abdulla Avloniy
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
              marginBottom: "63px"
            }}>
            1878-1934
          </Typography>
          </CardContent>
          </Link>
      </Card>
    </>
  )
}
