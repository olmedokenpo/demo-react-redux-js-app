import { configureStore } from '@reduxjs/toolkit'
//importo el reducer que esta en la carpeta de slices
import users from './slices/users'

export default configureStore({
    reducer: {
        users
    }
})

