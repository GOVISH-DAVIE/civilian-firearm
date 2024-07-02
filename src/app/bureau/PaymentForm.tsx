import * as React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import { styled } from '@mui/system';
import { Button, CardActions, Chip, Grid, IconButton, ListItem, ListItemText } from '@mui/material';
import { Send } from '@mui/icons-material';

// const Box = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
// }));

export default function PaymentForm() {
  const [paymentType, setPaymentType] = React.useState('creditCard');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handlePaymentTypeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event: { target: { value: string } }) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <Box  >
      <Typography variant="subtitle2" color="text.secondary">
        Verifyng Your Documents
      </Typography>
      <Typography variant="h4" gutterBottom>
        Status <Chip color='success' size='small' label="ongoing" />
      </Typography>

      <Card sx={{p:1}}>
        <Grid container>
          <Grid item sm={12}>
            <Grid item sm={6}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  Kindly Update your documents
                </CardContent>
                <CardActions>
                  <ListItemText primary="@Jane wanjiku"
                    secondary="12-01-2024 3:00pm" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container mt={1} sm={12}>
            <Grid item sm={6} />
            <Grid item sm={6}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  Kindly Update your documents
                </CardContent>
                <CardActions>
                  <ListItemText primary="@you"
                    secondary="12-01-2024 3:00pm" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid container mt={1} sm={12}>
            <OutlinedInput multiline
              maxRows={10}
              id="address1"
              name="address1"
              type="address1"
              endAdornment={
                <IconButton aria-label="delete">
                  <Send />
                </IconButton>
              }
              placeholder="Write a response"
              required
            />

          </Grid>

        </Grid>
      </Card>

    </Box>
  );
}
