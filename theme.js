/**
 * Theme Manager - Handles dark/light theme switching
 */

class ThemeManager {
  constructor() {
    this.THEME_KEY = 'app-theme';
    this.DARK_THEME = 'dark';
    this.LIGHT_THEME = 'light';
    this.init();
  }

  init() {
    // Load saved theme or detect system preference
    const savedTheme = this.getSavedTheme();
    const theme = savedTheme || this.getSystemPreference();
    this.setTheme(theme, false); // false = don't save to localStorage on init
  }

  getSavedTheme() {
    return localStorage.getItem(this.THEME_KEY);
  }

  getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return this.LIGHT_THEME;
    }
    return this.DARK_THEME;
  }

  setTheme(theme, save = true) {
    // Validate theme
    if (theme !== this.DARK_THEME && theme !== this.LIGHT_THEME) {
      theme = this.DARK_THEME;
    }

    // Apply theme to document root and body
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    
    // Also add/remove class for easier CSS targeting
    document.documentElement.classList.remove(this.LIGHT_THEME, this.DARK_THEME);
    document.documentElement.classList.add(theme);

    // Update theme toggle button icon
    this.updateThemeIcon(theme);

    // Save theme to localStorage
    if (save) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || this.DARK_THEME;
    const newTheme = currentTheme === this.DARK_THEME ? this.LIGHT_THEME : this.DARK_THEME;
    this.setTheme(newTheme, true);
  }

  updateThemeIcon(theme) {
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
      // Sun for light theme, Moon for dark theme
      if (theme === this.LIGHT_THEME) {
        icon.className = 'fas fa-moon theme-icon';
      } else {
        icon.className = 'fas fa-sun theme-icon';
      }
    });
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || this.DARK_THEME;
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Create global theme manager instance
  window.themeManager = new ThemeManager();

  // Setup theme toggle button listeners
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      window.themeManager.toggleTheme();
      // Add animation effect
      this.style.transform = 'scale(0.95) rotate(20deg)';
      setTimeout(() => {
        this.style.transition = 'none';
        this.style.transform = 'scale(1) rotate(0deg)';
        setTimeout(() => {
          this.style.transition = '';
        }, 10);
      }, 150);
    });
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      // Only apply if no manual theme has been saved
      if (!localStorage.getItem(window.themeManager.THEME_KEY)) {
        const newTheme = e.matches ? window.themeManager.LIGHT_THEME : window.themeManager.DARK_THEME;
        window.themeManager.setTheme(newTheme, false);
      }
    });
  }
});
