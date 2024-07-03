import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton, TextField } from '@mui/material';
import { Close, Send, ShoppingCartCheckout } from '@mui/icons-material';
import ClientDealerTabs from './tabs/dealer_client';



export default function TradeInModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ my: 1 }} onClick={handleOpen} variant='outlined' endIcon={<ShoppingCartCheckout />}>Request For Trade In</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={(theme) => ({
          position: 'absolute' as 'absolute',
          top: '0px',
          right: '0px',
          [theme.breakpoints.down('md')]: {
            // backgroundColor: theme.palette.primary.main,
            width: "80%",
            margin: '10%',
            borderRadius: "10px",
            p: 2,
          },
          width: "60%",
          height: "100vh",
          bgcolor: 'background.paper',
          boxShadow: 24,
          py: 4,
          overflow: 'scroll'
        })}>
          <Grid container justifyContent='end'>
            <IconButton onClick={handleClose} > <Close /></IconButton>

          </Grid>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Trade In
          </Typography>
          {/* <Typography id="modal-modal-title" variant="h4" component="h2">
            Dealer 1
          </Typography>
          <Typography variant='body1' id="modal-modal-description" sx={{ mt: 2 }}>
            Location: Hurlingum TOD <br />
            Phone: +254 79721xxxx<br />

          </Typography> */}
           
          <br />
          <TextField id="outlined-basic" label="Fire Arm Name" sx={{
            my: 1
          }} variant="outlined" /> <br />
          <TextField sx={{
            my: 1
          }} id="outlined-basic" label="Fire Arm Serial Number" variant="outlined" /> <br />
          <TextField sx={{
            my: 1
          }} id="outlined-basic" label="Sale Price" variant="outlined" /> <br />
          <TextField sx={{
            my: 1
          }} id="outlined-basic" type='file' label="Fire Arm Image" variant="outlined" /> <br />
          <Button variant='outlined' endIcon={<Send />}>
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}