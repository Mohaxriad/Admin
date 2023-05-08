import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../sourcedata/datatablesourceenf";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="px-2 py-1 rounded text-[#5B112B] border border-[#5B112B] cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[600px] p-[20px]">
      <div className="w-full text-[24px] flex justify-between items-center text-[#F55D4C] mb-[10px]">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 "> Gestion des enfants : </h1>
        <Link to="/users/new" className=" text-[#5B112B] text-[16px] font-normal  rounded border border-[#5B112B] p-[5px]">
          Ajouter
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
