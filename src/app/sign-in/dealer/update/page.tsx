"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import useThemeMode from '../../../../hooks/themeMode';
import { CircularProgress, Fab } from '@mui/material';
import ToggleColorMode from '../../../home/components/ToggleColorMode';
import { useDealerLogin } from '../domain/hook';




export default function SignInSide() {

    const {
        updateMutation,
        handleUpdateSubmit } = useDealerLogin()
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: (t) => t.palette.mode === 'light' ? 'url(/Illustration.svg)' : 'url(/Illustration-light.svg)',

                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} sx={{
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: (t) => t.palette.mode === 'light'
                            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,

                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {/* <form onSubmit={handleSubmit}> */}
                    <Box component="form" noValidate onSubmit={handleUpdateSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"

                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        {
                            updateMutation.isLoading ? <CircularProgress /> : <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Update Password
                            </Button>
                        }

                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgot" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>

                        {/* <Copyright sx={{ mt: 5 }} /> */}
                    </Box>
                    {/* </form> */}
                </Box>
            </Grid>
            <Fab sx={{
                background: "transparent",
                position: "absolute",
                bottom: 10,
                right: 10

            }}>
                <ToggleColorMode />

            </Fab>
        </Grid>
    );
}
