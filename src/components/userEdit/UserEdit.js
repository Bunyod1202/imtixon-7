import { Avatar, InputBase, Box, Typography, Container, Button, FormHelperText, Paper } from '@mui/material'

import React, { useState } from 'react'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import { useTranslation } from 'react-i18next';
import { api } from '../../API/API';
import { useSelector } from 'react-redux';

export const UserEdit = () => {
  const token_id = useSelector((state) => state.token.token)
  const { t } = useTranslation();
  const [inputImgAdd, setInputImgAdd] = useState("")
  const [inputImg, setInputImg] = useState("")
  const schema = Yup.object(
    {
      first_name: Yup.string().required('First name is required'),
      last_name: Yup.string().required('Last name is required'),
      phone: Yup.string().max(9, "9 ta").required('Phone is required'),

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
      first_name: '',
      last_name: '',
      phone: "",
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    let formData = new FormData()
    formData.append("first_name", data.first_name)
    formData.append("last_name", data.last_name)
    formData.append("phone", data.phone)
    formData.append("image", inputImgAdd)
    const ApiUserEdit = async () => {
      const cardCasts = await api.UserEditApi(formData,token_id)
      if (cardCasts.status === 201) {
       
      }
   
    }
    ApiUserEdit()
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
      <Container
        maxWidth="xl"
        sx={{
          width: "1310px"
        }}>
        <Box
          sx={{
            display: "flex",
          }}>
          <Box
            sx={{
              marginRight: "108px"
            }}>
            <Box
              sx={{
                position: "relative",
                width: "175px"
              }}>
              <Avatar sx={{
                width: "175px",
                height: "175px",
              }} alt="Remy Sharp" src={inputImg} />
              <label>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor:"pointer",
                    boxShadow:"0",
                    width: "50px",
                    height: "50px",
                    position: "absolute",
                    right: "0",
                    bottom: "5px",
                    bgcolor: "background.card_collor",
                    borderRadius: "8px",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}><PhotoCameraOutlinedIcon sx={{ fontSize: "35px" }} /></Paper>
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
          </Box>
          <Box
            sx={{
              width: "100%"
            }}>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "27px",
              }}
            >{t("my_profile")}</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Typography
                  sx={{
                    marginTop: "32px",
                    marginBottom: "7px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20px",
                  }}>{t("first_name")}</Typography>
                <InputBase
                  placeholder={t("please_enter_your_first_name")}
                  {...register("first_name")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.first_name?.message}</FormHelperText>
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginTop: "32px",
                    marginBottom: "7px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20px",
                  }}>{t("last_name")}</Typography>
                <InputBase
                  placeholder={t("please_enter_your_last_name")}
                  {...register("last_name")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.last_name?.message}</FormHelperText>
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginTop: "32px",
                    marginBottom: "7px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20px",
                  }}>{t("phone")}</Typography>
                <InputBase
                  placeholder={t("please_enter_your_phone_number")}
                  {...register("phone")}
                  sx={{
                    width: "50%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.phone?.message}</FormHelperText>
              </Box>
              <Box sx={{
                marginTop: "26px",
                width: "100%",
                height: "1px",
                bgcolor: "#ECF0F3"
              }} ></Box>
              <Box sx={{
                width: "100%",
                marginTop: "44px",
                display: "flex",
                justifyContent: "end"
              }}>
                <Button
                  disabled={!isValid}
                  type='submit'
                  sx={{
                    padding: "12px 20px",
                    bordeRadius: "4px",
                    bgcolor: "background.paper",
                    color: "text.btn",
                    "&:hover": {
                      bgcolor: "background.paper",
                      opacity: "0.8"
                    },
                    "&:disabled": {
                      bgcolor: "background.paper",
                      opacity: "0.7",
                      color: "text.btn"
                    }
                  }}
                >{t("save_changes")}</Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  )
}
