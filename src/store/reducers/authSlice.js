// types
import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
  email: 'pradeep.srivastav@rsystems.com',
  password: '123456',
  role: 'admin',
  token: "" //22222
};

// ==============================|| SLICE - MENU ||============================== //

const authSlice = createSlice({
  name: 'authmui',
  initialState: initialLoginState,
  reducers: {
    loginAccount(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload?.token || ""; 
    },
    logoutAccount(state, action) {
      state.email = '';
      state.password = '';
      state.token= '';
    }
  }
});

export default authSlice.reducer;
export const { loginAccount, logoutAccount } = authSlice.actions;
