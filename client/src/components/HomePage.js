import React from 'react';
import '../style/HomePage.css'; 

const HomePage = ({ name, setName, handleStart }) => {
    return (
        <div className="homepage-container">  
            <h1>เกมปริมาณสารสัมพันธ์</h1>
            <input
                type="text"
                placeholder="ใส่ชื่อนักเรียน"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleStart}>เริ่มเกม</button>
        </div>
    );
};

export default HomePage;
