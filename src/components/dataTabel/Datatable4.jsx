import "./dataTabel.scss";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Datatabelsource4";
import Modal4 from "../modals/Modal4";

function Datatabel4() {
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
            <Modal4/>
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

export default Datatabel4;
