const exercises = [
  { name: "Smith Machine Hip Thrusts", reps: "3 x 15" },
  { name: "Frog Pumps", reps: "3 x 20" },
  { name: "Dumbbell Sumo Squats Pulse", reps: "3 x 15" },
  { name: "Glute March", reps: "3 x 20" },
  { name: "Cable Standing Crunch", reps: "3 x 15" },
  { name: "Stability Ball Crunch", reps: "3 x 20" },
  { name: "Side Plank Reach-Unders", reps: "3 x 12 each side" },
  { name: "Heel Taps", reps: "3 x 20" }
];
const container = document.getElementById('exercises');
const table = document.createElement('table');
table.className = 'exercise-table';
table.innerHTML = `<tr><th>Exercise</th><th>Reps</th></tr>`;
exercises.forEach(ex => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${ex.name}</td><td>${ex.reps}</td>`;
  table.appendChild(row);
});
container.appendChild(table);