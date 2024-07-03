"use client"
import { Box, Button, Card, CardContent, Divider, IconButton, InputAdornment, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";
import InfoMobile from "../InfoMobile";
import { Search } from "@mui/icons-material";
import GetInTouchModal from "./components/modal";

export default function ClientDealer() {
    return <React.Fragment>
        <Card
            sx={{
                display: { xs: 'flex', md: 'none' },
                width: '100%',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ':last-child': { pb: 2 },
                }}
            >
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        Civilian  Fire Arm Portal, <br />
                        {" \t"} Welcome
                    </Typography>
                    <Typography variant="h4">
                        Martin K.
                    </Typography>
                </div>
                <InfoMobile totalPrice={''} />
            </CardContent>
        </Card>

        <TextField InputProps={{
            endAdornment: <InputAdornment position="start"><IconButton>
                <Search />
            </IconButton> </InputAdornment>,
        }} fullWidth label="Search Dealer Name/ Fire Arm Name" id="fullWidth" />
        <br />
        <Divider />
        <br />
        <Box>
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Get Fire Arm"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                You can visit the following dealers to buy a fire arm</Typography>
                        </React.Fragment>
                    }
                /> 
            </ListItem>
            <Divider />
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Dealer 1"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Hurlingum <br />
                                Kaffee Bld. 2nd floor

                            </Typography>
                        </React.Fragment>
                    }
                />

                <GetInTouchModal />
            </ListItem>
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Dealer 2"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Hurlingum <br />
                                Kaffee Bld. 2nd floor


                            </Typography>
                        </React.Fragment>
                    }
                />

                <GetInTouchModal />
            </ListItem>
        </Box>

    </React.Fragment>
}