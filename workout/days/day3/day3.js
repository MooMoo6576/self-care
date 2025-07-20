const exercises = [
  { name: "Squat to Overhead Press", reps: "3 x 12" },
  { name: "Romanian Deadlift", reps: "3 x 12" },
  { name: "Incline Push-Ups", reps: "3 x 15" },
  { name: "Jumping Jacks", reps: "3 x 30 sec" },
  { name: "Cable Woodchoppers", reps: "3 x 15" },
  { name: "Step-Through-Lunges", reps: "3 x 12 each leg" },
  { name: "Toe-Taps on Ball", reps: "3 x 20" },
  { name: "Plank", reps: "3 x 45 sec" }
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