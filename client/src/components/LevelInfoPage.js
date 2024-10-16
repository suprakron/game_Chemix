import React from 'react';






const LevelInfoPage = ({ handleSubmitAnswer }) => {
    return (
        <div className="level1-container">
            <div className="card-container">

                <div className="card">
                    <h3>Level Info </h3>


                    <div className="answer-section">
                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>a</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>b</span>
                            </div>
                        </div>
                    </div>
                    <div className="button-section">
                        <button>ปุ่ม 1</button>
                        <button>ปุ่ม 2</button>
                        <button>ปุ่ม 3</button>
                    </div>
                </div>
 
            </div>
            <button className="submit-btn" onClick={handleSubmitAnswer}>
                ส่งคำตอบ
            </button>
        </div>
    );
};



export default LevelInfoPage;
