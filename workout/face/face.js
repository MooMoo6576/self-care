document.addEventListener('DOMContentLoaded', function () {
  const sections = [
    {
      title: "Face Rituals & Massage Guide",
      instructions: [
        "Use light oil or moisturizer for glide.",
        "3–5x/week"
      ]
      // No reps property!
    },
    {
      title: "Lymphatic Drainage Massage",
      img: "lymphatic.jpg",
      instructions: [
        "Open lymph: gently rub collarbones, sides of neck, and under ears",
        "Sweep fingers from chin → jaw → ears (each side)",
        "Sweep fingers from cheeks → temples",
        "Stroke from behind ears → down sides of neck to collarbone"
      ],
      reps: [
        "3x3"
      ]
    },
    {
      title: " Deep Jawline Sculpting Massage",
      img: "jawline.jpg",
      instructions: [
        "Use your knuckles to gently massage along the jawline in slow circular motions.",
        "Then pinch and roll the skin along the jaw to help boost circulation."
      ],
      reps: [
        "30 seconds each side"
      ]
    },
    {
      title: " Gua Sha Instructions",
      img: "gua-sha.jpg",
      instructions: [
        "<strong>Jawline & Chin:</strong> Stroke from chin → jaw → ear",
        "Stroke under ear → down side of neck (for lymphatic drainage)",
        "<strong>Cheeks & Mid-face:</strong> Sweep from nose → across cheekbones → temples",
        "Sweep under eye → temple (very gently)",
        "<strong>Neck Routine:</strong> Stroke down the neck: Behind your ears to the collarbone. Best done after cleansing, morning or night."
      ],
      reps: [
        " 5–10 times each side",
        "x5",
        " 5–10 times",
        "x5",
        " 5–10 times per side"
      ]
    },
    {
      title: " Jaw + Chin Exercises",
      img: "jaw-chin.jpg",
      instructions: [
        "<strong>Chin Lift:</strong> Push your lower jaw forward and lift your chin.",
        "<strong>Tongue Press:</strong> Flatten your tongue against the roof of your mouth and say “Mmm.”"
      ],
      reps: [
        " Hold for 10 seconds, repeat 10 times",
        " Repeat 10 times"
      ]
    },
    {
      title: " Cheeks + Midface",
      img: "cheeks.jpg",
      instructions: [
        "<strong>Cheek \"O\" and \"E\":</strong> Exaggerate these vowel sounds.",
        "<strong>Fish Face:</strong> Suck in your cheeks and hold."
      ],
      reps: [
        " 3 sets of 15 reps",
        "Hold for 10 seconds, 5 times"
      ]
    },
    {
      title: " Neck + Lower Face",
      img: "neck.jpg",
      instructions: [
        "<strong>Neck Curl-Up:</strong> Lie flat, tuck in your chin, and lift your head.",
        "<strong>Double Chin Pulls:</strong> Slide head backwards (like making a double chin)"
      ],
      reps: [
        " 10 reps",
        " 3x10"
      ]
    }
  ];

  const container = document.querySelector('.face-content');

  // Render the first section as a table with only instructions, title in white
  const first = sections[0];
  const plain = document.createElement('section');
  plain.style.textAlign = "center";
  plain.innerHTML = `<h2 style="color:#fff">${first.title}</h2>
    <div class="face-card-table-wrap">
      <table class="face-card-table">
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

  // Render the rest as cards (with images if present)
  sections.slice(1).forEach(sec => {
    const card = document.createElement('section');
    card.className = 'face-card';

    const maxRows = Math.max(
      sec.instructions ? sec.instructions.length : 0,
      sec.reps ? sec.reps.length : 0
    );

    let rows = '';
    for (let i = 0; i < maxRows; i++) {
      rows += `
        <tr>
          <td>${sec.instructions && sec.instructions[i] ? sec.instructions[i] : ''}</td>
          <td>${sec.reps && sec.reps[i] ? sec.reps[i] : ''}</td>
        </tr>
      `;
    }

    card.innerHTML = `
      ${sec.img ? `<div class="face-card-img-wrap"><img src="${sec.img}" alt="${sec.title}" class="face-card-img"></div>` : ''}
      <h2>${sec.title}</h2>
      <div class="face-card-table-wrap">
        <table class="face-card-table">
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