import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton } from '@mui/material';
import { Close, ShoppingCartCheckout } from '@mui/icons-material';
import ClientDealerTabs from './tabs/dealer_client';
import TradeInModal from './modal_trade_in';



export default function GetInTouchModal({ dealer }: { dealer: IDealer }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Get In Touch</Button>
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
            width: "95%",
            margin: '2.5%',
            borderRadius: "10px",
            p: 2,
          },
          width: "70%",
          height: "100vh",
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          overflow: 'scroll'
        })}>
          <Grid container justifyContent='end'>
            <IconButton onClick={handleClose} > <Close /></IconButton>

          </Grid>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {dealer.dealer_name}
          </Typography>
          <Typography variant='body1' id="modal-modal-description" sx={{ mt: 2 }}>
            Location: {dealer.address} <br />
            Phone: {dealer.phone_number}<br />

          </Typography>
          <TradeInModal />
          <ClientDealerTabs />
        </Box>
      </Modal>
    </div>
  );
}