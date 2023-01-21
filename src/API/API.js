import axios from "axios"

const BASE_URL = "http://localhost:5000"
export const API_IMG_URL = ""

export const api = {

  GenreGet: () =>
    axios.get(BASE_URL + "/genre"),

  LoginApi: (data) =>
    axios.post(BASE_URL + "/user/login", data),

  AddBookApi: (data) =>
    axios.post(BASE_URL + "/book", data),

  AddAfterApi: (data) =>
    axios.post(BASE_URL + "/author", data,{
          headers: {
         'Authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkJ1bnlvZCIsImxhc3RfbmFtZSI6IkFnemFteG9qYXlldiIsInBob25lIjoiOTAwOTkyOTI2IiwiZW1haWwiOiJidW55b2RidW55b2QwMzVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDUkRzdIa21TV3JSYXdxM3p2R2FkNzlULlVnd2VkYmtUWmhTcUpoY0x6aTEzeElLUmc3bENQc0siLCJpYXQiOjE2NzQyMTUwMTZ9.eu8t3j_P2W3M2nCtuUUJtfit8yToZjKY-ZAI-V0hyaQ"
          }
        }),

  // UserEditApi: (data, token) =>
  //   axios.put(BASE_URL + "/user/put", data, {
  //     headers: {
  //       'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NzM5NzkxMTF9.alk2mrYshgDA_UFXVI2ACLKH4Ro57Fw-nXGhiyI2xBs"
  //     }
  //   }),

}

