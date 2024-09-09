import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountDTO } from '../../interfaces-submodule/interfaces/dto/account/iaccount.interface';

export interface IAuthState {
    user: null | IAccountDTO;
}

const initialState: IAuthState = {
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IAccountDTO>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
