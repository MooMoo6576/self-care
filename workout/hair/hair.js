document.addEventListener('DOMContentLoaded', function () {
  const steps = [
    {
      title: "💧 Dry Ends Rescue Plan (No More Cutting Needed)",
      instructions: [
        "This plan helps you rescue dry ends without cutting!"
      ]
      // No reps property for the header
    },
    {
      title: "🧴 1. Moisturize + Seal Every 2–3 Days",
      img: "moisturize.jpg",
      instructions: [
        "Lightly mist ends with water or a leave-in spray.",
        "Smooth in a pea-sized amount of conditioner (your CeraVe will work).",
        "Seal with 1 drop of castor oil — rub between fingers and pat on ends only.",
        "This locks moisture in and prevents that \"crispy\" feel you’re getting."
      ],
      reps: [
        "Every 2–3 days"
      ]
    },
    {
      title: "🧖‍♀ 2. Weekly Deep Repair Session (1x/week)",
      img: "deep-repair.jpg",
      instructions: [
        "<strong>Option A: Hot Oil Treatment (Ends Only)</strong>",
        "Warm up a little castor oil.",
        "Apply to ends, braid loosely, and leave on for 30–60 mins.",
        "Shampoo gently and condition after.",
      ],
      reps: [
        "Once per week"
      ]
    },
    {
      title: "🚿 3. Wash Day Adjustments",
      img: "wash-day.jpg",
      instructions: [
        "When using your CeraVe conditioner, apply a second layer just to the ends.",
        "Let it sit for 5+ minutes.",
        "Finish with a cool rinse to seal the cuticle."
      ],
      reps: [
        "On wash days"
      ]
    }
  ];

  const container = document.querySelector('.hair-content');

  // Render the first section as a table with only instructions
  const first = steps[0];
  const plain = document.createElement('section');
  plain.style.textAlign = "center";
  plain.innerHTML = `<h2>${first.title}</h2>
    <div class="hair-card-table-wrap">
      <table class="hair-card-table">
        <tr>
          <th>Instructions</th>
        </tr>
        ${first.instructions.map(item => `
          <tr>
            <td>${item}</td>
          </tr>
        `).join('')}
      </table>
    </div>`;
  container.appendChild(plain);

  // Render the rest as cards with table layout (instructions + reps)
  steps.slice(1).forEach(step => {
    const card = document.createElement('section');
    card.className = 'hair-card';

    const maxRows = Math.max(step.instructions.length, step.reps ? step.reps.length : 0);

    let rows = '';
    for (let i = 0; i < maxRows; i++) {
      rows += `
        <tr>
          <td>${step.instructions[i] ? step.instructions[i] : ''}</td>
          <td>${step.reps && step.reps[i] ? step.reps[i] : ''}</td>
        </tr>
      `;
    }

  card.innerHTML = `
  ${step.img ? `<div class="hair-card-img-wrap"><img src="${step.img}" alt="${step.title}" class="hair-card-img"></div>` : ''}
  <h2>${step.title}</h2>
  <div class="hair-card-table-wrap">
    <table class="hair-card-table">
      <tr>
        <th>Instructions</th>
        <th>Reps</th>
      </tr>
      ${rows}
    </table>
  </div>
`;
    container.appendChild(card);
  });
});