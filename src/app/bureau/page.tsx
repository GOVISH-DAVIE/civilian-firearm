"use client"
import * as React from 'react';

import Box from '@mui/material/Box';
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
import { CardActions, PaletteMode } from '@mui/material';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AddressForm from '../home/AddressForm';
// import getCheckoutTheme from './getCheckoutTheme';
import Info from './Info';
import InfoMobile from './InfoMobile';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ToggleColorMode from './ToggleColorMode';
import Balistics from './balistics';
import Dealers from './dealers';
import DashCard from '../home/components/card/dashCard';
import { Settings } from '@mui/icons-material';

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}


const steps = ['Document', 'Verification', 'Get Fire Arm', ' Balistics ', 'Final '];

const logoStyle = {
  width: '140px',
  height: '56px',
  marginLeft: '-4px',
  marginRight: '-8px',
};

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Dealers />;
    case 3:
      return <Balistics />;
    case 4:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Beareau() {
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);


  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Grid container  >
      <Grid
        item
        sm={12}
        p={1}
        md={3}
        lg={3}>
        <DashCard card={(
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                New Applications
              </Typography>
              <Typography variant="h5" component="div">
                20
              </Typography>

            </CardContent>
            <CardActions>

              <Button startIcon={
                <Settings />
              } href='/bureau/applications' size="small">Manage</Button>
              {/* <Button size="small">Create</Button> */}
              {/* <Button size="small">Manage</Button> */}

            </CardActions>
          </React.Fragment>
        )} />


      </Grid>

      <Grid
        item
        p={1}
        sm={12}
        md={3}
        lg={3}>
        <DashCard card={(
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Bureau Officers
              </Typography>
              <Typography variant="h5" component="div">
                20
              </Typography>

            </CardContent>
            <CardActions>

              <Button startIcon={
                <Settings />
              } href='/bureau/officers' size="small">Manage</Button>
              {/* <Button size="small">Create</Button> */}
              {/* <Button size="small">Manage</Button> */}

            </CardActions>
          </React.Fragment>
        )} />


      </Grid>

      <Grid
        item
        p={1}
        sm={12}
        md={3}
        lg={3}>
        <DashCard card={(
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               DCI Officers
              </Typography>
              <Typography variant="h5" component="div">
                20
              </Typography>

            </CardContent>
            <CardActions>

              <Button startIcon={
                <Settings />
              } href='/bureau/dci' size="small">Manage</Button>
              {/* <Button size="small">Create</Button> */}
              {/* <Button size="small">Manage</Button> */}

            </CardActions>
          </React.Fragment>
        )} />


      </Grid>

      <Grid
        item
        p={1}
        sm={12}
        md={3}
        lg={3}>
        <DashCard card={(
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Dealers 
              </Typography>
              <Typography variant="h5" component="div">
                20
              </Typography>

            </CardContent>
            <CardActions>

              <Button startIcon={
                <Settings />
              } href='/bureau/dealers' size="small">Manage</Button>
              {/* <Button size="small">Create</Button> */}
              {/* <Button size="small">Manage</Button> */}

            </CardActions>
          </React.Fragment>
        )} />


      </Grid>




      <Grid
        item
        p={1}
        sm={12}
        md={3}
        lg={3}>
        <DashCard card={(
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Dealer Requests
              </Typography>
              <Typography variant="h5" component="div">
                20
              </Typography>

            </CardContent>
            <CardActions>

              <Button startIcon={
                <Settings />
              } href='/bureau/applications' size="small">Manage</Button>
              {/* <Button size="small">Create</Button> */}
              {/* <Button size="small">Manage</Button> */}

            </CardActions>
          </React.Fragment>
        )} />


      </Grid>



      
    </Grid>
  );
}
