import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
  id: string;
  name: string;
  email: string;
  token?: string;
}

const initialState: SessionState = {
  id: "",
  name: "",
  email: "",
  token: "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token || "";
    },
    clearSession: () => initialState,
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
