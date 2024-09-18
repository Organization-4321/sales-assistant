import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountDTO } from '../../interfaces-submodule/interfaces/dto/account/iaccount.interface';
import AuthTokensService from '../../services/AuthTokensService';

export interface ICurrentUserSliceState {
    user: null | IAccountDTO;
}

const initialState: ICurrentUserSliceState = {
    user: null,
};

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IAccountDTO>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            AuthTokensService.clearTokens();
        },
    },
});

export const { setUser, clearUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
