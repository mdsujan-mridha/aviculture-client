import axios from "axios"
import {
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "../constant/userConstant"



// login user
export const login = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }

        }
        const { data } = await axios.post(`http://localhost:5000/api/v1/login`, { email, password }, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (error) {

        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })

    }

}

export const register = (userData) => async (dispatch) => {

    try {
        dispatch({ type: REGISTER_REQUEST })
        const config = {
            headers: {
                "Content-type": "application/json"
            }

        }
        const { data } = await axios.post(`http://localhost:5000/api/v1/register`, userData, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.user
        })
    } catch (error) {

        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        })

    }

}



// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}