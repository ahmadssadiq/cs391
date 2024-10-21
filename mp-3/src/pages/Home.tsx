import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home: React.FC = () => (
    <>
        <Header />
        <Nav />
        <main>
            <h2>Welcome to My Resume</h2>
            <img src="photos/me.jpeg" alt="personal picture" width="400">
                <p>
                    I am Ahmad Sadiq, a Computer Science student at Boston University,
                    focusing on robotics software engineering, full-stack development,
                    and AI-driven solutions. Explore my journey through my experiences,
                    education, certifications, and projects.
                </p>
        </main>
        <Footer />
    </>
);

export default Home;