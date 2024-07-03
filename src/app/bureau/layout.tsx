"use client"
import React from "react";
import AppAppBar from "../home/components/AppAppBar";
import { Box, Button, Grid } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import Info from './Info';
export default function BeareauLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <React.Fragment>
        <AppAppBar />

        <Grid container  >
            <Grid
                item
                xs={12}
                sm={5}
                lg={4}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRight: { sm: 'none', md: '1px solid' },
                    borderColor: { sm: 'none', md: 'divider' },
                    alignItems: 'start',
                    pt: 4,
                    px: 10,
                    gap: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        height: 150,
                    }}
                >
                    <Button
                        startIcon={<ArrowBackRounded />}
                        component="a"
                        href="/"
                        sx={{ ml: '-8px' }}
                    >
                        Back to

                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                        maxWidth: 500,
                    }}
                >
                    <Info totalPrice={''} />
                </Box>
            </Grid>
            <Grid
                item
                sm={12}
                md={7}
                lg={8}
                sx={{
                    // display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent:'start',
                    maxWidth: '100%',
                    width: '100%',

                    backgroundColor: { xs: 'transparent', sm: 'background.default' },
                    alignItems: 'start',
                    pt: { xs: 2, sm: 4 },
                    px: { xs: 2, sm: 10 },
                    gap: { xs: 4, md: 8 },
                    overflowY: 'scroll',
                    // padding:"20px"

                }}
            >
                <Box mt={10}>
                    {
                        children
                    }


                </Box>
            </Grid>

        </Grid>


    </React.Fragment>
}