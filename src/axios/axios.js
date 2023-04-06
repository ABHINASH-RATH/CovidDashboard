import axios from 'axios'

// get world covid data
const worldRequest = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': 'c8208a25cbmshad1ebaef0e01d95p1f67c5jsn18e7ec37ebd2',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com',
  },
}

export function getWorldData() {
  return axios
    .request(worldRequest)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.error(error)
      return error
    })
}

const indiaOptions = {
  method: 'GET',
  url: 'https://corona-virus-world-and-india-data.p.rapidapi.com/api_india',
  headers: {
    'X-RapidAPI-Key': '6166bf669cmshb1288aedf96e2cbp1b0d72jsn8140e6d20950',
    'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com',
  },
}

export function getIndiaData() {
  return axios
    .request(indiaOptions)
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.error(error)
    })
}