import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem("userData")) : null,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            return { ...state, user: action.payload };
        },
    },
});
export const {setUser} = profileSlice.actions
export default profileSlice.reducer;