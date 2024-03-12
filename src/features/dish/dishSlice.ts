import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Dish {
    name: string,
    imgPath: string,
    price: number,
    rating: number,
    category: string,
}

export interface ICartItem extends Dish {
    quantity: number,
}

export interface Trend extends Dish {
    trend: string,
    calories: number,
    persons: number
}

interface DishState {
    dishes: Dish[]
    cart: ICartItem[]
    trends: Trend[]
}

const initialState: DishState = {
    dishes: [
        { name: 'Spaghetti', imgPath:'spaghetti.png' , price: 7.29, rating: 3, category:'Snacks' },
        { name: 'Vegetable Pizza', imgPath:'vegetable-pizza.png' , price: 5.49, rating: 4, category: 'Pizza' },
        { name: 'Mushroom Pizza', imgPath:'mushroom-pizza-1.png' , price: 7.49, rating: 4, category: 'Pizza' },
        { name: 'Sweets', imgPath:'sweets.png' , price: 6.49, rating: 4, category: 'Snacks' },
        { name: 'Sausage Pizza', imgPath:'sausage-pizza.png' , price: 7.49, rating: 4, category: 'Pizza' },
        { name: 'Cheese Pizza', imgPath:'cheese-pizza.png' , price: 7.49, rating: 4, category: 'Pizza' },
    ],
    cart:[],
    trends:[
        {name: 'Italian Salad', imgPath: 'trending-img-1.png', price: 7.49, rating: 4, category: "", trend:" Top of the week", calories:100, persons: 4},
        {name: 'Vegetable Pizza', imgPath: 'vegetable-pizza.png', price: 7.49, rating: 4, category: "", trend:"Top of the day", calories:50, persons: 4},
        {name: 'Dark Chocolate', imgPath: 'dark-chocolate.png', price: 7.49, rating: 4, category: "", trend:" Top of the week", calories:90, persons: 3},
        {name: 'Shawarma', imgPath: 'sawarma.png', price: 7.49, rating: 4, category: "", trend:"Top of the day", calories:50, persons: 5},
        {name: 'Ice Cream', imgPath: 'ice-cream.png', price: 7.49, rating: 4, category: "", trend:" Top of the week", calories:50, persons: 5},
        {name: 'Indian Salad', imgPath: 'indian-salad.png', price: 7.49, rating: 4, category: "", trend:" Top of the month", calories:50, persons: 5},
    ]
}

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers:{
        addToCart(state, dish: PayloadAction<Dish>) {
            const idx = state.cart.findIndex(d=>d.name===dish.payload.name);
            if(idx!==-1) {
                state.cart[idx].quantity++;
            }
            else {
                state.cart.push({...dish.payload, quantity: 1});
            }
        },
        deleteFromCart(state, cartItem: PayloadAction<ICartItem>) {
            const idx = state.cart.findIndex(d=>d.name===cartItem.payload.name);
            if(idx!==-1) {
                state.cart.splice(idx, 1);
            }
        }
    }
});

export const { addToCart, deleteFromCart } = dishSlice.actions;
export default dishSlice.reducer;