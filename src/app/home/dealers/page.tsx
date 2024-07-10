"use client"
import { Box, Button, Card, CardContent, Divider, IconButton, InputAdornment, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import InfoMobile from "../InfoMobile";
import { Search } from "@mui/icons-material";
import GetInTouchModal from "./components/modal";
import { useCreateDealer } from "@/app/bureau/domain/hooks/dealer_hook";

export default function ClientDealer() {

    const { getDealers, dealers, beauralDealer } = useCreateDealer(false)
    useEffect(() => {
        return () => {
            getDealers.mutateAsync()
        };
    }, [])
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
            {
                beauralDealer.value.reverse().map((dealer, index) => {
                    return dealer.dealer_name == '' ? <></> : <ListItem key={index} alignItems="flex-start">

                        <ListItemText
                            primary={`${dealer.dealer_name} \n `}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {
                                            dealer.dealer_business_name
                                        }
                                        <br />
                                        {
                                            dealer.email
                                        }
                                        <br />
                                        {
                                            dealer.address
                                        }


                                    </Typography>
                                </React.Fragment>
                            }
                        />

                        <GetInTouchModal dealer={dealer} />
                    </ListItem>
                })
            }
        </Box>

    </React.Fragment>
}


{/* <GetInTouchModal /> */ }