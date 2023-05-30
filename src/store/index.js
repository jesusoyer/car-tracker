import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm  } from "./slice/carSlice";
import{ formReducer,changeName,changeCost} from './slice/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
}); 
   
export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};

