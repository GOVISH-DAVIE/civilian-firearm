'use client'
import { MoreHoriz, MoreVert, MoreVertRounded } from "@mui/icons-material";
import { Box, Button, Card, Chip, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PopperPopupState from "./components/poper";
import CreateApplication from "./components/modal/new_application";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value: any, row: { firstName: any; lastName: any; }) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Status', headerName: 'Status ', width: 130,

    renderCell: (params: { row: { firstName: any; lastName: any; status: boolean } }) =>
      <Chip color={params.row.status ? "success" : "error"} label={params.row.status ? "Approved" : "Rejected"} />,

  },
  {
    field: 'Finger Prints',
    headerName: 'Finger Prints',
    type: 'actions',
    width: 90,
    renderCell: (params: { row: { address: string } }) =>
      <Button>Finger Prints</Button>
  },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'actions',
    width: 90,
    renderCell: (params: { row: { address: string } }) =>
      <PopperPopupState />
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value: any, row: { firstName: any; lastName: any; }) => `${row.firstName || ''} ${row.lastName || ''}`,
  // },
];

const rows = [
  { id: 1, status: true, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, status: true, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, status: false, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, status: true, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, status: false, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, status: true, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, status: false, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, status: true, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, status: false, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Applications() {
  return (
    <Card sx={{
      p: 2
    }} variant="elevation" >
      
      <CreateApplication />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      // checkboxSelection
      />
    </Card>
  );
}