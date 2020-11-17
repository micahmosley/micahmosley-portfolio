import React, { useEffect } from 'react';
import '../styles/about.css';
import picture from '../images/micah.jpg';
import Aos from 'aos';

    const About = () => {
        useEffect(() => {
            Aos.init({ duration: 3000 })
        }, [])
        return (

            <div className="about">
                <h1 className="about-title">About Me</h1><br></br>
                <h1 className="about-job">Software Engineer/Web Developer</h1>
                <h3 className="degree">Degree: <span>B.S. Petroleum Engineering</span></h3>
                <h3 className="university">College: <span>University of Texas at Austin</span></h3>
                <h3 className="email" href="mailto:micah.mosley@utexas.edu">Email: <span>micah.mosley@utexas.edu</span></h3>
                <h3 className="phone">Phone: <span>469-442-7032</span></h3>
                <img data-aos='fade-up-right' id="micah" src={picture} alt="Micah" />
                <p className="about-summary">Hello, my name is Micah Mosley. If you are in need of a software engineer with strong analytical and problem-solving skills that works well with others, I am the person for the job. After graduating from the University of Texas at Austin with a B.S. in Petroleum Engineering I spent the following three years honing my analytical, team-work, and problem-solving skills through challenging technical projects as a field engineer. I am a very detail-oriented person and am confident in my ability to write production ready code that is easy to understand for other developers on the team. Having collaborated in engineering teams on technical projects in the past I am also highly capable of dealing with different personalities and ensuring clear communication so that work is completed in an efficient manner.</p>

                <div className="skills">
                    <h3 id="skills-title">Languages/Frameworks</h3>
                    <p id="skills-list">React.js<span>|</span>Ruby on Rails<span>|</span>Javascript<span>|</span>Redux<span>|</span>HTML5<span>|</span>CSS3<span>|</span>SQL<span>|</span>PostgreSQL<span>|</span>Python<span>|</span>MATLAB<span>|</span>Git/Github</p>
                </div>

            </div>


        )
    }


export default About