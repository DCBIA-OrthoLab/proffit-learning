// Videos page functionality - Optimized version
document.addEventListener('DOMContentLoaded', function() {
  const videoGrid = document.getElementById('videoGrid');
  const pageTitle = document.getElementById('pageTitle');
  const categoryItems = document.querySelectorAll('.toc-item');
  const mobileMenuToggle = document.getElementById('categoriesMenuToggle');
  const mobileMenu = document.getElementById('videosCategoriesMenu');
  const mobileCategories = document.querySelectorAll('.category-item');
  let currentCategory = 'all';
  let videosData = [];

  // Category names mapping
  const categoryNames = {
    'all': 'All Videos',
    'psychosocial-aspects': 'Psychologic and Psychosocial Aspects',
    'oral-pharyngeal-function': 'Oral-Pharyngeal Function',
    'biomechanics': 'Biomechanics',
    'diagnosis-treatment-planning': 'Diagnosis / Treatment Planning',
    'growth-development': 'Growth and Development',
    'surgical-ortho': 'UNC Surg-Ortho Course for Residents',
    'third-molar-management': 'Third Molar Management',
    'other': 'Other'
  };

  // Count videos by category
  function updateCategoryCounts() {
    const categoryCounts = {};
    videosData.forEach(video => {
      const category = video.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    
    // Update desktop categories
    categoryItems.forEach(item => {
      const category = item.dataset.category;
      let countSpan = item.querySelector('.count');
      if (!countSpan) {
        countSpan = document.createElement('span');
        countSpan.className = 'count';
        item.appendChild(countSpan);
      }
      if (category === 'all') {
        countSpan.textContent = ` (${videosData.length})`;
      } else {
        countSpan.textContent = ` (${categoryCounts[category] || 0})`;
      }
    });
    
    // Update mobile categories
    mobileCategories.forEach(item => {
      const category = item.dataset.category;
      let countSpan = item.querySelector('.count');
      if (!countSpan) {
        countSpan = document.createElement('span');
        countSpan.className = 'count';
        item.appendChild(countSpan);
      }
      if (category === 'all') {
        countSpan.textContent = ` (${videosData.length})`;
      } else {
        countSpan.textContent = ` (${categoryCounts[category] || 0})`;
      }
    });
  }

  // Load videos data from JSON
  async function loadVideos() {
    try {
      const response = await fetch('data/videos.json');
      videosData = await response.json();
      
      // Sort videos by title alphabetically
      videosData.sort((a, b) => a.title.localeCompare(b.title));
      
      updateCategoryCounts();
      renderVideos(videosData);
      setupSearch();
      setupVideoClickHandlers();
      
      // Set default category to 'all'
      currentCategory = 'all';
      updatePageTitle('all');
      categoryItems.forEach(item => {
        if (item.dataset.category === 'all') {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      mobileCategories.forEach(item => {
        if (item.dataset.category === 'all') {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    } catch (error) {
      console.error('Error loading videos:', error);
      videoGrid.innerHTML = '<p>Error loading videos. Please try again later.</p>';
    }
  }

  // Generate video HTML from data
  function renderVideos(videos) {
    videoGrid.innerHTML = videos.map(video => `
      <div class="video-item" 
           data-category="${video.category}" 
           data-library-id="${video.libraryId}" 
           data-video-id="${video.id}">
        <div class="video-thumbnail">
          <img class="bunny-thumb" 
               src="${video.thumbnail}" 
               alt="${video.title}"
               loading="lazy">
          <div class="play-button">▶</div>
          <div class="video-duration">
            <i class="fas fa-clock"></i>
            <span class="duration-value">${video.duration}</span>
          </div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${video.title}</h3>
          <div class="video-meta"></div>
        </div>
      </div>
    `).join('');
  }

  // Setup search functionality
  function setupSearch() {
    const searchInputMobile = document.getElementById('searchVideos');
    const searchInputDesktop = document.getElementById('searchVideosDesktop');

    if (searchInputMobile) {
      searchInputMobile.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterVideos(searchTerm, currentCategory);
      });
    }
    
    if (searchInputDesktop) {
      searchInputDesktop.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterVideos(searchTerm, currentCategory);
      });
    }
  }

  // Setup video click handlers for thumbnail - Lazy load iframes
  function setupVideoClickHandlers() {
    const videoGrid = document.getElementById('videoGrid');
    
    videoGrid.addEventListener('click', function(e) {
      const thumbnail = e.target.closest('.video-thumbnail');
      if (!thumbnail) return;

      // Check if video is already loaded
      if (thumbnail.querySelector('iframe')) {
        return; // Already loaded
      }

      // Get parent video-item to find IDs
      const videoItem = thumbnail.closest('.video-item');
      const libId = videoItem.getAttribute('data-library-id');
      const vidId = videoItem.getAttribute('data-video-id');

      if (!libId || !vidId) return;

      // Create iframe for Bunny
      const iframe = document.createElement('iframe');
      iframe.src = `https://iframe.mediadelivery.net/embed/${libId}/${vidId}?autoplay=true&loop=false&muted=false&preload=true`;
      iframe.loading = 'lazy';
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.borderRadius = '10px';
      iframe.allow = "accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;";
      iframe.allowFullscreen = true;

      // Clear the thumbnail (remove image and play button)
      thumbnail.innerHTML = '';
      // Add the video iframe
      thumbnail.appendChild(iframe);
    });
  }

  // Update page title based on category
  function updatePageTitle(category) {
    pageTitle.textContent = categoryNames[category] || 'Educational Videos';
  }

  // Mobile categories menu toggle
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      mobileMenuToggle.classList.toggle('open');
    });
  }

  // Mobile category items click handlers
  mobileCategories.forEach(item => {
    item.addEventListener('click', function() {
      mobileCategories.forEach(cat => cat.classList.remove('active'));
      this.classList.add('active');
      
      currentCategory = this.dataset.category;
      updatePageTitle(currentCategory);
      const searchInputMobile = document.getElementById('searchVideos');
      const searchTerm = searchInputMobile ? searchInputMobile.value.toLowerCase() : '';
      filterVideos(searchTerm, currentCategory);
    });
  });

  // Desktop category filter event listeners
  categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      categoryItems.forEach(cat => cat.classList.remove('active'));
      this.classList.add('active');
      
      currentCategory = this.dataset.category;
      updatePageTitle(currentCategory);
      const searchInputDesktop = document.getElementById('searchVideosDesktop');
      const searchTerm = searchInputDesktop ? searchInputDesktop.value.toLowerCase() : '';
      filterVideos(searchTerm, currentCategory);
    });
  });

  // Filter videos by search term and category
  function filterVideos(searchTerm, category) {
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
      const titleElement = item.querySelector('.video-title');
      const title = titleElement ? titleElement.textContent.toLowerCase() : '';
      const itemCategory = item.dataset.category;
      
      const matchesSearch = searchTerm === '' || title.includes(searchTerm);
      const matchesCategory = category === 'all' || itemCategory === category;
      
      item.style.display = (matchesSearch && matchesCategory) ? '' : 'none';
    });
  }

  // Load videos on page load
  loadVideos();
});
