// src/App.js
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for timer logic
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);
  const [breakSuggestion, setBreakSuggestion] = useState('');

  // Break suggestions array
  const breakActivities = [
    "Do 10 jumping jacks! 🏋️",
    "Try 2 minutes of box breathing 🌬️"
  ];

  // Timer logic
  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerEnd();
    }
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleTimerEnd = () => {
    setIsRunning(false);
    setBreakSuggestion(breakActivities[Math.floor(Math.random() * breakActivities.length)]);
    setCyclesCompleted((prev) => prev + 1);
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      {/* Timer Display */}
      <div className="timer-display">
        <h1>{formatTime(timeLeft)}</h1>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => setTimeLeft(25 * 60)}>Reset</button>
      </div>

      {/* Break Suggestion */}
      {breakSuggestion && (
        <div className="break-suggestion">
          <p>{breakSuggestion}</p>
        </div>
      )}

      {/* Affiliate Link */}
      {cyclesCompleted >= 3 && (
        <div className="affiliate-prompt">
          <p>
            Want deeper focus?{" "}
            <a
              href="https://realgeniuswave.com/DSvsl/?aff=anl210&cam=GP1&pid=vsl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try GeniusWave →
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
// Inside the App component
const [settings, setSettings] = useState({
  workMins: 25,
  breakMins: 5,
});

// Update timeLeft when settings change
useEffect(() => {
  setTimeLeft(settings.workMins * 60);
}, [settings.workMins]);

// Add to JSX:
<div className="settings">
  <label>
    Work (mins):
    <input
      type="number"
      value={settings.workMins}
      onChange={(e) => setSettings({...settings, workMins: e.target.value})}
    />
  </label>
  <label>
    Break (mins):
    <input
      type="number"
      value={settings.breakMins}
      onChange={(e) => setSettings({...settings, breakMins: e.target.value})}
    />
  </label>
</div>