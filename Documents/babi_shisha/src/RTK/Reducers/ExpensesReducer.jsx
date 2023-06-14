import { createSlice } from "@reduxjs/toolkit";

import { SelectProjectThunk } from "../Thunk/SelectProjectThunk";
import { AllExpensesThunk } from "../Thunk/AllExpensesThunk";
import { ViewExpensesThunk } from "../Thunk/ViewExpensesThunk";
import { SelectProductThunk } from "../Thunk/SelectProductThunk";
import { UpdateExpensesThunk } from "../Thunk/UpdateExpensesThunk";
import { TableExpensesThunk } from "../Thunk/TableExpensesThunk";

let initState = {
    code: null,
    currentPage: 1,
    lastPage: 1,
    price_Er: null, desc_Er: null,
    expensesData: [],
    projectSelectData: [],
    productSelectData: [],
    tableDataPayment: [],
    tableDataExpenses: [],
    viewTableData: [],
    viewData: [],
    oneDesc: "",
    oneGeneral: "",
    onePrice: "",
    productError: null,
};

let ExpensesReducer = createSlice({
    name: "expenses",

    initialState: initState,
    reducers: {
        closeError: (state, action) => {
            state.productError = null;
            state.price_Er = null;
            state.desc_Er = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // =======AllExpensesThunk===========
            .addCase(AllExpensesThunk.pending, (state, action) => { })
            .addCase(AllExpensesThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.expensesData = action.payload?.data;
                state.currentPage = action.payload.meta.current_page;
                state.lastPage = action.payload.meta.last_page;
            })
            .addCase(AllExpensesThunk.rejected, (state, action) => { })
            // =======SelectProjectThunk===========
            .addCase(SelectProjectThunk.pending, (state, action) => { })
            .addCase(SelectProjectThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.projectSelectData = action.payload?.data;
            })
            .addCase(SelectProjectThunk.rejected, (state, action) => { })
            // =======SelectProductThunk===========
            .addCase(SelectProductThunk.pending, (state, action) => { })
            .addCase(SelectProductThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.productSelectData = action.payload?.data;
            })
            .addCase(SelectProductThunk.rejected, (state, action) => { })

            // // =======ViewExpensesThunk===========
            .addCase(ViewExpensesThunk.fulfilled, (state, action) => {
                state.viewData = action.payload?.data;
                state.viewTableData = action.payload?.data.project_expenses;
            })
            .addCase(ViewExpensesThunk.rejected, (state, action) => { })
            // // =======UpdateExpensesThunk===========
            .addCase(UpdateExpensesThunk.fulfilled, (state, action) => { })
            .addCase(UpdateExpensesThunk.rejected, (state, action) => {
                state.productError = action.payload?.data?.products;
                state.price_Er = action.payload?.data?.price;
                state.desc_Er = action.payload?.data?.description;
                // price_Er, desc_Er
            })
            // // =======UpdateExpensesThunk===========
            .addCase(TableExpensesThunk.fulfilled, (state, action) => {
                state.tableDataExpenses = action.payload.data

            })
        // .addCase(UpdateExpensesThunk.rejected, (state, action) => {
        //     state.productError = action.payload?.data?.products;
        //     state.price_Er = action.payload?.data?.price;
        //     state.desc_Er = action.payload?.data?.description;
        //     // price_Er, desc_Er
        // });
    },
});

export default ExpensesReducer.reducer;

export let { closeModal, closeError } = ExpensesReducer.actions;
