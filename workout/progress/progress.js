// Requires: <script src="https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/idb-keyval.iife.js"></script> in your HTML <head>
document.addEventListener('DOMContentLoaded', function () {
  // Save image to IndexedDB (no resizing, just store the file as-is)
  window.previewImage = function (event, sectionId) {
    const file = event.target.files[0];
    if (!file) return;
    // Store as Blob in IndexedDB
    idbKeyval.set(`${sectionId}-image-${Date.now()}`, file).then(() => {
      renderGalleryFromIDB(sectionId);
      event.target.value = '';
    });
  };

  // Render images from IndexedDB for a section
  function renderGalleryFromIDB(sectionId) {
    const galleryDiv = document.getElementById(`${sectionId}-gallery`);
    if (!galleryDiv) return;
    idbKeyval.keys().then(keys => {
      // Only keys for this section
      const sectionKeys = keys.filter(key => typeof key === "string" && key.startsWith(sectionId + '-image-'));
      if (sectionKeys.length === 0) {
        galleryDiv.innerHTML = '<div class="gallery-empty">No images yet.</div>';
        return;
      }
      Promise.all(sectionKeys.map(key =>
        idbKeyval.get(key).then(blob => {
          if (!blob) return '';
          const url = URL.createObjectURL(blob);
          return `<div class="gallery-img-wrap">
            <img src="${url}" alt="Uploaded" class="progress-preview-img" />
            <button class="remove-btn" onclick="removeImageIDB('${key}', '${sectionId}')">&times;</button>
          </div>`;
        })
      )).then(imgHtmlArr => {
        galleryDiv.innerHTML = imgHtmlArr.filter(Boolean).join('');
      });
    });
  }

  // Remove image from IndexedDB
  window.removeImageIDB = function (key, sectionId) {
    idbKeyval.del(key).then(() => {
      renderGalleryFromIDB(sectionId);
    });
  };

  // On page load, render all galleries from IndexedDB
  ['face', 'hair', 'workout'].forEach(renderGalleryFromIDB);

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
