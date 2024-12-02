import { useEffect, useState } from 'react';

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = getCookie('user_data');
        if (userData) {
            setUser(JSON.parse(userData));
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

    if (!user) {
        return (
            <div>
                <p>You are not logged in.</p>
                <a href="/api/oauth/login">Login with GitHub</a>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {user.name || user.login}</h1>
            <img src={user.avatar_url} alt="Profile Picture" width={100} />
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}