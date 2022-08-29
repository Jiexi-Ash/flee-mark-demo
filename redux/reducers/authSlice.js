import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "next-auth/react";
import axios from "axios";

const initialState = {
  user: {
    name: "",
    surname: "",
    email: "",
    role: "",
  },
  authenticated: false,
  loading: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ userData, router }, { dispatch }) => {
    console.log("userData", userData);
    try {
      const user = await axios.post("/api/auth/register", userData);

      await signIn("credentials", {
        email: user.data.email,
        password: userData.password,
        redirect: false,
      });
      router.push("/clothing/browse");
      return {
        name: user.data.name,
        surname: user.data.surname,
        email: user.data.email,
        role: user.data.role,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ userData, router }, { dispatch }) => {
    try {
      const results = await signIn("credentials", {
        email: userData.email,
        password: userData.password,
        redirect: false,
      });

      if (results.error) {
        console.log(results.error);
        throw error;
      }
      const user = await axios.get("/api/users/user");
      router.push("/clothing/browse");

      return {
        name: user.data.name,
        surname: user.data.surname,
        email: user.data.email,
        role: user.data.role,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      state.user = action.payload;
      state.loading = false;
      state.authenticated = true;
    },
    [registerUser.rejected]: (state) => {
      state.loading = false;
    },
    [signInUser.pending]: (state) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      state.user = action.payload;
      state.loading = false;
      state.authenticated = true;
    },
    [signInUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default authSlice.reducer;
