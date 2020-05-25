import * as actionTypes from "./actionTypes"
import axios from "axios"

export const fetchDataStart = () => {
  return (dispatch) => {
    dispatch(fetchDataInit())
    // get initial weather location
    // and throw it into
    axios
      .get(`https://weather-react-56095.firebaseio.com/initialWeather.json`)
      .then((response) => {
        return dispatch(fetchCityWeather(response.data.city))
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message))
      })
  }
}
const fetchCityWeather = (city) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89368938e6d0b7f841e535c2e58fa33d`
      )
      .then((res) => {
        dispatch(fetchDataSuccess(res))
      })
  }
}

export const fetchDataInit = () => {
  return {
    type: actionTypes.FETCH_WEATHER_REQUEST,
  }
}

export const fetchDataSuccess = (response) => {
  const { data } = response
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    payload: {
      data: data,
    },
  }
}

export const fetchDataFailure = (errorMessage) => {
  return {
    type: actionTypes.FETCH_WEATHER_FAILURE,
    payload: {
      error: errorMessage,
    },
  }
}
