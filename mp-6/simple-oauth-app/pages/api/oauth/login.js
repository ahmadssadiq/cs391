export default function handler(req, res) {
    const clientId = process.env.GITHUB_CLIENT_ID;
    const redirectUri = encodeURIComponent('http://localhost:3000/api/oauth/callback');
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user,user:email`;

    res.redirect(githubAuthUrl);
}