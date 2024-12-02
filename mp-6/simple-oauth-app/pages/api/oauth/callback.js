import axios from 'axios';

export default async function handler(req, res) {
    const { code } = req.query;
    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    try {
        const tokenResponse = await axios.post(
            `https://github.com/login/oauth/access_token`,
            {
                client_id: clientId,
                client_secret: clientSecret,
                code,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const { access_token } = tokenResponse.data;

        // Fetch user data
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${access_token}`,
            },
        });

        // Store user data and access_token in session or database
        // For simplicity, we'll use cookies (not recommended for access tokens in production)

        res.setHeader('Set-Cookie', [
            `access_token=${access_token}; HttpOnly; Path=/; Max-Age=86400`,
            `user_data=${JSON.stringify(userResponse.data)}; Path=/; Max-Age=86400`,
        ]);

        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'OAuth callback error' });
    }
}