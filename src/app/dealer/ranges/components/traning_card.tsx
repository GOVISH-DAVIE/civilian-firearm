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
import { Button } from '@mui/material';

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

export default function ClientTraining() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Basics into Fire Arm Management"
                subheader="September 14, 2024"
            />
            <CardMedia
                component="img"
                height="194"
                image="/g3.jpg"
                alt="G3"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Firearm management is crucial for ensuring safety and responsibility. The fundamental safety rules include treating every firearm as if it is loaded, always keeping the firearm pointed in a safe direction, keeping your finger off the trigger until ready to shoot, and being sure of your target and what is beyond it. ...
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    KSH 30,000
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <Button variant='outlined' >
                    Book Now
                </Button>
            </CardActions>

        </Card>
    );
}