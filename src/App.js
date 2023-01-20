import { ThemeProvider } from "@emotion/react";
import {  createTheme, CssBaseline, Paper, } from "@mui/material";
import { Container } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./page/homePage/HomePage";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import "./assets/style/main.css"
import { lang } from "./language/lang";
import { BooksPage } from "./page/booksPage/BooksPage";
function App() {

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'dark' && {
          main: "#fff",
        }),
        ...(mode === 'light' && {
          main: "#000",
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: "#191919",
          paper: "#fff",
          form: "#404040",
          card_collor: "#1E1E1E",
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: "#fff",
          paper: "#191919",
          form: "#F5F5F5",
          card_collor: "#F5F5F5",
         
        },
      }),
      
      text: {
        ...(mode === 'light'
          ? {
              primary: "#0D0D0D",
              secondary:"#000",
              card_title:"#000",
              disabled:"#B6B6B6",
            }
          : {
              primary: '#FFFFFF',
              secondary: "#000",
              card_title: "#C9AC8C",
              disabled: "#5E5E5E",
            }),
      },
       link: {
        ...(mode === 'light'
          ? {
            primary: "#0d0d0d99",
            }
          : {
            primary: '#ffffff99',
            }),
      },
    },
  });
  
  // const theme = createTheme({
  //   palette: {
  //     mode: "light",
  //   }
  // })
  const darkModeTheme = createTheme(getDesignTokens('dark'));
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang")||"uz",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation:  lang.en},
      uz: { translation:  lang.uz},
      ru: { translation:  lang.ru}
    }
  });
  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
        <Paper   sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
          boxShadow:"0",
       
      }} >
          <Container maxWidth="xl" sx={{width:"1310px"}}>
          <Header />
            <Routes>
            <Route path='/' element={<Navigate to="/home/1" replace={true} />} />
            <Route path="/home/*" element={<HomePage />} />
            <Route path="/books/*" element={<BooksPage />} />
            </Routes>
            </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
