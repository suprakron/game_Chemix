import React from 'react';

const Level3Page = ({ handleSubmitAnswer }) => {
    return (
        <div className="level1-container">
            <div className="card-container">

                <div className="card">
                    <h3>โจทย์ระดับที่ 3</h3>

                    <div className="question-content">
                        <p>ใส่โจทย์เฉพาะของ Card 1 ที่นี่</p>
                    </div>

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
             

                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>c</span>
                            </div>
                        </div>

                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>d</span>
                            </div>
                        </div>

                      
                
                    </div>


                    <div className="button-section">
                        <button>ปุ่ม 1</button>
                        <button>ปุ่ม 2</button>
                        <button>ปุ่ม 3</button>
                    </div>
                </div>



                <div className="card">
                    <h3>โจทย์ระดับที่ 1: Card 1</h3>
                    <div className="question-content">
                        <p>ใส่โจทย์เฉพาะของ Card 1 ที่นี่</p>
                    </div>


                    <div className="answer-section">
                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>b</span>
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

                        <div className="container">
                            <div className="rectangle">
                                <input type="text" className="input-field" placeholder="กรอกข้อมูลที่นี่" />
                            </div>
                            <div className="circle">
                                <span>b</span>
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


export default Level3Page;
