import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";

export let DeleteExpensesThunk = createAsyncThunk(
    "categories/DeleteExpensesThunk",
    async (arg, ThunkApi) => {
        // console.log(arg);
        let { rejectWithValue } = ThunkApi;
        try {
            let res = await axios.delete(
                `${process.env.REACT_APP_API}/project_expenses/${arg?.id}`,
                Api()
            );
            return res.data;
        } catch (error) {
            // console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
