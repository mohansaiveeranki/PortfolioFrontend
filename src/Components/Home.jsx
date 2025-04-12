import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./home.css";

let Home = () => {
    const [profileData, setProfileData] = useState(null);

    const fetchTheData = async () => {
        try {
            const response = await fetch("./profileData/home.json");
            const data = await response.json();
            setProfileData(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchTheData();
    }, []);

    return (
        <div className="home-Container" id="home">
            {profileData ? (
                <div className="child-Container">
                    <h1 id="name">{profileData.name}</h1>
                    <h2 >I'm&nbsp;
                    <span className="role"> 
                        <Typewriter 
                            options={{
                                strings: profileData.roles,
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                
                            }}
                        />
                    </span>
                    </h2>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;