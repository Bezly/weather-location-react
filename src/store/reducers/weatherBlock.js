import * as actionTypes from '../actions/actionTypes'

const initialState = {
    data: null,
    loading: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_WEATHER_START: {
            return {
                ...state, 
                loading: true
            }
        }
        default: return state
    }
}

export default reducer