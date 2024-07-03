import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Card } from '@mui/material';
import { ArrowForwardIosRounded, MonetizationOn, ShoppingCart } from '@mui/icons-material';
import Link from 'next/link';

export default function RequestList() {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Card>
                <Link style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }} href={'/home/dealers/chat'}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ShoppingCart />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Request for resale" secondary="Feb 9, 2024" />
                        <ArrowForwardIosRounded />
                    </ListItem>
                </Link>
            </Card>
            <Card sx={{ my: 1 }}>
                <Link style={{
                    textDecoration: 'none',
                    color: 'inherit'
                }} href={'/home/dealers/chat'}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MonetizationOn />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Request for Price" secondary="Feb 9, 2024" />
                        <ArrowForwardIosRounded />
                    </ListItem></Link>
            </Card>


        </List>
    );
} 