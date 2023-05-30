import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice ({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action){
            //Asumption:
            // action.payload === { name: 'ab', cost: 140}

            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar( state, action ) {
            //Asumption
            // action.payload === The id of car we want to remove

            const updated= state.data.filter(()=> {
                return carSlice.id !== action.payload
            })
            state.data = updated

        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;