import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginUser, logoutUser } from "../../../services/api"
import setAuthToken from "../../../services/setAuthToken"

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
}

// LOGIN ASYNC THUNK
export const login = createAsyncThunk("action/loginUser", async (data, thunkAPI) => {
  try {
    const res = await loginUser(data)
    const { user, token } = res?.data
    setAuthToken(token)
    return { user, token }
  } catch (error) {
    console.log(error)
  }
})

// LOGOUT ASYNC THUNK
export const logout = createAsyncThunk("action/logoutUser", async (data, thunkAPI) => {
  try {
    await logoutUser()
    setAuthToken(null)
    return
  } catch (error) {
    console.log(error)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logout.pending, state => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = null
        state.token = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.user = action?.payload?.user
        state.token = action?.payload?.token
        state.message = action?.payload
      })
      .addCase(login.pending, state => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action?.payload?.user
        state.token = action?.payload?.token
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.user = null
        state.token = null
        state.message = action?.payload
      })
  },
})

export default authSlice.reducer
