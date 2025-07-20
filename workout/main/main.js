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

const completed = {};
const cardContainer = document.getElementById('card-container');

// Render cards
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');

workouts.forEach((workout, idx) => {
  const card = document.createElement('div');
  card.className = 'card';
  
card.addEventListener('click', function() {
  // e.g., day1.html, day2.html, etc.
  window.location.href = `day${idx + 1}.html`;
});

  // Add image at the top of the card
  const img = document.createElement('img');
  img.src = workout.image; // Replace with your image path or logic
  img.alt = workout.title;
  img.className = 'exercise-img';
  card.appendChild(img);

  // Add title
  const title = document.createElement('h2');
  title.textContent = `${workout.day}: ${workout.title}`;
  card.appendChild(title);

   // Make card clickable
 card.addEventListener('click', function() {
    window.location.href = `../days/day${idx + 1}/day${idx + 1}.html`;
  });

  // Append card to the appropriate row or container
  if (topRow && bottomRow) {
    if (idx < Math.ceil(workouts.length / 2)) {
      topRow.appendChild(card);
    } else {
      bottomRow.appendChild(card);
    }
  } else if (cardContainer) {
    cardContainer.appendChild(card);
  }
});

//button to start timer
document.getElementById('start-timer').addEventListener('click', function() {
  window.location.href = 'timer.html';
});
