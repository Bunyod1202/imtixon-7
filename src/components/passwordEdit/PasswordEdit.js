import { InputBase, Box, Typography, Container, Button, FormHelperText } from '@mui/material'

import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import { useTranslation } from 'react-i18next';
import { api } from '../../API/API';
import { useSelector } from 'react-redux';

export const PasswordEdit = () => {
  const token_id = useSelector((state) => state.token.token)
  const { t } = useTranslation();
  const schema = Yup.object(
    {
      email: Yup.string().email('Email is invalid').required('Email is required'),
      currentPassword: Yup.string().min(4, "4 ta").max(8, "8 ta").required('Password is required'),
      newPassword: Yup.string().min(4, "4 ta").max(8, "8 ta").required('Password is required'),

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
      email: '',
      currentPassword: '',
      newPassword: "",
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    const ApiPasswordEdit = async () => {
      const cardCasts = await api.PasswordEditApi(data, token_id)
      console.log(cardCasts);
    }
    ApiPasswordEdit()
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
            justifyContent: "center",

          }}>
          <Box
            sx={{
              width: "70%"
            }}>
            <Typography
              sx={{
                marginTop: "30px",
                fontFamily: 'Poppins',
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "27px",
              }}
            >{t("change_recover_your_password")}</Typography>
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
                  }}>{t("email")}</Typography>
                <InputBase
                  type='email'
                  placeholder={t("please_enter_your_email")}
                  {...register("email")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.email?.message}</FormHelperText>
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
                  }}>{t("current_password")}</Typography>
                <InputBase
                  type='password'
                  placeholder={t("please_enter_your_password")}
                  {...register("currentPassword")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.currentPassword?.message}</FormHelperText>
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
                  }}>{t("new_password")}</Typography>
                <InputBase
                  type='password'
                  placeholder={t("please_enter_your_password")}
                  {...register("newPassword")}
                  sx={{
                    width: "100%",
                    padding: "12px 20px",
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                  }} />
                <FormHelperText error>{errors.newPassword?.message}</FormHelperText>
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
