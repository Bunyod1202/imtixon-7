import { Link, List, ListItem, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Route, Routes } from 'react-router-dom'
import { PasswordEdit } from '../../components/passwordEdit/PasswordEdit'
import { SettingsControl } from '../../components/settingsControl/SettingsControl'
import { UserEdit } from '../../components/userEdit/UserEdit'

export const AdminPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Paper
        sx={{
          width: '100%',
          height: "100vh",
          bgcolor: 'background.default',
          boxShadow: "0",
        }}>
        <Box >
          <List sx={{
            width: "100%",
            display: 'flex',
            padding: "0",
            boxShadow: "0",
            bgcolor: "background.nav"
          }} >
            <ListItem
              sx={{
                padding: "0",
                margin: "0",

              }}>
              <Link
                to="/admin/1"
                component={NavLink}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "23px",
                  textDecoration: "none",
                  margin: "0",
                  "&.active": {
                    bgcolor: "background.navActive",
                    "div": {
                      bgcolor: "#152540",
                    },
                    ".MuiTypography-body1": {
                      color: "#152540"
                    }
                  },
                  "div": {
                    bgcolor: "#E5EAEE",
                  },

                }}>
                <Box
                  sx={{
                    padding: '12px 20px',
                    backgroundColor: "#152540",
                    color: "#fff",
                    borderRadius: "4px",
                  }}  >1</Box>
                <Typography
                  sx={{

                    marginLeft: "9px",
                    fontFamily: 'Poppins',
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "text.disabled",
                  }}
                >Profile</Typography>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                padding: "0",
                margin: "0",
              }}>
              <Link
                to="/admin/2"
                component={NavLink}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "23px",
                  textDecoration: "none",
                  "&.active": {
                    bgcolor: "background.navActive",
                    "div": {
                      bgcolor: "#152540",
                    },
                    ".MuiTypography-body1": {
                      color: "#152540"
                    }
                  },
                  "div": {
                    bgcolor: "#E5EAEE",
                  },
                  "p": {
                    color: "#464E5F"
                  }
                }}>
                <Box
                  sx={{
                    padding: '12px 20px',
                    backgroundColor: "#152540",
                    color: "#fff",
                    borderRadius: "4px",
                  }}  >2</Box>
                <Typography
                  sx={{

                    marginLeft: "9px",
                    fontFamily: 'Poppins',
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "text.disabled",
                  }}
                >{t("security")}</Typography>
              </Link>
            </ListItem>
            <ListItem sx={{
              padding: "0",
              margin: "0",
            }}>
              <Link
                to="/admin/3"
                component={NavLink}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: "23px",
                  textDecoration: "none",
                  "&.active": {
                    bgcolor: "background.navActive",
                    "div": {
                      bgcolor: "#152540",
                    },
                    ".MuiTypography-body1": {
                      color: "#152540"
                    }
                  },
                  "div": {
                    bgcolor: "#E5EAEE",
                  },

                }}>
                <Box
                  sx={{
                    padding: '12px 20px',
                    backgroundColor: "#152540",
                    color: "#fff",
                    borderRadius: "4px",
                  }}  >3</Box>
                <Typography
                  sx={{

                    marginLeft: "9px",
                    fontFamily: 'Poppins',
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "text.disabled",
                  }}
                >{t("settings")}</Typography>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            paddingTop: "83px"
          }}>
          <Routes>
            <Route path="/1" element={<UserEdit />} />
            <Route path="/2" element={<PasswordEdit />} />
            <Route path="/3" element={<SettingsControl />} />
          </Routes>
        </Box>
      </Paper>
    </>
  )
}
