import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Add, AddLocation, Close, Domain, LocationCity, Mail, Password, Phone, ShoppingCartCheckout } from '@mui/icons-material';
import { Container } from '@mui/system';




export default function CreateDealer() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" endIcon={
                <Add />
            } >
                Create Officer
            </Button>


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
                    <Typography sx={{
                        textAlign: "center"
                    }} id="modal-modal-title" variant="h4" component="h2">
                        New Officer
                    </Typography>
                    <Divider />

                    <Container sx={{
                        mt: 2
                    }}>
                        <TextField InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }} fullWidth id="outlined-basic" label="Officer Name" variant="outlined" />
                        {/* <TextField sx={{
                            my: 1.5
                        }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Domain />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth id="outlined-basic" label="Dealer Business Name" variant="outlined" /> */}
                        <TextField sx={{
                            my: 1.5
                        }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AddLocation />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth id="outlined-basic" label="Address" variant="outlined" />
                        <TextField sx={{
                            my: 1.5
                        }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth id="outlined-basic" label="Phone Number" variant="outlined" />
                        <TextField sx={{
                            my: 1.5
                        }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth id="outlined-basic" label="Email " variant="outlined" />
                        <TextField sx={{
                            my: 1.5
                        }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Password />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth id="outlined-basic" label="One Time PassWord " variant="outlined" />


                        <Button endIcon={
                            <Add />
                        } variant='outlined'>
                            Create Officer
                        </Button>

                    </Container>

                    {/* <TradeInModal />
          <ClientDealerTabs /> */}
                </Box>
            </Modal>
        </div>
    );
}