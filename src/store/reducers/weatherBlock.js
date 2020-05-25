import * as actionTypes from '../actions/actionTypes'

const initialState = {
    data: null,
    loading: false, 
    error: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_WEATHER_REQUEST: {
            return {
                ...state, 
                loading: true,
                error: null
            }
        }
        case actionTypes.FETCH_WEATHER_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                error: null
            }
        }
        case actionTypes.FETCH_WEATHER_FAILURE: {
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload.error
            }
        }
        default: return {...state}
    }
}

export default reducer