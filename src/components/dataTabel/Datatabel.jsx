import "./dataTabel.scss";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Datatabelsource";
import { useNavigate } from "react-router-dom";


function Datatabel() {
  const navigate = useNavigate();
  const actioonCoulumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
            <button onClick={() => {
              navigate('/products/edit')
            }} className=" text-indigo-600 border-[1px] border-indigo-600 hover:bg-indigo-600 hover:text-white px-3 py-1 rounded-[3px]">
              Edit
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTabel">
      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actioonCoulumn)}
        paginationModel={{ page: 0, pageSize: 9 }}
        checkboxSelection
      />
    </div>
  );
}

export default Datatabel;
