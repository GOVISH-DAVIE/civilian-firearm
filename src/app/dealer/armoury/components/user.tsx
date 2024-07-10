import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { VerifiedUser } from '@mui/icons-material';

export default function UserSell() {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <VerifiedUser />
            </ListItemAvatar>
            <ListItemText
                primary="Martin K"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           Licence #12d71
                        </Typography> 

                        ID #35029142
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}