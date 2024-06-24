import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    name: 'Documentation ',
    desc: 'Upload Supporting Documents and wait for approval',
    state: true,
    ongoing: true,
  },
  {
    name: 'Arms and Balistics',
    desc: 'Get Reffered to an Arms Dealer.\n Get a  Schedule for the fire arm balistics to taken by DCI',
    state: false,

    ongoing: false,
  },
  {
    name: 'Training',
    desc: 'Get Scheduled for Training',
    state: false,

    ongoing: false,
  },
  {
    name: 'Licence',
    desc: 'Schedule For Picking Your Licence',
    state: false,

    ongoing: false,
  },
];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Civilian  Fire Arm Portal, Welcome 
      </Typography>
      <Typography variant="h4" gutterBottom>
        Martin K.
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem  selected={product.state} key={product.name} sx={{ py: 1, px: 1 }}>
            <ListItemText
              sx={{ mr: 2 }}
              primary={product.name}
              secondary={product.desc}
            />
            {/* <Typography variant="body1" fontWeight="medium">
              {product.price}
            </Typography> */}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
