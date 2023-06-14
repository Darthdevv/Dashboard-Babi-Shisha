import { createSlice } from "@reduxjs/toolkit";

import { SelectProductThunk } from "../Thunk/SelectProductThunk";
import { AllProjectThunk } from "../Thunk/AllProjectThunk";
import { ViewProjectThunk } from "../Thunk/ViewProjectThunk";
import { DeleteProjectThunk } from "../Thunk/DeleteProjectThunk";
import { UpdateProjectThunk } from "../Thunk/UpdateProjectThunk";
import { OneProjectThunk } from "../Thunk/OneProjectThunk";
import { StoreProjectThunk } from "../Thunk/StoreProjectThunk";

let initState = {
    code: null,
    currentPage: 1,
    lastPage: 1,
    projectData: [],
    oneProjectData: {},
    projectSelectData: [],
    material_data: [],
    one_customer_name: null,
    one_project_name: null,
    one_project_total: null,
    one_start_date: null,
    one_end_date: null,
    productSelectData: [],
    tableDataPayment: [],
    viewTableData: [],
    viewData: [],
    oneDesc: "",
    oneGeneral: "",
    onePrice: "",
    productError: null,
    projectError: null,
    customerError: null,
    totalError: null,
    startError: null,
    endError: null,
};

let ProjectReducer = createSlice({
    name: "project",

    initialState: initState,
    reducers: {
        closeError: (state, action) => {
            state.productError = null;
            state.projectError = null;
            state.customerError = null;
            state.totalError = null;
            state.startError = null;
            state.endError = null;
        },
        removeData: (state) => {
            state.material_data = [];
            state.one_customer_name = null;
            state.one_project_name = null;
            state.one_project_total = null;
            state.one_start_date = null;
            state.one_end_date = null;
            state.oneProjectData = {};
            state.projectData = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // =======AllExpensesThunk===========
            .addCase(AllProjectThunk.pending, (state, action) => { })
            .addCase(AllProjectThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.projectData = action.payload?.data;
                state.currentPage = action.payload.meta.current_page;
                state.lastPage = action.payload.meta.last_page;
            })
            .addCase(AllProjectThunk.rejected, (state, action) => { })
            // // =======ViewProjectThunk===========
            .addCase(ViewProjectThunk.fulfilled, (state, action) => {
                state.viewData = action.payload?.data;
                state.viewTableData = action.payload?.data.materials;
            })
            .addCase(ViewProjectThunk.rejected, (state, action) => { })
            // =======DeleteProjectThunk===========
            .addCase(DeleteProjectThunk.pending, (state, action) => { })
            .addCase(DeleteProjectThunk.fulfilled, (state, action) => { })

            // =======SelectProductThunk===========
            .addCase(SelectProductThunk.pending, (state, action) => { })
            .addCase(SelectProductThunk.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.productSelectData = action.payload?.data;
            })
            .addCase(SelectProductThunk.rejected, (state, action) => { })

            // // =======addProjectThunk===========
            .addCase(UpdateProjectThunk.fulfilled, (state, action) => { })
            .addCase(UpdateProjectThunk.rejected, (state, action) => {
                state.productError = action.payload?.data?.materials;
                state.projectError = action.payload?.data?.project_name;
                state.projectError = action.payload?.data?.project;
                state.customerError = action.payload?.data?.customer_name;
                state.totalError = action.payload?.data?.project_total;
                state.startError = action.payload?.data?.start_date;
                state.endError = action.payload?.data?.end_date;
            })
            // // =======OneProjectThunk===========
            .addCase(OneProjectThunk.fulfilled, (state, action) => {
                state.oneProjectData = action.payload?.data;
                state.material_data = action.payload?.data.materials;
                state.one_customer_name = action.payload?.data.customer_name;
                state.one_project_name = action.payload?.data.project_name;
                state.one_project_total = action.payload?.data.project_total;
                state.one_start_date = action.payload?.data.start_date;
                state.one_end_date = action.payload?.data.end_date;
            })
            // // =====storProjectThunk===========
            .addCase(StoreProjectThunk.fulfilled, (state, action) => { })
            .addCase(StoreProjectThunk.rejected, (state, action) => {
                state.productError = action.payload?.data?.materials;
                state.projectError = action.payload?.data?.project_name;
                state.projectError = action.payload?.data?.project;
                state.customerError = action.payload?.data?.customer_name;
                state.totalError = action.payload?.data?.project_total;
                state.startError = action.payload?.data?.start_date;
                state.endError = action.payload?.data?.end_date;
            });
    },
});

export default ProjectReducer.reducer;

export let { closeModal, closeError, removeData } = ProjectReducer.actions;
