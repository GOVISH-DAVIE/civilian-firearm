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

export default function DealerProductCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  >
      <CardHeader
        title="G3 - yr: 2020"
        subheader="amunation: 9mm"
      />
      <CardMedia
        component="img"
        height="194"
        image="/g3.jpg"
        alt="G3"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          The G3 rifle, a 7.62x51mm NATO battle rifle from Heckler & Koch, is known for its durability and reliability.
          Developed in the 1950s, it features a roller-delayed blowback system for smooth operation. Widely used by militaries,
          its modular design allows easy maintenance and adaptation to various combat scenarios.
        </Typography>
        <Grid container mt={1}>
          <Button variant='outlined' endIcon={<ShoppingCartCheckout />}>
            Request Price
          </Button>
          
        </Grid>
      </CardContent>


    </Card>
  );
}