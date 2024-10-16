const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

const dbDir = path.resolve(__dirname, './database');

// ตรวจสอบว่าโฟลเดอร์ฐานข้อมูลมีอยู่หรือไม่
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir); // สร้างโฟลเดอร์ถ้ายังไม่มี
  console.log('Database directory created.');
}

const dbPath = path.resolve(dbDir, 'students.db');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
  console.log('Database file created.');
}

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the students database.');
    db.run(`CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      score INTEGER NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Error creating table:', err.message);
      } else {
        console.log('Students table created or already exists.');
      }
    });
  }
});

app.post('/addScore', (req, res) => {
  const { name, score } = req.body;
  if (typeof name !== 'string' || typeof score !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const query = `INSERT INTO students (name, score) VALUES (?, ?)`;
  db.run(query, [name, score], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error adding score' });
    }
    res.json({ message: 'Score added successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('Database path:', dbPath);

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing the database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
