

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

export let CompletedProjectStatusThunk = createAsyncThunk(
  "project/CompletedProjectStatusThunk",
  async (arg, ThunkApi) => {
    // console.log(arg);
    let { rejectWithValue } = ThunkApi;
    try {
      let res = await axios.patch(
        `${process.env.REACT_APP_API}/projects/update_project_changed/${arg?.id}`,
        {
          status: arg?.status,
        },

        Api()
      );
      // console.log(res.data);

      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
