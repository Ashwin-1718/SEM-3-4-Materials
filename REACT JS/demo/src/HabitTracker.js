import { useState } from 'react';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');

  const addHabit = () => {
    if (!habitName.trim()) return;

    setHabits([...habits, { name: habitName, streak: 0 }]);
    setHabitName('');
  };

  const incrementStreak = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].streak += 1;
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New habit"
      />
      <button onClick={addHabit}>Add</button>

      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            {habit.name} - {habit.streak} days
            <button onClick={() => incrementStreak(index)}>+</button>
            <button onClick={() => deleteHabit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;