import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api } from "../Api";
export let UpdateTablePaymentThunk = createAsyncThunk(
    "payment/UpdateTablePaymentThunk",
    async (arg, ThunkApi) => {
        // console.log(arg);

        let { rejectWithValue } = ThunkApi;
        try {
            let res = await axios.put(
                `${process.env.REACT_APP_API}/project_payments/${arg.project_id}`,
                arg,
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
