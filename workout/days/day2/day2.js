const exercises = [
  { name: "Cable Lat Pulldown", reps: "3 x 12" },
  { name: "Dumbbell Rows", reps: "3 x 12" },
  { name: "Dumbbell Bicep Curls", reps: "3 x 12" },
  { name: "Cable Face Pulls", reps: "3 x 15" },
  { name: "Dumbbell Arnold Press", reps: "3 x 10" },
  { name: "Cable Tricep Pushdown", reps: "3 x 15" },
  { name: "Russian Twists", reps: "3 x 20" },
  { name: "Plank with Shoulder Taps", reps: "3 x 30 sec" }
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