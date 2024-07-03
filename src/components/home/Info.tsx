import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import Link from 'next/link';

const products = [
 
  {
    name: 'Arms and Balistics',
    desc: 'Get Reffered to an Arms Dealer.\n Get a  Schedule for the fire arm balistics to taken by DCI',
    state: true,

    to:'/home',
    ongoing: true,
  },
  {
    name: 'Licences',
    desc: 'Schedule For Picking Your Licence',
    state: false,
    ongoing: false,

    to:'/home/dealers'
  },
  {
    name: 'Dealers',
    desc: 'Resale/ Buy new Fire Arm',
    state: false,
    ongoing: false,
    to:'/home/dealers'
  },
  {
    name: 'Trainings',
    desc: 'Get Scheduled for Training',
    state: false,
    to:'/home/trainings',

    ongoing: false,
  },
  
  {
    name: 'My Armory',
    desc: '',
    state: false,
    to:'/home/armory',
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
          <Link  style={{
            textDecoration:'none',
            color:'inherit'
          }} key={product.name} href={product.to}>
          <ListItem  selected={product.state}  sx={{ py: 1, px: 1 }}>
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
          </Link>
        ))}
      </List>
    </React.Fragment>
  );
}
