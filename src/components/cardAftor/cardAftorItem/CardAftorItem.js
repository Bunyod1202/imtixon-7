import React from 'react'
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RoutLink } from 'react-router-dom'
import { BASE_URL } from '../../../API/API'
import CardImg from "../../../assets/image/cardbg.png"
export const CardAftorItem = ({ item }) => {
  const { date_of_birth, date_of_death, first_name, last_name, image, id } = item
  return (
    <>
      <Card
        sx={{
          width: "295px",
          bgcolor: "background.card_collor",
          backgroundImage: `url('${CardImg}')`,
          backgroundSize: "cover",
          marginBottom: "24px",
          borderRadius: "23px"
        }}>
        <Link
          component={RoutLink}
          to={`/after/${id}`}
          sx={{
            textDecoration: "none"
          }}>
          <CardMedia
            sx={{ height: 224 }}
            image={BASE_URL + "/" + image}
            title="green iguana"
          />
          <CardContent sx={{
            // bgcolor: "background.card_collor",
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
              {first_name} {last_name}
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
              {date_of_birth}-{date_of_death}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}
