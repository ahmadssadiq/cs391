import React from 'react';

interface MainProps {
    title: string;
    children: React.ReactNode;
}

function Main({ title, children }: MainProps) {
    return (
        <main className="main">
            <h2>{title}</h2>
            {children}
        </main>
    );
}

export default Main;