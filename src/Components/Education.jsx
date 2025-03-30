import React, { useEffect, useState } from "react";
import "./Education.css";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("./profileData/education.json");
        const data = await response.json();
        setEducation(data.education);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchEducationData();
  }, []);

  return (
    <div className="education-container" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
           
            
            <div className="timeline-date">{edu.title}</div>

            
            <div className="timeline-content">
              <h3 className="timeline-title">{edu.cardTitle}</h3>
              <h4 className="timeline-subtitle">{edu.cardSubtitle}</h4>
              <p>{edu.cardDetailedText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
