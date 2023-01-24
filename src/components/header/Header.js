import React, { useEffect, useState } from 'react'
import { Avatar, Box, IconButton, Link, List, ListItem, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { api, BASE_URL } from '../../API/API';
import { useDispatch, useSelector } from 'react-redux';
import { TokenRegisterRemuve } from '../../redux/token/tokenActions';

export const Header = () => {
  const token_id = useSelector((state) => state.token.token)
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState({})

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
let userName = user.first_name + user.last_name
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const userGet = async (token_id) => {
    const cardCasts = await api.UserGet(token_id)

    setUser(cardCasts.data)
  }
  useEffect(() => {
    userGet(token_id)
  }, [token_id])

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
                    to="/home"
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
                    <Avatar alt={String(userName)} src={user ? BASE_URL + "/" + user.image : ""} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' , }}
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
                  <MenuItem sx={{
               
                    
                  }}>
                    <Link component={NavLink} to="/admin/1" color={"#D1B89D"} textAlign="center">Profile</Link>
                  </MenuItem>
                  <MenuItem sx={{
                   
                  }} >
                    <Link component={NavLink} to="/add-after" color={"#D1B89D"} textAlign="center">Add author</Link>
                  </MenuItem>
                  <MenuItem sx={{
                 
                  }} >
                    <Link component={NavLink} to="/add-book" color={"#D1B89D"} textAlign="center">Add book</Link>
                  </MenuItem>
                  <MenuItem sx={{
                  
                  }} >
                    <Link component={NavLink} to="/login" color={"#D1B89D"} onClick={() => {
                      dispatch(TokenRegisterRemuve(""));
                      localStorage.removeItem('token')
                    }} textAlign="center">Log out</Link>
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
