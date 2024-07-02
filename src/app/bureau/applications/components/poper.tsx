import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

export default function PopperPopupState() {
    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>
                    <IconButton {...bindToggle(popupState)}>
                        <MoreVert />
                    </IconButton>
                    <Popper  {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper sx={(theme) => ({
                                    background: theme.palette.mode == 'dark' ? theme.palette.primary.dark : 'white'
                                    , width: 200
                                })}>
                                    <Typography sx={{ p: 2 }}>The </Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}