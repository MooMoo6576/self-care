document.addEventListener('DOMContentLoaded', function () {
  // Store images for each section, loaded from localStorage if available
  const images = {
    face: [],
    hair: [],
    workout: []
  };

  function saveImages() {
    localStorage.setItem('progressImages', JSON.stringify(images));
  }

  function loadImages() {
    const saved = localStorage.getItem('progressImages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        images.face = parsed.face || [];
        images.hair = parsed.hair || [];
        images.workout = parsed.workout || [];
      } catch (e) {
        localStorage.removeItem('progressImages');
      }
    }
  }

  function renderGallery(sectionId) {
    const galleryDiv = document.getElementById(`${sectionId}-gallery`);
    if (!galleryDiv) return;
    galleryDiv.innerHTML = images[sectionId].map((src, idx) =>
      `<div class="gallery-img-wrap">
        <img src="${src}" alt="Uploaded" class="progress-preview-img" />
        <button class="remove-btn" onclick="removeImage('${sectionId}', ${idx})">&times;</button>
      </div>`
    ).join('');
  }

  // Load images from localStorage on page load
  loadImages();
  renderGallery('face');
  renderGallery('hair');
  renderGallery('workout');

  // Use a single file input and dropdown for section selection
  window.previewImage = function (event) {
    const sectionId = document.getElementById('section-select').value;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        images[sectionId].push(e.target.result);
        saveImages();
        renderGallery(sectionId);
        event.target.value = '';
      };
      reader.readAsDataURL(file);
    }
  };

  window.removeImage = function (sectionId, idx) {
    images[sectionId].splice(idx, 1);
    saveImages();
    renderGallery(sectionId);
  };

  // Enable horizontal drag-to-scroll and swipe for each gallery
  document.querySelectorAll('.image-gallery').forEach(gallery => {
    let isDown = false, startX, scrollLeft;
    gallery.addEventListener('mousedown', (e) => {
      isDown = true;
      gallery.classList.add('active');
      startX = e.pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
    });
    gallery.addEventListener('mouseleave', () => {
      isDown = false;
      gallery.classList.remove('active');
    });
    gallery.addEventListener('mouseup', () => {
      isDown = false;
      gallery.classList.remove('active');
    });
    gallery.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 1.5;
      gallery.scrollLeft = scrollLeft - walk;
    });
    // Touch events for mobile
    let touchStartX = 0, touchScrollLeft = 0;
    gallery.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = gallery.scrollLeft;
    });
    gallery.addEventListener('touchmove', (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.5;
      gallery.scrollLeft = touchScrollLeft - walk;
    });
  });
});
