
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";
export let UpdateTableExpensesThunk = createAsyncThunk(
  "expenses/UpdateTableExpensesThunk",
  async (arg, ThunkApi) => {
    // console.log(arg);

    let { rejectWithValue } = ThunkApi;
    try {
      let res = await axios.put(
        `${process.env.REACT_APP_API}/project_expenses/${arg.id}`,
        {
          price: arg?.price,
          description: arg.desc,
        },
        Api()
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
