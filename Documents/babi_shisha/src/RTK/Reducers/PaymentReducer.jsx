import { createSlice } from "@reduxjs/toolkit";

import { AllPaymentThunk } from "../Thunk/AllPaymentThunk";
import { AddPaymentThunk } from "../Thunk/AddPaymentThunk";
import { SelectProjectThunk } from "../Thunk/SelectProjectThunk";
import { TablePaymentThunk } from "../Thunk/TablePaymentThunk";
import { UpdateTablePaymentThunk } from "../Thunk/UpdateTablePaymentThunk";
import { DeleteTablePaymentThunk } from "../Thunk/DeleteTablePaymentThunk";
import { ViewPaymentThunk } from "../Thunk/ViewPaymentThunk";
import { OnePaymentTargetEdit } from "../Thunk/OnePaymentTargetEdit";

let initState = {
    code: null,
    currentPage: 1,
    lastPage: 1,
    paymentData: [],
    projectSelectData: [],
    tableDataPayment: [],
    viewTableData: [],
    viewData: [],
    oneDesc: "",
    oneGeneral: "",
    onePrice: "",
    onePaymentData: null,
    descError: null,
    priceError: null,
};

let PaymentReducer = createSlice({
    name: "payment",

    initialState: initState,
    reducers: {
        closeError: (state, action) => {
            state.priceError = null;
            state.descError = null;
            state.payer_Er = null;
            state.receiver_Er = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // =======AllPaymentThunk===========
            .addCase(AllPaymentThunk.pending, (state, action) => { })
            .addCase(AllPaymentThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.paymentData = action.payload?.data;
                state.currentPage = action.payload.meta.current_page;
                state.lastPage = action.payload.meta.last_page;
            })
            .addCase(AllPaymentThunk.rejected, (state, action) => { })
            // =======SelectProjectThunk===========
            .addCase(SelectProjectThunk.pending, (state, action) => { })
            .addCase(SelectProjectThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.projectSelectData = action.payload?.data;
            })
            .addCase(SelectProjectThunk.rejected, (state, action) => { })

            // // =======ViewPaymentThunk===========
            .addCase(ViewPaymentThunk.fulfilled, (state, action) => {
                state.viewData = action.payload?.data;
                state.viewTableData = action.payload?.data.project_payments;
            })
            .addCase(ViewPaymentThunk.rejected, (state, action) => { })
            // // =======AddAdsThunk===========
            .addCase(AddPaymentThunk.fulfilled, (state, action) => { })
            .addCase(AddPaymentThunk.rejected, (state, action) => {
                state.priceError = action.payload?.data?.price;
                state.descError = action.payload?.data?.description;
                state.payer_Er = action.payload?.data?.money_payer_name;
                state.receiver_Er = action.payload?.data?.money_receiver_name;
            })
            // // =======UpdateTablePaymentThunk===========
            .addCase(UpdateTablePaymentThunk.fulfilled, (state, action) => { })
            .addCase(UpdateTablePaymentThunk.rejected, (state, action) => {
                state.priceError = action.payload?.data?.price;
                state.descError = action.payload?.data?.description;
                state.payer_Er = action.payload?.data?.money_payer_name;
                state.receiver_Er = action.payload?.data?.money_receiver_name;
            })
            // // =======TablePaymentThunk===========
            .addCase(TablePaymentThunk.fulfilled, (state, action) => {
                state.tableDataPayment = action.payload?.data;
            })
            .addCase(OnePaymentTargetEdit.fulfilled, (state, action) => {
                state.onePaymentData = action.payload?.data;
            })
            .addCase(TablePaymentThunk.rejected, (state, action) => {
                // state.descError = action.payload?.data?.reason;
                // state.priceError = action.payload?.data?.price;
            })

            // // =======DeleteUserThunk===========
            .addCase(DeleteTablePaymentThunk.fulfilled, (state, action) => { })
            .addCase(DeleteTablePaymentThunk.rejected, (state, action) => {
                // console.log(action.payload);
            });
    },
});

export default PaymentReducer.reducer;

export let { closeModal, closeError } = PaymentReducer.actions;
