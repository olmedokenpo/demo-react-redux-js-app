import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [], //lista de usuarios
        f2Pressed: false, //Estado para la tecla f2
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload
        },
        setF2Pressed:(state,action)=>{
            state.f2Pressed=action.payload //actualiza si F2 esta presionado o no
        },
    },
})

export const { setUserList, setF2Pressed } = userSlice.actions

export default userSlice.reducer

export const fetchAllUsers = () => (dispatch) => {

    axios
        .get('https://reqres.in/api/users?per_page=6')
        .then((response) => {

            dispatch(setUserList(response.data.data))

        })
        .catch((error) => console.log(error))

}