import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// const  initialState = [];

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR:'error',
    LOADING:'loading',
})




const productSlice = createSlice({
    name:'cart',
    initialState: {
        data:[],
        status: STATUSES.IDLE
    },
    reducers:{
        //  You cannot asyn call here as reducers only supports sync calls
        // setProducts(state,action) {
        //     state.data = action.payload
        // },
        // setStatus(state,action){
        //     state.status = action.payload
        // }
    },
    extraReducers:(builder)=>{
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
        state.status =  STATUSES.LOADING;
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.data =  action.payload;
        state.status = STATUSES.IDLE;
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.status = STATUSES.ERROR;
    })
    }
})

export const {setProducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


// ! Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
})





// Thunks
// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//        try {
//         const response = await fetch("https://fakestoreapi.com/products");
//          const data = await response.json();
//          dispatch(setProducts(data))
//          dispatch(setStatus(STATUSES.IDLE))
//        } catch (error) {
//          console.log(error);
//          dispatch(setStatus(STATUSES.ERROR))
//        }
//     }
// }


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// // Define your statuses using Object.freeze
// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

// // Create an async thunk to fetch products
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     return data;
// });

// // Create a slice to manage state related to products
// const productSlice = createSlice({
//     name: 'products',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE
//     },
//     reducers: {
//         // Add reducers if needed for synchronous updates
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchProducts.rejected, (state) => {
//                 state.status = STATUSES.ERROR;
//             });
//     }
// });

// export default productSlice.reducer;
