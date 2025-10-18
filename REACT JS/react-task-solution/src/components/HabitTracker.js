import { useState } from 'react';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');
  const [streaks, setStreaks] = useState({});

  const addHabit = () => {
    if (habitName.trim()) {
      const newHabits = [...habits, habitName];
      setHabits(newHabits);
      setStreaks({...streaks, [habitName]: 0});
      setHabitName('');
    }
  };

  const incrementStreak = (habit) => {
    setStreaks(prev => ({...prev, [habit]: (prev[habit] || 0) + 1}));
  };

  const deleteHabit = (habitToDelete) => {
    setHabits(habits.filter(habit => habit !== habitToDelete));
    setStreaks(prev => {
      const newStreaks = {...prev};
      delete newStreaks[habitToDelete];
      return newStreaks;
    });
  };

  return (
    <div className="component">
      <input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New habit"
      />
      <button onClick={addHabit}>Add Habit</button>
      
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            {habit} - Streak: {streaks[habit] || 0} days
            <button onClick={() => incrementStreak(habit)}>+</button>
            <button onClick={() => deleteHabit(habit)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;