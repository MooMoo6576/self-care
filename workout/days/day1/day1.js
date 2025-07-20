const exercises = [
      { name: "Dumbbell Goblet Squats", reps: "3 x 12" },
      { name: "Smith Machine Glute Bridges", reps: "3 x 15" },
      { name: "Reverse Lunges", reps: "3 x 10 each leg" },
      { name: "Glute Kickbacks on Ball", reps: "3 x 15" },
      { name: "Step-Ups (bench)", reps: "3 x 12 each leg" },
      { name: "Single-Leg Dumbbell Deadlifts", reps: "3 x 10 each leg" },
      { name: "Sumo Squats", reps: "3 x 15" },
      { name: "Wall Sit", reps: "3 x 45 sec" }
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