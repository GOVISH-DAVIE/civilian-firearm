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
    width: 200,
    renderCell: (params: { row: { address: string } }) =>
      <Button>Finger Prints</Button>
  },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'actions',
    width: 200,
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
  { id: 1, status: true, lastName: 'Martin', firstName: 'Ndegwa', age: 35 },
  { id: 2, status: true, lastName: 'Jane', firstName: 'Kiprotich', age: 42 },
  { id: 3, status: true, lastName: 'Kimandu', firstName: 'Mutai', age: 45 },
  { id: 4, status: true, lastName: 'Mary', firstName: 'Jane', age: 16 },
  { id: 5, status: true, lastName: 'David', firstName: 'Kyenze', age: null },
  { id: 6, status: true, lastName: 'Pyil', firstName: "Moses", age: 150 },
  { id: 7, status: true, lastName: 'Clifford', firstName: 'Murera', age: 44 },
  { id: 8, status: true, lastName: 'Frances', firstName: 'Wanjiru', age: 36 },
  { id: 9, status: true, lastName: 'Roxie', firstName: 'Rose', age: 65 },
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