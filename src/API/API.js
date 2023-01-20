import axios from "axios"

const BASE_URL = "http://localhost:5000"
export const API_IMG_URL = ""
export const api = {
  GenreGet: () =>
    axios.get(BASE_URL + "/genre"),

  // UserEditApi: (data, token) =>
  //   axios.put(BASE_URL + "/user/put", data, {
  //     headers: {
  //       'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NzM5NzkxMTF9.alk2mrYshgDA_UFXVI2ACLKH4Ro57Fw-nXGhiyI2xBs"
  //     }
  //   }),
  // AddFeedback: (data, token) =>
  //   axios.post(BASE_URL + "/feedback/post", data, {
  //     headers: {
  //       'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NzM5NzkxMTF9.alk2mrYshgDA_UFXVI2ACLKH4Ro57Fw-nXGhiyI2xBs"
  //     }
  //   }),


}

