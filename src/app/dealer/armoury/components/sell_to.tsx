import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Divider, Grid, IconButton, InputAdornment, Snackbar, TextField } from '@mui/material';
import { ChatBubble, Close, Search, Send, ShoppingCartCheckout } from '@mui/icons-material';
import UserSell from './user';


export default function SellTo({ desc, image, name, qty }: {
    name: string,
    desc: string,
    qty: number,
    image: string,
}) {
    const [open, setOpen] = React.useState(false);
    const [busy, setBusy] = React.useState(false)
    const [sellBusy, setSellBusy] = React.useState(false)
    const [show, setshow] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [opensn, setOpensn] = React.useState(false);
    const loader = () => {
        setBusy(true)
        setTimeout(() => {

            setBusy(false)
            setshow(true)
        }, 1000);

    }
    const seller = () => {
        setSellBusy(true)
        setTimeout(() => {

            // setOpensn(true);

            setSellBusy(false)
            handleClose()
            alert("Sold")
        }, 1000);

    }

    return (
        <div>
            <Button sx={{ my: 1 }} onClick={handleOpen} variant='outlined' endIcon={<ShoppingCartCheckout />}>Sell TO</Button>
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
                    pl: 5,
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
                        Sell To
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Card sx={{ maxWidth: 400 }} >
                        <CardHeader
                            title={name}
                            subheader={`QTY ${qty}`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={`/${image}`}
                            alt="G3"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {desc}</Typography>
                            <Grid container mt={1}>

                            </Grid>
                        </CardContent>


                    </Card>
                    {/* <Typography id="modal-modal-title" variant="h4" component="h2">
            Dealer 1
          </Typography>
          <Typography variant='body1' id="modal-modal-description" sx={{ mt: 2 }}>
            Location: Hurlingum TOD <br />
            Phone: +254 79721xxxx<br />

          </Typography> */}

                    <br />
                    <TextField InputProps={{
                        endAdornment: <InputAdornment position="start">
                            {busy ? <CircularProgress /> : <IconButton onClick={loader}>
                                <Search />
                            </IconButton>}
                        </InputAdornment>,
                    }} id="outlined-basic" label="User Licence/ID Number" sx={{
                        my: 1
                    }} variant="outlined" /> <br />
                    {!show ? <></> : <UserSell />}

                    {sellBusy ? <CircularProgress /> : <Button onClick={seller} variant='outlined' endIcon={<Send />}>
                        Sell
                    </Button>}
                </Box>
               
            </Modal>
        </div>
    );
}