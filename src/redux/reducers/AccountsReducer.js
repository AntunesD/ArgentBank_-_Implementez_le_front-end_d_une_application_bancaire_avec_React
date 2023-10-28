import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accounts",
  initialState: [
    {
      name: "Argent Bank Checking (x8349)",
      balance: "$2,082.79",
      type: "Available Balance"
    },
    {
      name: "Argent Bank Savings (x6712)",
      balance: "$10,928.42",
      type: "Available Balance"
    },
    {
      name: "Argent Bank Credit Card (x8349)",
      balance: "$184.30",
      type: "Current Balance"
    },
  ],
  reducers: {
    //là pourquoi ne pas mettre des fetch pour modifier les valeurs en temps réél
  },
});

export default accountSlice.reducer;
