import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

interface SearchFormState {
    searchTerm: string;
}

const initialState: SearchFormState = {
    searchTerm: ""
}

const searchFormSlice = createSlice({
    name: 'searchForm',
    initialState,
    reducers: {
        setSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload
        }
    }
});

export const { setSearchTerm } = searchFormSlice.actions;
export const selectSearchTerm = (state: RootState) => state.searchForm.searchTerm;
export default searchFormSlice.reducer;