const exercises = [
  { name: "Bird Dog Holds (2 seconds)", reps: "3 x 12" },
  { name: "Dumbbell Deadlifts", reps: "3 x 12" },
  { name: "Cable Pull Through or Stability Ball Glute Raise", reps: "3 x 15" },
  { name: "Wall Angels", reps: "3 x 15" },
  { name: "Dead Bug", reps: "3 x 20" },
  { name: "Side Plank + Leg Raise", reps: "3 x 12 each side" },
  { name: "Weighted Standing Oblique Crunch", reps: "3 x 15" },
  { name: "Bridge Hold", reps: "3 x 45 sec" }
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