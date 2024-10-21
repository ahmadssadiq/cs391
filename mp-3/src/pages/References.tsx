import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const References: React.FC = () => (
    <>
        <Header />
        <Nav />
        <main>
            <h2>References</h2>
            <p>
                My girlfriend said she will give me a reference.
            </p>
            <img src="photos/girlfriend.jpeg" alt="girlfriend" width="400" />
        </main>
        <Footer />
    </>
);

export default References;