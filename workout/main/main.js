const workouts = [
  {
    day: "Day 1",
    title: "Glutes & Legs",
    image: "../days/day1/day1.jpg"
  },
  {
    day: "Day 2",
    title: "Back, Arms & Core",
    image: "../days/day2/day2.jpg"
  },
  {
    day: "Day 3",
    title: "Full Body Strength",
    image: "../days/day3/day3.jpg"
  },
  {
    day: "Day 4",
    title: "Glutes & Abs",
    image: "../days/day4/day4.jpg"
  },
  {
    day: "Day 5",
    title: "Core & Light Strength",
    image: "../days/day5/day5.jpg"
  }
];

const cardContainer = document.getElementById('card-container');

workouts.forEach((workout, idx) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.addEventListener('click', function() {
    window.location.href = `../days/day${idx + 1}/day${idx + 1}.html`;
  });

  // Add image
  const img = document.createElement('img');
  img.src = workout.image;
  img.alt = workout.title;
  img.className = 'exercise-img';
  card.appendChild(img);

  // Add title
  const title = document.createElement('h2');
  title.textContent = `${workout.day}: ${workout.title}`;
  card.appendChild(title);

  // Append card to the single container
  if (cardContainer) {
    cardContainer.appendChild(card);
  }
});

// Start Cardio button (if using an <a> or <button> with id="start-pause-btn")
const startBtn = document.getElementById('start-pause-btn');
if (startBtn) {
  startBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'timer.html';
  });
}