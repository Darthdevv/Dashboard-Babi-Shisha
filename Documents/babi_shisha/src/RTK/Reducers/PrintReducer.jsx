import { createSlice } from "@reduxjs/toolkit";
import { PrintThunk } from "../Thunk/PrintThunk";
import { PrintPaymentThunk } from "../Thunk/PrintPaymentThunk";



let initState = {
  code: null,

  printData: [],


};

let PrintReducer = createSlice({
  name: "print",

  initialState: initState,
  reducers: {
    DataView: (state, action) => {
      state.printData = []
    },


  },
  extraReducers: (builder) => {
    builder
      // =======PrintThunk===========
      .addCase(PrintThunk.pending, (state, action) => { })
      .addCase(PrintThunk.fulfilled, (state, action) => {
        state.printData = action.payload?.data;

      })
      // =======PrintPaymentThunk===========
      .addCase(PrintPaymentThunk.pending, (state, action) => { })
      .addCase(PrintPaymentThunk.fulfilled, (state, action) => {
        state.printData = action.payload?.data;
        console.log(action.payload?.data)

      })
      .addCase(PrintThunk.rejected, (state, action) => { })




  },
});

export default PrintReducer.reducer;

export let { DataView } = PrintReducer.actions;
