"use client"
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React from "react";
import InfoMobile from "@/app/home/InfoMobile";
import { Search } from "@mui/icons-material"; 
import ClientTraining from "@/app/home/trainings/components/traning_card";

export default function Trrainings() {
    return <React.Fragment>
        <Card
            sx={{
                pb: 1,
                mb: 1,
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
        {/* <br /> */}
        <TextField sx={{
            mb: 1
        }} InputProps={{
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
                    primary="Fire Arm Trainings"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                You can visit the following centers to buy a fire arm training session
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Grid container >

                <Grid item p={1} xs={6} md={4}>
                    <ClientTraining />
                </Grid>
                <Grid item p={1}xs={6} md={4}>
                    <ClientTraining />
                </Grid>
                <Grid item p={1} xs={6} md={4}>
                    <ClientTraining />
                </Grid>
                <Grid item p={1} xs={6} md={4}>
                    <ClientTraining />
                </Grid>
            </Grid>
        </Box>

    </React.Fragment>
}