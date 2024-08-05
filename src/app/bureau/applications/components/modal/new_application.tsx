import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CircularProgress, Divider, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { AccountCircle, Add, AddLocation, Article, Close, Domain, LocationCity, Mail, Password, Phone, ShoppingCartCheckout } from '@mui/icons-material';
import { Container } from '@mui/system';




export default function CreateApplication() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const { handleSubmit, state, createMutation } = useCreateDealer(false)
    const FileRef = React.useRef<HTMLInputElement>(null)

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" sx={{
                my: 2
            }} endIcon={
                <Add />
            } >
                Create Applicaiton
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
                        New Application
                    </Typography>
                    <Divider />

                    <form >
                        <Container sx={{
                            mt: 2
                        }}>
                            <TextField InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }} fullWidth id="outlined-basic" required name='dealer_name' label="Applicant  Name" variant="outlined" />
                            <TextField sx={{
                                my: 1.5
                            }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Domain />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth id="outlined-basic" required name='dealer_business_name' label="Applicant ID" variant="outlined" />
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
                                fullWidth id="outlined-basic" required name='address' label="Address" variant="outlined" />
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
                                fullWidth id="outlined-basic" required name='phone_number' label="Phone Number" variant="outlined" />
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
                                fullWidth id="outlined-basic" required name='email' label="Email " variant="outlined" />
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
                                fullWidth id="outlined-basic" required name='one_time_password' label="One Time PassWord " variant="outlined" />


                            <Grid container display={"flex"} flexDirection={"row"} alignItems={"center"}>
                                <input hidden ref={FileRef} type='file' />
                                <Card onClick={() => {
                                    FileRef.current?.click()
                                }} sx={{
                                    width: "70px",
                                    height: "70px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    my: 2, mr: 1,
                                    cursor: "pointer"

                                }}>
                                    <Article fontSize={'large'} />



                                </Card> <Typography sx={{
                                    pr: 1
                                }} >
                                    Attach Documents
                                </Typography>
                            </Grid>



                            <Button type='submit' endIcon={
                                <Add />
                            } variant='outlined'>
                                Create Application
                            </Button>


                        </Container>
                    </form>

                    {/* <TradeInModal />
          <ClientDealerTabs /> */}
                </Box>
            </Modal>
        </div>
    );
}