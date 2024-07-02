import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { CloudDownload, Download } from '@mui/icons-material';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'License :', detail: '#12356jhs' },
  { name: 'Approved By:', detail: 'Mr. John Smith' },
  { name: 'Expires on:', detail: '04/2024' },
];

export default function Review() {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Document approval" secondary="approved by John Kimani" />
        </ListItem>


      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Fire arm
          </Typography>
          <Typography gutterBottom>
            Dealer 1
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            G4 100 9mm
          </Typography>
          <Typography color="text.secondary" gutterBottom>
           Serial Number <b>12354-fvj</b>
          </Typography>
        </div>

        <div>
          <Typography variant="subtitle2" gutterBottom>
            Balistics
          </Typography>
          <Typography gutterBottom>
            Officer John Mutei
          </Typography>
          <Typography color="text.secondary" gutterBottom>
           Download balistic report <IconButton>
            <CloudDownload color='primary' />
           </IconButton>
          </Typography>
        </div>
        <div>

          <Typography variant="subtitle2" gutterBottom>
            Licence Download
          </Typography>
          <Typography color="text.secondary" gutterBottom>
           Download License  <IconButton>
            <CloudDownload color='primary' />
           </IconButton>
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
