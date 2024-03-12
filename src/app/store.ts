import {configureStore} from '@reduxjs/toolkit'
import menuReducer from "../features/menu/menuSlice.ts";
import dishReducer from "../features/dish/dishSlice.ts";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        dish: dishReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch