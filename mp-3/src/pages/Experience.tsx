import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';

function Experience() {
    return (
        <>
            <Main title="Experience">
                <div className="experience-card">
                    <h3>DuneAI, Islamabad, Pakistan</h3>
                    <h4>Robotics Software Engineer | Jun 2024 - Aug 2024</h4>
                    <ul>
                        <li>Designed and implemented multi-agent pathfinding algorithms and task allocation leveraging C++ and OpenGL, optimizing robot sorting operations on a simulated grid.</li>
                        <li>Constructed a Python barcode scanner to automate task assignment, refining task distribution.</li>
                        <li>Wrote unit tests with Google Test, ensuring code reliability and functionality.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <h3>AheadCare, Doha, Qatar</h3>
                    <h4>Startup Technical Engineer | Jun 2023 - Mar 2024</h4>
                    <ul>
                        <li>Developed an ML Predictive FAQ system using LangChain, enhancing customer interactions by 25%.</li>
                        <li>Streamlined customer database updates operating adaptive learning algorithms, improving real-time response accuracy by 30% and reducing query processing time by 15%.</li>
                        <li>Collaborated with investors to secure $25,000 in funding by presenting key product insights, focusing on the scalability and impact on customer engagement.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <h3>Starlink, Doha, Qatar</h3>
                    <h4>Full Stack Developer | Jun 2022 - Aug 2022</h4>
                    <ul>
                        <li>Led development of Starlink's platform, overhauling performance and increasing sales by 20%.</li>
                        <li>Maintained 99.9% server uptime and optimized database queries, reducing load times by 30%.</li>
                        <li>Directed in a 5-person team to integrate APIs and deploy scalable solutions for seamless performance.</li>
                    </ul>
                </div>
            </Main>
        </>
    );
}

export default Experience;