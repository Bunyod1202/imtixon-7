import axios from "axios"



export const BASE_URL = "http://localhost:5000"
export const api = {

  GenreGet: () =>
    axios.get(BASE_URL + "/genre"),

  LoginApi: (data) =>
    axios.post(BASE_URL + "/user/login", data),

  RegisterApi: (data) =>
    axios.post(BASE_URL + "/user/register", data),

  AddBookApi: (data, token) =>
    axios.post(BASE_URL + "/book", data, {
      headers: {
        'Authorization': token
      }
    }),

  SearchAferApi: (name) =>
    axios.get(BASE_URL + `/author/search?author=${name}`),

  SearchBookApi: (name) =>
    axios.get(BASE_URL + `/book/search?book=${name}`),

  UserGet: (token) =>
    axios.get(BASE_URL + "/user/me", {
      headers: {
        'Authorization': token
      }
    }),

  BookGanreGet: (id, token) =>
    axios.get(BASE_URL + `/book/genreId/${id}`, {
      headers: {
        'Authorization': token
      }
    }),

  AfterGanreGet: (id, token) =>
    axios.get(BASE_URL + `/author/genreId/${id}`, {
      headers: {
        'Authorization': token
      }
    }),

  AfterIdGet: (id, token) =>
    axios.get(BASE_URL + `/author/authorId/${id}`, {
      headers: {
        'Authorization': token
      }
    }),

  BookIdGet: (id, token) =>
    axios.get(BASE_URL + `/book/bookId/${id}`, {
      headers: {
        'Authorization': token
      }
    }),

  UserEditApi: (data, token) =>
    axios.put(BASE_URL + "/user/account", data, {
      headers: {
        'Authorization': token
      }
    }),

  AfterBookApi: (id, token) =>
    axios.get(BASE_URL + `/author/books/${id}`, {
      headers: {
        'Authorization': token
      }
    }),

  PasswordEditApi: (data, token) =>
    axios.put(BASE_URL + "/user/security", data, {
      headers: {
        'Authorization': token
      }
    }),

  AddAfterApi: (data, token) =>
    axios.post(BASE_URL + "/author", data, {
      headers: {
        'Authorization': token
      }
    }),

}

