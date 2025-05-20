import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: {},
        leaderboard: [],
    },
    reducers: {
        // register request
        registerRequest(state, action){
            state.loading = true;
            state.isAuthenticated = false;
            state.user = {};
        },
        // register success
        registerSuccess(state, action){
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        // register Failed
        registerFailed(state, action){
            state.loading = false;
            state.isAuthenticated = false;
            state.user = {};
        },

        logoutSuccess (state,action){
            state.isAuthenticated = false;
            state.user = {};
        },
        logoutFailed(state, action){
            state.loading = false;
            state.isAuthenticated = state.isAuthenticated;
            state.user = state.user;
        },
        clearAllErrors (state, action){
            state.isAuthenticated = state.isAuthenticated;
            state.user = state.user;
            state.leaderboard = state.leaderboard;
            state.loading = false;

        },
    },
});

//----- register
export const register = (data) => async(dispatch) =>{
    dispatch(userSlice.actions.registerRequest());
    try {
        const response = await axios.post("http://localhost:8000/api/v1/user/register", data, {withCredentials: true,headers:{"Content-Type": "multiPart/form-data"}});
        dispatch(userSlice.actions.registerSuccess());
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.registerFailed());
        toast.error(error.response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    }
};

export const logout = ()=> async(dispatch)=> {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/user/logout", {withCredentials: true});
        dispatch(userSlice.actions.logoutSuccess());
        toast.success(response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    } catch (error) {
        dispatch(userSlice.actions.logoutFailed());
        toast.error(error.response.data.message);
        dispatch(userSlice.actions.clearAllErrors());
    }
}

export default userSlice.reducer;