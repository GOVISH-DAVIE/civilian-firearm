import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

const products = [
  {
    name: 'Application ',
    desc: 'List of all Applications',
    state: false,
    ongoing: true,
    page:'/bereau/applications'
  },
  {
    name: 'Officers',
    desc: 'Manage Bureau Officers',
    state: false,
    ongoing: false,

    page:'/bereau/officers'
  },
  {
    name: 'Dci',
    desc: 'Create admin DCI Officers account',
    state: false,

    ongoing: false,

    page:'/bereau/dci'
  },
  {
    name: 'Dealers',
    desc: 'Create and manage Fire arm dealers account',
    state: false,
    ongoing: false,

    page:'/bereau/dealers'
  },
  {
    name: 'Dealers purchase Requests',
    desc: 'Manage Dealers Fire arm import Requests',
    state: false,

    ongoing: false,

    page:'/bereau/lpo'
  },
  {
    name: 'Licence',
    desc: 'Manage and issue fire arm Licence',
    state: false,
    ongoing: false,
    page:'/bereau/license'
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
              primary={<>{product.name} {product.state?<Chip color='error' size='small' label="ongoing" />:''}
              </>}
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
