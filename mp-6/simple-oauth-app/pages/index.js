// pages/index.js

import * as React from 'react';
import { Container, Box, Typography, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to the Simple OAuth App
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    Please log in using your GitHub account to continue.
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<GitHubIcon />}
                        href="/api/oauth/login"
                    >
                        Login with GitHub
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}