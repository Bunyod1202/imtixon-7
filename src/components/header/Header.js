import React, { useState } from 'react'
import { Avatar, Box, IconButton, Link, List, ListItem, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginBottom: "27px",
          bgcolor: 'background.paper !importend',
        }}>
        <Box >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: "400",
                fontSize: "25px",
                lineHeight: "38px",
                color: "#C9AC8C",
                textDecoration: "none",

              }}>
              {t("art")}
            </Typography>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}>
              <List
                sx={{
                  display: "flex"
                }}>
                <ListItem
                  sx={{
                    width: "150px"
                  }}>
                  <Link
                    to="/home/1"
                    component={NavLink}
                    sx={{
                      textAlign: 'center',
                      textDecoration: "none",
                      color: "text.disabled",
                      fontFamily: 'Poppins',
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "144.4%",
                      width: "100px",
                      '&.active': {
                        color: 'text.primary',
                      }
                    }}>
                    {t("home_page")}
                  </Link>
                </ListItem>
                <ListItem   >
                  <Link
                    to="/books/1"
                    component={NavLink}
                    sx={{
                      textAlign: 'center',
                      textDecoration: "none",
                      color: "text.disabled",
                      fontFamily: 'Poppins',
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "144.4%",
                      '&.active': {
                        color: 'text.primary',
                      }
                    }}>
                    {t("books")}
                  </Link>
                </ListItem>
              </List>
              <Box
                sx={{
                  flexGrow: 0
                }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem >
                    <Typography textAlign="center">sss</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    </>
  )
}
