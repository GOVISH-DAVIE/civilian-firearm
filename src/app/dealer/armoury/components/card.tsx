import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material';
import { Shop2Outlined, ShoppingCartCheckout } from '@mui/icons-material';
import SellTo from './sell_to';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DealerProductCardDealer({ desc, image, name, qty }: {
  name: string,
  desc: string,
  qty: number,
  image: string,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  >
      <CardHeader
        title={name}
        subheader={`QTY ${qty}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`/${image}`}
        alt="G3"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}</Typography>
        <Grid container mt={1}>
         <SellTo name={name} qty={qty} desc={desc} image={image} />

        </Grid>
      </CardContent>


    </Card>
  );
}