import {createSlice} from '@reduxjs/toolkit';


interface MenuItem {
    imgPath: string,
    menuItemName: string
}

interface MenuState {
    menu: MenuItem[]
}

const initialState: MenuState = {
    menu: [
        { menuItemName:'Pizza', imgPath:'pizza.png' },
        { menuItemName:'Fruits', imgPath:'fruits.png' },
        { menuItemName:'Snacks', imgPath:'snacks.png' },
        { menuItemName:'Veggies', imgPath:'veggies.png' },
        { menuItemName:'Hotdog', imgPath:'hotdog.png' },
        { menuItemName:'Burger', imgPath:'burger-menu.png' },
        { menuItemName:'Drinks', imgPath:'coke.png' },
    ]
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {}
})

export default menuSlice.reducer;
