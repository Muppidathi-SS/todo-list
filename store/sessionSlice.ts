import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStoredSession } from "@/utils/session";

export interface SessionState {
  id: string;
  name: string;
  email: string;
  token?: string;
}

const getInitialSession = (): SessionState => {
  const session = getStoredSession();
  if (session) {
    return {
      id: session.id,
      name: session.name,
      email: session.email,
      token: session.token,
    };
  }
  return {
    id: "",
    name: "",
    email: "",
    token: "",
  };
};

const initialState: SessionState = getInitialSession();

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
    clearSession: () => ({
      id: "",
      name: "",
      email: "",
      token: "",
    }),
  },
});

export const { setSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
