import styled from '@emotion/styled';
import { Button, FormControlLabel, MenuItem, Switch, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useRef } from 'react'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { langEdit } from '../../redux/lang/langActions';
import { themeEdit } from '../../redux/thrme/themeActions';

export const SettingsControl = () => {
  const themeChek = JSON.parse(localStorage.getItem('themeChek')) || false;
  const [modes , setModes]=useState("dark")
  const dispatch = useDispatch()


  const langRef = useRef()
  const { t, i18n } = useTranslation();


  const cantrolSubmit = (evt) => {
    evt.preventDefault();
    dispatch(langEdit(localStorage.getItem("lang")))
    localStorage.setItem("lang", langRef.current.value);
    i18n.changeLanguage(langRef.current.value)

    dispatch(themeEdit(modes))
    localStorage.setItem("theme", modes)

  
    
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
            >{t("settings")}</Typography>
            <form onSubmit={cantrolSubmit} >
              <Box>
                <Typography
                  sx={{
                    marginTop: "32px",
                    marginBottom: "7px",
                    fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "20px",
                  }}>{t("language")}</Typography>
                <TextField
                  type='email'
                  label={t("please_enter_your_email")}
                  inputRef={langRef}
                  sx={{
                    width: "100%",
                    
                    bgcolor: "#F3F6F9",
                    borderRadius: "4px",
                    ".MuiSelect-nativeInput": {
                      color: "text.primary ",
                    }
                  }}
                  defaultValue={i18n.language}
                  select
               
                >
                  <MenuItem value="uz"  sx={{
                    color: "#D1B89D"
                  }} >
                    uz
                  </MenuItem>
                  <MenuItem value="en" sx={{
                    color: "#D1B89D"
                  }} >
                    en
                  </MenuItem>
                  <MenuItem value="ru"sx={{
                    color: "#D1B89D"
                  }} >
                    ru
                  </MenuItem>
                </TextField>
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
                  }}>{t("theme")}</Typography>
                <FormControlLabel
                  sx={{
                    display: 'block',
                    width: "87px",
                    height: "30px",

                  }}
                  control={
                    <AntSwitch
                      // defaultChecked
                      inputProps={{ 'aria-label': 'ant design' }}
                      checked={themeChek}
                      onChange={() => {

                        if (modes === "dark") {
                          setModes("light")
             
                          localStorage.setItem('themeChek', JSON.stringify(true));
                        } else {
                          setModes("dark")
                          localStorage.setItem('themeChek', JSON.stringify(false));
                        }

                      }} />
                  
                  }

                />
              </Box>
              <Box sx={{
                width: "100%",
                marginTop: "44px",
                display: "flex",
                justifyContent: "end"
              }}>

                <Button
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
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 87,
  height: 30,
  padding: 0,
  display: 'flex',
  borderRadius: "30px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 28,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(50px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(57px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#F3F6F9' : '#F3F6F9',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 28,
    borderRadius: "30px",
    height: 28,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#3699FF' : '#3699FF)',
    boxSizing: 'border-box',
  },
}));