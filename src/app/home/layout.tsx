"use client"
import React from "react";
import AppAppBar from "../components/AppAppBar";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AddressForm from './AddressForm';
// import getCheckoutTheme from './getCheckoutTheme';
import Info from './Info';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ToggleColorMode from './ToggleColorMode';
import Balistics from './balistics';
import Dealers from './dealers';

export default function HomeLayout({
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
                        startIcon={<ArrowBackRoundedIcon />}
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
                    <Info totalPrice={'$134.98'} />
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