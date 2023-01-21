import React from 'react'
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RoutLink } from 'react-router-dom'
import BookImg from "../../../assets/image/book.png"
export const BookCardItem = () => {
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
          to="/"
          sx={{
            textDecoration: "none"
          }}>
          <CardMedia
            sx={{
              height: 283
            }}
            image={BookImg}
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
              Dunyoning ishlari
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
              O’tkir Hoshimov
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}
