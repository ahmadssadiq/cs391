import React from 'react';

interface MainProps {
    title: string;
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ title, children }) => {
    return (
        <main className="main">
            <h2>{title}</h2>
            {children}
        </main>
    );
};

export default Main;