import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

function References() {
    return (
        <>
            <Header />
            <Nav />
            <Main title="References">
                <p>
                    My girlfriend said she will give me a reference.
                </p>
                <img src="photos/girlfriend.jpeg" alt="girlfriend" width="400" />
            </Main>
            <Footer />
        </>
    );
}

export default References;