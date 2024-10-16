import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LevelInfoPage from './components/LevelInfoPage';
import Level1Page from './components/Level1Page';
import Level2Page from './components/Level2Page';
import Level3Page from './components/Level3Page';

function App() {
  const [name, setName] = useState('');  
  const [score, setScore] = useState(0);  
  const [problemLevel, setProblemLevel] = useState(1);  
  const [stars, setStars] = useState(0);  
  const [message, setMessage] = useState('');  
  const [gameStarted, setGameStarted] = useState(false);  

  // คะแนนในแต่ละเลเวล
  const [levelScores, setLevelScores] = useState([0, 0, 0]);

  const handleStart = () => {
    setGameStarted(true);  
    setProblemLevel(1);
    setStars(0);
    setScore(0);
    setMessage('');
    setLevelScores([0, 0, 0]);  
  };

  const handleSubmitAnswer = () => {
    const currentScore = 3;  
    setStars(currentScore);
    setScore(score + currentScore);
    setLevelScores((prev) => {
      const newScores = [...prev];
      newScores[problemLevel - 1] += currentScore;  
      return newScores;
    });
    setMessage('คำตอบถูกต้อง!');

 
    setProblemLevel((prev) => prev + 1);
  };

  const handleFinishGame = () => {
    if (!name) {
      setMessage('กรุณาใส่ชื่อก่อนบันทึกคะแนน');
      return;
    }
 
    fetch('http://localhost:5001/addScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, score }), 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Score added:', data);
        setMessage('คะแนนรวมถูกบันทึกเรียบร้อยแล้ว!');
      })
      .catch((err) => {
        console.error('Error:', err);
        setMessage('เกิดข้อผิดพลาดในการบันทึกคะแนน');
      });
  };

  return (
    <div className="App">
      {!gameStarted ? (
        // หน้าหลักจะแสดงก่อนเริ่มเกม
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
      ) : (
        // หลังจากที่กด "เริ่มเกม" จะนำไปยังเนื้อหาของเกม
        <>
          {/* <LevelInfoPage problemLevel={problemLevel} /> */}
          {problemLevel === 1 && <Level1Page handleSubmitAnswer={handleSubmitAnswer} />}
          {problemLevel === 2 && <Level2Page handleSubmitAnswer={handleSubmitAnswer} />}
          {problemLevel === 3 && <Level3Page handleSubmitAnswer={handleSubmitAnswer} />}
          {problemLevel > 3 && (
            <>
              <h2>คุณทำโจทย์ครบแล้ว!</h2>
              <button onClick={handleFinishGame}>บันทึกคะแนน</button>
            </>
          )}
          {/* แสดงคะแนน */}
          <p>คะแนนของคุณ: {stars} ดาว</p>
          <p>คะแนนในระดับ 1: {levelScores[0]}</p>
          <p>คะแนนในระดับ 2: {levelScores[1]}</p>
          <p>คะแนนในระดับ 3: {levelScores[2]}</p>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
}

export default App;
