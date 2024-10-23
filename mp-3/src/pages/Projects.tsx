import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Calculator from '../components/Calculator';
import Main from '../components/Main';

function Projects() {
    return (
        <>
            <Header />
            <Nav />
            <Main title="Projects">
                <div className="project-card">
                    <img src="/photos/coding.jpeg" alt="Boston Police Overtime Data Analysis" width="400px" height="400px" />
                    <h3>Boston Police Overtime Data Analysis</h3>
                    <p>
                        In Fall 2024, I scrutinized and visualized overtime expenditure data using Python and advanced statistical models.
                        Through deep analysis, I identified a 12% discrepancy in overtime pay, indicating potential budget mismanagement.
                        I leveraged libraries such as Pandas, Matplotlib, and Seaborn to develop interactive visualizations that provided valuable insights for improving budget allocation.
                    </p>
                </div>

                <div className="project-card">
                    <h3>AI-driven Sentiment Analysis Suite</h3>
                    <img src="/photos/reading.webp" alt="Reading" width="400px" height="400px" />
                    <p>
                        This project, powered by LangChain, involved building a sentiment analysis tool for corporate feedback processing.
                        By using cutting-edge natural language processing (NLP) techniques, I categorized feedback into actionable insights that improved decision-making for clients. The tool boosted efficiency and accuracy by 25%, and it was successfully integrated into the client's internal systems, providing real-time feedback analytics.
                    </p>
                </div>

                <div className="project-card">
                    <img src="photos/robot.webp" alt="Uber vs Lyft Analysis" width="400px" height="400px" />
                    <h3>Uber vs Lyft Analysis</h3>
                    <p>
                        In Fall 2023, I built a responsive web application using React and Node.js to analyze Uber and Lyft data. The application incorporated user authentication with JWT-based security, increasing login security by 30%. Additionally, I streamlined data tables and developed APIs that allowed users to interact with real-time data, identifying trends such as a 10% increase in ride pricing during severe weather conditions.
                    </p>
                </div>

                <div className="project-card">
                    <img src="photos/website.jpeg" alt="SKANS School Full-Stack Web Application" width="400px" height="400px" />
                    <h3>SKANS School Full-Stack Web Application</h3>
                    <p>
                        This full-stack web application was built to manage the data and operations of SKANS School. Using MongoDB for database management and implementing secure authentication, I optimized the user login experience by 30%. The project also involved API development, handling complex data processing, and creating a user-friendly interface using React and Node.js.
                    </p>
                </div>
                <Calculator />
            </Main>
            <Footer />
        </>
    );
}

export default Projects;