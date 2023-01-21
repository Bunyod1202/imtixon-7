import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Paper, } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/homePage/HomePage";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import "./assets/style/main.css"
import { lang } from "./language/lang";
import { BooksPage } from "./page/booksPage/BooksPage";
import { RegisterPage } from "./page/registerPage/RegisterPage";
import { LoginPage } from "./page/loginPage/LoginPage";
import { AfterPage } from "./page/afterPage/AfterPage";
import { BookPage } from "./page/bookPage/BookPage";
import { AddBookPage } from "./page/addBookPage/AddBookPage";
import { AddAfterPage } from "./page/addAfterPage/AddAfterPage";
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
          addBook:"#1B1B1B"
        },
      }),
      ...(mode === 'light' && {
        background: {
          default: "#fff",
          paper: "#191919",
          form: "#F5F5F5",
          card_collor: "#F5F5F5",
          addBook:"#f3f3f3ed"

        },
      }),
      text: {
        ...(mode === 'light'
          ? {
            primary: "#0D0D0D",
            secondary: "#000",
            card_title: "#000",
            disabled: "#B6B6B6",
            btn: "#FFFFFF",

          }
          : {
            primary: '#FFFFFF',
            secondary: "#000",
            card_title: "#C9AC8C",
            disabled: "#5E5E5E",
            btn: "#000000",

          }),
      },
      button: {
        ...(mode === 'light'
          ? {
            primary: "#152540",
          }
          : {
            primary: '#FFFFFF',
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

  const darkModeTheme = createTheme(getDesignTokens('light'),);
  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "uz",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: lang.en },
      uz: { translation: lang.uz },
      ru: { translation: lang.ru }
    }
  });
  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <Paper
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            boxShadow: "0",

          }} >
            <Routes>
              <Route path='/' element={<Navigate to="/home/1" replace={true} />} />
              <Route path="/home/*" element={<HomePage />} />
              <Route path="/books/*" element={<BooksPage />} />
              <Route path="/after" element={<AfterPage/>} />
              <Route path="/book" element={<BookPage/>} />
              <Route path="/add-book" element={<AddBookPage/>} />
              <Route path="/add-after" element={<AddAfterPage/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
