import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

const Certification: React.FC = () => (
    <>
        <Header />
        <Nav />
        <Main title="Certifications">
            <p>
                Pursuing relevant certifications in software engineering and machine learning.
            </p>
        </Main>
        <Footer />
    </>
);

export default Certification;