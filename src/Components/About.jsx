import { useEffect, useState } from "react";
import "./about.css"

let About=()=>{
    let [about,setAbout]=useState(null);
     let fetchTheData=async ()=>{
         try {
            let response= await fetch("./profileData/about.json");
            let data=await response.json();
            setAbout(data);
         } catch (error) {
              console.error("Error fetching data:",error);
         }

     }
     useEffect(()=>{
         fetchTheData();
     },[])
   return (
     <div className="about-container" id="about">
       <h1>About Me</h1>
       {about ? (
         <>
           <div className="child-container">
             <div className="about-container">
               <p>{about.about}</p>
               <a
                 href={about.resumeLink}
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <button>Resume</button>
               </a>
             </div>
             <div className="image-container">
               <img src={about.imageSource} alt="sai.png" />
             </div>
           </div>
           <div className="subchild-containter"></div>
         </>
       ) : (
         <p>Loading...</p>
       )}
     </div>
   );
}
export default About;
