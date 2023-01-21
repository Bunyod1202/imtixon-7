import { Button, FormHelperText, InputBase, Link, Paper, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup"
import React from 'react'
import SigeninImg from "../../assets/image/sigenin.png"
import { useDispatch } from 'react-redux';
import { api } from '../../API/API';
import { TokenRegisterAdd } from '../../redux/token/tokenActions';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const { t } = useTranslation();

  const schema = Yup.object(
    {
      email: Yup.string().email('Email is invalid').required('Email is required'),
      password: Yup.string().min(4, "4 ta").max(8, "8 ta").required('Password is required'),
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
      password: '',
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data);
    const loginApiUser = async () => {
      const cardCasts = await api.LoginApi(data)
      if (cardCasts.status === 201) {
        localStorage.setItem('token', JSON.stringify(cardCasts.data.token));
        dispatch(TokenRegisterAdd({ token: cardCasts.data.token }))
        navigator("/home/1")
      }
      console.log(cardCasts);

    }
    loginApiUser()
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
            backgroundColor: "rgba(209, 184, 157, 0.93)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={SigeninImg} alt="sigen up" />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Box
            sx={{
              width: "330px"
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "900",
                fontSize: "36px",
                lineHeight: "51px",
                color: "text.primary",
              }}>
             {t("sign_in")}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                marginBottom: "21px",
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "15px",
                color: "text.primary",
              }}>
            {t("already_account")}
              <Link sx={{ color: "#549FF9", textDecoration: "none" }}>{t("sign_up")}</Link>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <InputBase
                type='email'
                          {...register("email")}
                  placeholder={t("email")}
                  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                                <FormHelperText error>{errors.email?.message}</FormHelperText>
                <InputBase
                type='password'
                      {...register("password")}
                  placeholder={t("password")}
                  sx={{
                    padding:"5px 29px",
                    border: "1px solid #B4B4BB",
                    borderRadius: "10px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#AAAAAA",
                  }} />
                   <FormHelperText error>{errors.password?.message}</FormHelperText>
              </Stack>
              <Button
                type="submit"
                disabled={!isValid}
                sx={{
                  width: "100%",
                  marginTop:"34px",
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
