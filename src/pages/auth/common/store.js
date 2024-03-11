import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastOption } from "@/constant/data";

const initialUsers = () => {
  const item = window.localStorage.getItem("users");
  return item ? JSON.parse(item) : [];
};
// save users in local storage

const initialIsAuth = () => {
  const item = window.localStorage.getItem("isAuth");
  return item ? JSON.parse(item) : false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth(),
  },
  reducers: {
    handleRegister: (state, action) => {
      const { name, email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.users.push({
          name,
          email,
          password,
        });
        window.localStorage.setItem("users", JSON.stringify(state.users));
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },

    handleLogin: (state, action) => {
      state.isAuth = true;
      const _token = action.payload.access_token;
      const user = action.payload.user;
      // save in local storage
      window.localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      window.localStorage.setItem("_token", JSON.stringify(_token));
      window.localStorage.setItem("users", JSON.stringify(user));
      toast.success("Login Successful", toastOption);
    },
    handleLogout: (state, action) => {
      state.isAuth = action.payload;
      // remove isAuth from local storage
      window.localStorage.removeItem("isAuth");
      window.localStorage.removeItem("_token");
      window.localStorage.removeItem("users");
      toast.success("User logged out successfully", {
        position: "top-right",
      });
    },
  },
});

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
