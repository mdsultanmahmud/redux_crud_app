import { configureStore } from "@reduxjs/toolkit";
import myServiceSlice from "../pages/myServiceSlice";

const store = configureStore({
    reducer: {
        products: myServiceSlice
    }
})

export default store