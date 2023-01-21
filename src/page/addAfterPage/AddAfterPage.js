import { Button, FormHelperText, InputBase, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import AddImg from "../../assets/image/add-img.png"
import { api } from '../../API/API';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AddAfterPage = () => {
  const [inputImgAdd, setInputImgAdd] = useState("")
  const [inputImg, setInputImg] = useState("")
  console.log(inputImgAdd);
  const navigator = useNavigate()
  const { t } = useTranslation();
  const [genre, setGenre] = useState([])

  const genreGet = async () => {
    const cardCasts = await api.GenreGet()
    console.log(cardCasts);
    setGenre(cardCasts.data)
  }
  useEffect(() => {
    genreGet()
  }, [])

  const schema = Yup.object(
    {
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      date_of_birth: Yup.string().required('Date of birth is required'),
      date_of_death: Yup.string().required('Date of death is required'),
      country: Yup.string().required('Country of death is required'),
      genre_id: Yup.string().required('Genre is required'),
      bio: Yup.string().required('Bio is required'),
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
      first_name : '',
      last_name : '',
      date_of_birth : "",
      date_of_death: '',
      country: '',
      genre_id: '',
      bio: '',
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data);
    let formData = new FormData()

    formData.append("first_name", data.first_name)
    formData.append("last_name", data.last_name)
    formData.append("date_of_birth", data.date_of_birth)
    formData.append("date_of_death", data.date_of_death)
    formData.append("country", data.country)
    formData.append("genre_id", data.genre_id)
    formData.append("bio", data.bio)
    formData.append("image", inputImgAdd)
console.log(formData);
    const afterApiAdd = async () => {
      const cardCasts = await api.AddAfterApi(formData)
      console.log(cardCasts);
      if (cardCasts.status === 201) {
        navigator(-1)
      }
      console.log(cardCasts);

    }
    afterApiAdd()
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

  return (
    <>
        <Paper
        sx={{
          width: "100%",
          display: 'flex',
          height: "100vh",
          bgcolor:"background.default"
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
                backgroundImage: inputImg === "" ?`url('${AddImg}')`:`url('${inputImg}')`,
                backgroundSize: "cover",
                cursor: "pointer"
            }}
            ></Box>
          <InputBase
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
        {t("add_author")}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <InputBase
              placeholder={t("first_name")}
              {...register("first_name")}
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
            <FormHelperText error>{errors.first_name?.message}</FormHelperText>
            <InputBase
              placeholder={t("last_name")}
              {...register("last_name")}
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
            <FormHelperText error>{errors.last_name?.message}</FormHelperText>
            <InputBase
              placeholder={t("date_of_birth")}
              {...register("date_of_birth")}
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
            <FormHelperText error>{errors.date_of_birth?.message}</FormHelperText>
            <InputBase
              placeholder={t("date_of_death")}
              {...register("date_of_death")}
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
            <FormHelperText error>{errors.date_of_death?.message}</FormHelperText>
            <InputBase
              placeholder={t("country")}
                  {...register("country")}
              sx={{
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
                <FormHelperText error>{errors.country?.message}</FormHelperText>
                <TextField  label={t("genre")} 
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
                    genre?.map((item, index) => <MenuItem sx={{bgcolor:"#fff" ,"&:hover":{bgcolor:"#fff"},"&:active":{bgcolor:"#fff"}}}  key={index} value={item.id}> 
                      {item.name}
                    </MenuItem>)
                  }
              </TextField>
            
                <FormHelperText error>{errors.genre_id?.message}</FormHelperText>
                <InputBase
              placeholder={t("bio")}
              {...register("bio")}
                  sx={{
                    display: "block",
                height:"82px",
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
            <FormHelperText error>{errors.bio?.message}</FormHelperText>
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
