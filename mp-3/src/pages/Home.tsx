import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

function Home() {
    return (
        <>
            <Main title="Home">
                <h2>Welcome to My Resume</h2>
                <img src="/photos/me.jpeg" alt="Ahmad Sadiq" width="400" /> {/* Self-closing tag */}
                <p>
                    I am Ahmad Sadiq, a Computer Science student at Boston University,
                    focusing on robotics software engineering, full-stack development,
                    and AI-driven solutions. Explore my journey through my experiences,
                    education, certifications, and projects.
                </p>
            </Main>
        </>
    );
}

export default Home;