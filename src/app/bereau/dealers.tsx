import * as React from 'react';
  
import { Box } from '@mui/system';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export default function Dealers() {
    return (
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
            </ListItem>
        </Box>
    );
}