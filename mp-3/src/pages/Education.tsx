import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Education: React.FC = () => (
    <>
        <Header />
        <Nav />
        <main>
            <h2>Education</h2>
            <p>
                Boston University, Boston, MA<br />
                Bachelor of Arts in Computer Science, Expected May 2025
            </p>
            <ul>
                <li>Dean's List: Fall 2022, Fall 2023</li>
                <li>Secretary, South Asian Student Association, 2024</li>
                <li>Co-public Chair, Organization Pakistan Society, 2024</li>
            </ul>
        </main>
        <Footer />
    </>
);

export default Education;