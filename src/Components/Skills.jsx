import { useEffect, useState } from "react";
import "./Skills.css"; 

const Skills = () => {
    const [skills, setSkills] = useState(null);

    const fetchTheData = async () => {
        try {
            let response = await fetch("./profileData/skills.json");
            let data = await response.json();
            setSkills(data.skills);
        } catch (error) {
            console.error("Error fetching skills data:", error);
        }
    };

    useEffect(() => {
        fetchTheData();
    }, []);

    return (
      <div className="skills-container" id="skills">
        <h1>Skills</h1>
        {skills && (
          <div className="grid-container">
          
            <div className="skills-section">
              <h3>{skills[0].title}</h3>
              <div className="skills-items">
                {skills[0].items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3>{skills[1].title}</h3>
              <div className="skills-items">
                {skills[1].items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="skills-row">
                       
                       
                    </div> */}
            <div className="skills-section">
              <h3>{skills[2].title}</h3>
              <div className="skills-items">
                {skills[2].items.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <img src={skill.icon} alt={skill.title} />
                    <p>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="skills-row">
                        
                    </div> */}
          </div>
        )}
      </div>
    );
};

export default Skills;
