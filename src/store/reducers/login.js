import * as actionTypes from '../actions/actionTypes'

const initialState = {
    tokenId: null,
    userId: null,
    loading: false, 
    error: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN_REQUEST: {
            return {
                ...state, 
                loading: true,
                error: null
            }
        }
        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                tokenId: action.payload.token,
                userId: action.payload.user,
                loading: false,
                error: null
            }
        }
        case actionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                tokenId: null,
                userId: null,
                loading: false,
                error: action.payload.error
            }
        }
        default: return {...state}
    }
}

export default reducer