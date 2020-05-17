import * as actionTypes from './actionTypes'
import axios from 'axios'


export const fetchDataStart = () => {
    return dispatch => {
        dispatch(fetchDataInit())
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=Riga&appid=89368938e6d0b7f841e535c2e58fa33d")
        .then(response => {
           dispatch(fetchDataSuccess(response))
        })
        .catch(error => {
            dispatch(fetchDataFailure(error.message))
        })
    }
}

export const fetchDataInit = () => {
    return {
        type: actionTypes.FETCH_WEATHER_REQUEST
    }
}

export const fetchDataSuccess = (response) => {
    const {data} = response
    return {
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        payload: {
            data: data
        }
    }
}

export const fetchDataFailure = (errorMessage) => {
    return {
        type: actionTypes.FETCH_WEATHER_FAILURE,
        payload: {
            error: errorMessage
        }
    }
}