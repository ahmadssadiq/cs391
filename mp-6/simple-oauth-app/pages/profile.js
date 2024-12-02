// pages/profile.js

import React, { useEffect, useState } from 'react';
import {
    Container,
    Box,
    Typography,
    Avatar,
    Button,
    Card,
    CardContent,
    CardActions,
    CircularProgress,
} from '@mui/material';

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getCookie('user_data');
        if (userData) {
            setUser(JSON.parse(decodeURIComponent(userData)));
        }
    }, []);

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const handleLogout = () => {
        // Clear cookies
        document.cookie = 'access_token=; Max-Age=0; path=/';
        document.cookie = 'user_data=; Max-Age=0; path=/';
        window.location.href = '/';
    };

    if (user === null) {
        return (
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <CircularProgress />
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Loading...
                    </Typography>
                </Box>
            </Container>
        );
    }

    if (!user) {
        return (
            <Container maxWidth="sm">
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        You are not logged in.
                    </Typography>
                    <Button variant="contained" color="primary" href="/api/oauth/login">
                        Login with GitHub
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8 }}>
                <Card variant="outlined">
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Avatar
                            src={user.avatar_url}
                            alt="Profile Picture"
                            sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                        />
                        <Typography variant="h5" component="div">
                            {user.name || user.login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email || 'Email not available'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.location || 'Location not available'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Public Repos: {user.public_repos}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button variant="contained" color="secondary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
}