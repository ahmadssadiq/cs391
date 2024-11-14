"use client";

import { useState } from "react";

export default function UrlForm() {
    const [alias, setAlias] = useState("");
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ alias, url }),
        });

        const data = await res.json();
        if (res.ok) {
            const generatedShortUrl = `${window.location.origin}/${alias}`;
            setShortUrl(generatedShortUrl);
            setMessage(`Short URL: ${generatedShortUrl}`);
        } else {
            setMessage(data.error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortUrl);
        alert("URL copied to clipboard!");
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                placeholder="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                style={inputStyle}
            />
            <input
                type="url"
                placeholder="URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Shorten</button>
            {shortUrl && (
                <div style={{ marginTop: '10px' }}>
                    <p>{message}</p>
                    <button onClick={copyToClipboard} style={copyButtonStyle}>Copy URL</button>
                </div>
            )}
        </form>
    );
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

const copyButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '5px'
};