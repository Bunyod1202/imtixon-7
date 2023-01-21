import { Button, FormHelperText, InputBase, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import AddImg from "../../assets/image/add-img.png"
import { api } from '../../API/API';
import { useTranslation } from 'react-i18next';

export const AddBookPage = () => {
  const [inputImgAdd, setInputImgAdd] = useState("")
  const { t } = useTranslation();

  const [inputImg, setInputImg] = useState("")
  const schema = Yup.object(
    {
      title: Yup.string().required('Title is required'),
      page: Yup.string().required('Page is required'),
      year: Yup.string().required('Year is required'),
      price: Yup.string().required('Price is required'),
      genre_id: Yup.string().required('Genre is required'),
      author_id: Yup.string().required('Author is required'),
      description: Yup.string().required('Description is required'),

    }
  )

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid

    },
  } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      page: '',
      year: "",
      price: '',
      genre_id: '',
      author_id: '',
      description: '',
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data);
    let formData = new FormData()

    formData.append("title", data.title)
    formData.append("page", data.page)
    formData.append("year", data.year)
    formData.append("price", data.price)
    formData.append("genre_id", data.genre_id)
    formData.append("author_id", data.author_id)
    formData.append("description", data.description)
    formData.append("image ", inputImgAdd)

    const bookApiAdd = async () => {
      const cardCasts = await api.AddBookApi(formData)
      console.log(cardCasts);
      if (cardCasts.status === 200) {

      }

    }
    bookApiAdd()

  }
  const addImg = (evt) => {
    evt.preventDefault();
    setInputImgAdd(evt.target.files[0])
    let img = evt.target.files[0]
    const fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.addEventListener("load", function () {
      setInputImg(this.result)
    });
  }


  const [genre, setGenre] = useState([])

  const genreGet = async () => {
    const cardCasts = await api.GenreGet()
    console.log(cardCasts);
    setGenre(cardCasts.data)
  }
  useEffect(() => {
    genreGet()
  }, [])
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          display: 'flex',
          height: "100vh",
          bgcolor: "background.default"
        }}>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#00000033",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <label>
            <Box
              sx={{
                width: "315px",
                height: "428px",
                backgroundImage: inputImg === "" ? `url('${AddImg}')` : `url('${inputImg}')`,
                backgroundSize: "cover",
                cursor: "pointer"
              }}
            ></Box>
            <InputBase
              placeholder='First name'
              type="file"
              onChange={addImg}
              sx={{
                position: "absolute",
                width: "1px",
                height: "1px",
                margin: "-1px",
                border: "0",
                padding: "0",
                whiteSpace: "nowrap",
                clipPath: "inset(100%)",
                clip: "rect(0 0 0 0)",
                overflow: "hidden",
              }} />
          </label>

        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >       <Box
          sx={{
            width: "330px"
          }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "900",
                fontSize: "32px",
                lineHeight: "48px",
                color: "text.primary",
              }}>
             {t("add_book")}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1}>
                <InputBase
                  placeholder={t("title")}
                  {...register("title")}
                  sx={{
                    padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                <FormHelperText error>{errors.title?.message}</FormHelperText>
                <InputBase
                  placeholder={t("pages")}
                  {...register("page")}
                  sx={{
                    padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                <FormHelperText error>{errors.page?.message}</FormHelperText>
                <InputBase
                  placeholder={t("year")}
                  {...register("year")}
                  type="number"
                  sx={{
                    padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                <FormHelperText error>{errors.year?.message}</FormHelperText>
                <InputBase
                  placeholder={t("price")}
                  {...register("price")}
                  sx={{
                    padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                <FormHelperText error>{errors.price?.message}</FormHelperText>
                <TextField label={t("genre")}
                  sx={{
                    // padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}
                  {...register("genre_id")}
                  defaultValue=""
                  select
                >
                  {
                    genre?.map((item, index) =>
                      <MenuItem
                        sx={{
                          bgcolor: "#fff",
                          "&:hover": { bgcolor: "#fff" },
                          "&:active": { bgcolor: "#fff" }
                        }} key={index} value={item.name}>
                      {item.name}
                    </MenuItem>)
                  }
                </TextField>

                <FormHelperText error>{errors.genre_id?.message}</FormHelperText>
                <TextField
                   defaultValue=""
                  label={t("author")}
                  {...register("author_id")}
                  select
                  sx={{
                    // padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}


                ></TextField>
                <FormHelperText error>{errors.author_id?.message}</FormHelperText>
                <InputBase
                  placeholder={t("bio")}
                  {...register("description")}
                  sx={{
                    display: "block",
                    height: "82px",
                    padding: "5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }}

                />
                <FormHelperText error>{errors.description?.message}</FormHelperText>
              </Stack>
              <Button
                disabled={!isValid}
                type="submit"
                sx={{
                  width: "100%",
                  marginTop: "34px",
                  bgcolor: "button.primary",
                  fontFamily: 'Poppins',
                  fontWeight: "500",
                  fontSize: "18px",
                  lineHeight: "25px",
                  borderRadius: "99px",
                  color: "text.btn",
                  "&:disabled": {
                    color: "text.disabled",
                  }
                }} >{t("next_step")}</Button>
            </form>
          </Box>
        </Box>
      </Paper>
    </>
  )
}
