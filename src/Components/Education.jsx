import React, { useEffect, useState } from "react";
import "./Education.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

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
      <VerticalTimeline>
        {education.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            date={<span className="timeline-date-box">{edu.title}</span>}
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#1E90FF", color: "#fff" }}
          
            contentStyle={{
              
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "left",
            }}
            contentArrowStyle={{ borderRight: "7px solid #1E90FF" }}
          >
            <h3 className="vertical-timeline-element-title">{edu.cardTitle}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.cardSubtitle}</h4>
            <p id="sai">{edu.cardDetailedText}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
