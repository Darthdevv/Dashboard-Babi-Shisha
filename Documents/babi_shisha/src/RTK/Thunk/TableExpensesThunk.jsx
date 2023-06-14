
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

export let TableExpensesThunk = createAsyncThunk(
  "expenses/TableExpensesThunk",
  async (arg, ThunkApi) => {
    // console.log(arg)
    let { rejectWithValue } = ThunkApi;
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API}/project_expenses/expenses_only/${arg?.id}`,
        Api()
      );
      // console.log(res.data);

      return res.data;
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);
