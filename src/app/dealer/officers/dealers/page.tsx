"use client"
import { Box, Button, Card, CardContent, Divider, IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import React from "react"
import InfoMobile from "../InfoMobile"
import { Add, MoreVert } from "@mui/icons-material"
import CreateDealer from "./component/new_dealer"
import DealerSettings from "./component/popper/dealer_settings"

const DealersPages = () => {
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

        <Box>
            <CreateDealer />

        </Box>
        <Divider sx={{
            mt: 2,
            mb: 2,
        }} />

        <ListItem alignItems="flex-start">

            <ListItemText
                primary="Dealer "
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Hurlingum<br />
                            Kaffee Bld. 2nd floor


                        </Typography>
                    </React.Fragment>
                }
            />

            <DealerSettings />
        </ListItem>

    </React.Fragment>
}
export default DealersPages