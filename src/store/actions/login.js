import axios from "axios"
import * as actionTypes from "./actionTypes"

export const signUp = (email, password) => {
    
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    }

    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9BlPBxKXGS8vmYGyAxA-o0IqlmrIGYxk',authData)
        .then(response=>{
            console.log(response)
        })

    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            tokenId: 'work',
            userId: 'work' 
        }
    }
}