// Videos page functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchVideos');
  const videoGrid = document.getElementById('videoGrid');
  const categoryItems = document.querySelectorAll('.toc-item');
  let currentCategory = 'all';

  // Search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    filterVideos(searchTerm, currentCategory);
  });

  // Category filtering
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      categoryItems.forEach(cat => cat.classList.remove('active'));
      // Add active class to clicked item
      this.classList.add('active');
      
      currentCategory = this.dataset.category;
      const searchTerm = searchInput.value.toLowerCase();
      filterVideos(searchTerm, currentCategory);
      updateCounts();
    });
  });

  // Video click functionality
  videoGrid.addEventListener('click', function(e) {
    const videoItem = e.target.closest('.video-item');
    if (videoItem) {
      const title = videoItem.querySelector('.video-title').textContent;
      const videoElement = videoItem.querySelector('video');
      const source = videoElement.querySelector('source');
      
      if (source && source.src) {
        // Create a modal to play the video
        openVideoModal(title, source.src);
      } else {
        alert(`Video file not found for: ${title}`);
      }
    }
  });

  // Function to open video modal
  function openVideoModal(title, videoSrc) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.video-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'video-modal active';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-modal">&times;</button>
        <h3 class="modal-title">${title}</h3>
        <video controls autoplay style="width: 100%; max-width: 800px; height: auto;">
          <source src="${videoSrc}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;

    // Add modal to document
    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const modalBg = modal;

    closeBtn.addEventListener('click', closeModal);
    modalBg.addEventListener('click', function(e) {
      if (e.target === modalBg) {
        closeModal();
      }
    });

    function closeModal() {
      modal.classList.remove('active');
      setTimeout(() => {
        if (modal.parentNode) {
          modal.parentNode.removeChild(modal);
        }
      }, 300);
    }

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  function filterVideos(searchTerm, category) {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
      const title = item.querySelector('.video-title').textContent.toLowerCase();
      const description = item.querySelector('.video-description').textContent.toLowerCase();
      const itemCategory = item.dataset.category;
      
      const matchesSearch = searchTerm === '' || 
                           title.includes(searchTerm) || 
                           description.includes(searchTerm);
      const matchesCategory = category === 'all' || itemCategory === category;
      
      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Initialize video metadata and thumbnails
  initializeVideoMetadata();
  
  function initializeVideoMetadata() {
    const videoItems = document.querySelectorAll('.video-item');
    console.log('Found', videoItems.length, 'video items');
    
    videoItems.forEach((item, index) => {
      const video = item.querySelector('video');
      const durationElement = item.querySelector('.video-duration');
      const placeholder = item.querySelector('.video-placeholder');
      
      if (video && durationElement) {
        console.log(`Initializing video ${index + 1}:`, video.currentSrc || video.src);
        
        video.addEventListener('loadedmetadata', function() {
          console.log(`Video ${index + 1} metadata loaded. Duration:`, this.duration);
          
          if (this.duration && !isNaN(this.duration) && this.duration > 0) {
            // Update duration display
            const minutes = Math.floor(this.duration / 60);
            const seconds = Math.floor(this.duration % 60);
            durationElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Seek to 10% for thumbnail
            if (this.duration > 2) {
              this.currentTime = Math.min(this.duration * 0.1, 3);
            }
          } else {
            durationElement.textContent = '--:--';
          }
        });
        
        video.addEventListener('seeked', function() {
          console.log(`Video ${index + 1} seeked to:`, this.currentTime);
          // Show video thumbnail, hide placeholder
          this.style.display = 'block';
          this.classList.add('loaded');
          if (placeholder) {
            placeholder.style.display = 'none';
          }
        });
        
        video.addEventListener('error', function(e) {
          console.error(`Video ${index + 1} error:`, e);
          durationElement.textContent = 'Error';
          // Keep placeholder visible on error
        });
        
        // Start loading
        video.load();
      }
    });
  }
});
