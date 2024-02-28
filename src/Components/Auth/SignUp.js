import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch } from 'react-redux';
import { setPageState, setToken } from '../../Slices/authSlice';
import TransitionAlerts from '../Alerts/TransitionAlerts';
import CircularProgress from '@mui/material/CircularProgress';
import request from '../../Utils/HttpRequests';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.savonia.fi" >
                Savonia Water Lab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp() {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const data = new FormData(event.currentTarget);
            const firstname = data.get('firstName');
            const lastname = data.get('lastName');
            const username = data.get('email');
            const password = data.get('password');
            const confirmpassword = data.get('confirmpassword');
            if (!firstname || !lastname || !username || !password || !confirmpassword)
                throw new Error("ALL FIELDS REQUIRED");
            if (password !== confirmpassword)
                throw new Error("PASSWORD DOES NOT MATCH");
            const payload = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            };
            const response = await request.post('/api/user/signup', payload, request.generateConfigData());
            if (response && response.status === false)
                throw new Error(response.message);
            setNotificationMessage('Sign Up Successfull');
            setIsLoading(false);
            dispatch(setToken(response.message.token));
            return navigate('/otp');
        } catch (error) {
            setIsLoading(false);
            setNotificationMessage(error.message);
            setOpen(true);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmpassword"
                                label="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isLoading}
                        style={{ textTransform: 'none' }} // Set textTransform to 'none'
                    >
                        {isLoading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Sign Up'
                        )}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Button variant="body2" onClick={(e) => {
                                dispatch(setPageState(true));
                            }}>
                                {"Already have an account? Sign In"}
                            </Button>
                        </Grid>
                    </Grid>
                    <TransitionAlerts msg={notificationMessage} open={open} setOpen={setOpen} />
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}