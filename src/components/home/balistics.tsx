import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro';
// yarn

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { Box } from '@mui/system';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export default function Balistics() {
    return (
        <Box>
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="DCI Schedule"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                               Kindly avail yourself with the Fire Arm at DCI for balistics.
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                   <StaticDatePicker  localeText={{ toolbarTitle: "Schedule Date" }} 
                        sx={{

                            "& .MuiDayCalendar-weekDayLabel": { color: 'blue', },
                            "& . MuiPickersDay-dayWithMargin": { color: 'blue', },
                        }}
                          

                        defaultValue={dayjs('2024-07-17')}
                        disabled
                    /> 
            </LocalizationProvider>
        </Box>
    );
}