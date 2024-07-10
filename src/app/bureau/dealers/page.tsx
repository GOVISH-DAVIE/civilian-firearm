"use client"
import { Box, Button, Card, CardContent, Divider, IconButton, ListItem, ListItemText, Typography } from "@mui/material"
import React, { useEffect } from "react"
import InfoMobile from "../InfoMobile"
import { Add, MoreVert } from "@mui/icons-material"
import CreateDealer from "./component/new_dealer"
import DealerSettings from "./component/popper/dealer_settings" 
import { useCreateDealer } from "../domain/hooks/dealer_hook"

const DealersPages = () => {
    
    const { getDealers, dealers, beauralDealer} = useCreateDealer(false)
    useEffect(() => {
      return () => {
        getDealers.mutateAsync()
      };
    }, [])
    useEffect(() => {
      
    }, [dealers])
    // getDealers.mutateAsync()
    if (getDealers.isLoading) return 'Loading...'

    if (getDealers.error) return 'An error has occurred: ' + JSON.stringify(getDealers.error)

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

        {
            beauralDealer.value.reverse().map((dealer, index) => {
                return dealer.dealer_name==''?<></> :<ListItem key={index} alignItems="flex-start">

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

                    <DealerSettings />
                </ListItem>
            })
        }


    </React.Fragment>
}
export default DealersPages