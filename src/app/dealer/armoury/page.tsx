'use client'
import { Add, Inventory, MoreHoriz, MoreVert, MoreVertRounded, Work } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Grid, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import PopperPopupState from "./components/poper";
import MyArmourySettings from "./components/poper";
import CreateDealerFireArm from "./components/new_fire_arm";
import DealerProductCard from "@/app/home/dealers/components/product_card";
import DealerProductCardDealer from "./components/card";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Fire Arm Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value: any, row: { firstName: any; lastName: any; }) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'Status', headerName: 'Quantity ', width: 130,

    renderCell: (params: { row: { firstName: any; lastName: any; status: boolean } }) =>
      <Chip color={params.row.status ? "success" : "error"} label={params.row.status ? "Approved" : "Rejected"} />,

  },
  {
    field: 'Finger Prints',
    headerName: 'Stock Out Level',
    type: 'actions',
    width: 200,
    renderCell: (params: { row: { address: string } }) =>
      <Button>Finger Prints</Button>
  },
  {
    field: 'Action',
    headerName: 'Action',
    type: 'actions',
    width: 90,
    renderCell: (params: { row: { address: string } }) =>
      <MyArmourySettings />
  },
  
];
 

export default function Applications() {
  return (
    <Grid container >
    <Grid item sm={12} >
      <Card sx={{
        py:2,
        my:2,
      }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Inventory />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add Inventory" secondary="" />
        <Button variant="outlined" endIcon={
          <Add />
        } >
          ADD


        </Button>
      </ListItem>
      </Card>
      </Grid>



      {[
        {
          "name": "Glock 17 Gen 4",
          "desc": "The Glock 17 Gen 4 is a popular semi-automatic pistol known for its reliability, durability, and ease of use. Widely used by law enforcement and military, it features a 17-round magazine, modular back strap design, and a safe action system. The Gen 4 is lightweight and highly accurate.",
          "qty": 10,
          "image": "1.jpeg"
        },
        {
          "name": "Glock 17 Gen 5",
          "desc": "The Glock 17 Gen 5 includes several enhancements over its predecessors, including a more durable finish, improved barrel design, and no finger grooves on the grip. It remains a top choice for law enforcement and military use, known for its reliability and precision.",
          "qty": 15,
          "image": "2.jpeg"
        },
        {
          "name": "Glock 17 MOS",
          "desc": "The Glock 17 MOS (Modular Optic System) allows for easy mounting of reflex sights, making it a versatile choice for competitive shooting and personal defense. It features the same reliability and performance as the standard Glock 17.",
          "qty": 8,
          "image": "g17.jpg"
        },
        {
          "name": "Glock 17C",
          "desc": "The Glock 17C is a compensated version of the Glock 17, designed to reduce muzzle flip and recoil. It features integrated compensator ports on the slide and barrel, making it ideal for quick, accurate follow-up shots.",
          "qty": 12,
          "image": "1.jpeg"
        },
        {
          "name": "Glock 17L",
          "desc": "The Glock 17L features an extended barrel and slide for increased accuracy and performance. This model is favored by competition shooters for its superior handling and precision. It retains the reliability and ease of use characteristic of the Glock 17 series.",
          "qty": 5,
          "image": "g17.jpg"
        }
      ]
        .map((item, index) => <Grid key={index} p={.5} item md={4} sm={3} >
          <DealerProductCardDealer name={item.name} qty={item.qty} desc={item.desc} image={item.image} />
        </Grid>
        )}


    </Grid>
  );
}