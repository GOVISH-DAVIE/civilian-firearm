import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import Link from 'next/link';

const products = [
  {
    name: 'Application ',
    desc: 'List of all Applications',
    state: false,
    ongoing: true,
    page: '/bureau/applications'
  },
  {
    name: 'Officers',
    desc: 'Manage Bureau Officers',
    state: false,
    ongoing: false,
    page: '/bureau/officers'
  },
  {
    name: 'Dci',
    desc: 'Create admin DCI Officers account',
    state: false,
    ongoing: false,
    page: '/bureau/dci'
  },
  {
    name: 'Dealers',
    desc: 'Create and manage Fire arm dealers account',
    state: false,
    ongoing: false,

    page: '/bureau/dealers'
  },
  {
    name: 'Dealers purchase Requests',
    desc: 'Manage Dealers Fire arm import Requests',
    state: false,

    ongoing: false,

    page: '/bureau/lpo'
  },
  {
    name: 'Licence',
    desc: 'Manage and issue fire arm Licence',
    state: false,
    ongoing: false,
    page: '/bureau/license'
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
        John M.
      </Typography>
      <Typography variant="h6" gutterBottom>
        serviceNO. #12d71
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <Link key={product.name} style={{
            textDecoration: 'none',
            color:'inherit'
          }} href={product.page}>
            <ListItem selected={product.state}  sx={{ py: 1, px: 1 }}>
              <ListItemText
                sx={{ mr: 2 }}
                primary={<>{product.name} {product.state ? <Chip color='error' size='small' label="ongoing" /> : ''}
                </>}
                secondary={product.desc}
              />
              {/* <Typography variant="body1" fontWeight="medium">
              {product.price}
            </Typography> */}
            </ListItem>
          </Link>
        ))}
      </List>
    </React.Fragment>
  );
}
