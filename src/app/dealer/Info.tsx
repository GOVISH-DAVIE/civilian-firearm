import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import Link from 'next/link';
import { useDealerUser } from './domain/hooks/dealer_user';
import { Domain } from '@mui/icons-material';

const products = [
  {
    name: 'My Armoury ',
    desc: 'My stock',
    state: false,
    ongoing: true,
    page: '/dealer/armoury'
  },
  {
    name: 'Inquiries/Requests',
    desc: 'Inquires and Requests',
    state: false,
    ongoing: false,
    page: '/dealer/inquiries'
  },
  
  {
    name: 'Ranges',
    desc: 'Licenced Ranges',
    state: false,
    ongoing: false,

    page: '/dealer/ranges'
  },
  {
    name: 'Profile',
    desc: 'Manage Dealers Fire arm import Requests',
    state: false,

    ongoing: false,

    page: '#'
  },

];

interface InfoProps {
  totalPrice: string;
}

export default function Info({ totalPrice }: InfoProps) {
  const { dealerUser } = useDealerUser()
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Civilian  Fire Arm Portal, Welcome
      </Typography>
      <Typography variant="h4" gutterBottom>
        {dealerUser.value?.dealer.dealer_name}
      </Typography>

      <Typography variant="h6" gutterBottom>
      <Domain />  {dealerUser.value?.dealer.dealer_business_name}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <Link key={product.name} style={{
            textDecoration: 'none',
            color: 'inherit'
          }} href={product.page}>
            <ListItem selected={product.state} sx={{ py: 1, px: 1 }}>
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
