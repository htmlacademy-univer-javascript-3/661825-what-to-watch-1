import {UserState} from '../../types/store';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AuthorizationStatus} from '../../types/auth-status';
import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {dropToken, saveToken} from '../../services/token';


const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logoutAction.fulfilled, (state) => {
        dropToken();
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        saveToken(action.payload.token);
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
