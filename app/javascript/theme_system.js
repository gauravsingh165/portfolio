// Global Theme System
class ThemeSystem {
  constructor() {
    this.themes = {
      light: {
        '--primary-color': '#ffffff',
        '--secondary-color': '#f8fafc',
        '--accent-color': '#3b82f6',
        '--accent-hover': '#2563eb',
        '--text-color': '#1e293b',
        '--text-muted': '#64748b',
        '--text-light': '#475569',
        '--glass-bg': 'rgba(255, 255, 255, 0.8)',
        '--glass-border': 'rgba(148, 163, 184, 0.2)',
        '--nav-bg': 'rgba(248, 250, 252, 0.8)',
        '--card-bg': 'rgba(255, 255, 255, 0.9)',
        '--input-bg': 'rgba(255, 255, 255, 0.9)',
        '--border-color': 'rgba(148, 163, 184, 0.3)',
        '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      dark: {
        '--primary-color': '#0f172a',
        '--secondary-color': '#1e293b',
        '--accent-color': '#3b82f6',
        '--accent-hover': '#60a5fa',
        '--text-color': '#f8fafc',
        '--text-muted': '#94a3b8',
        '--text-light': '#e2e8f0',
        '--glass-bg': 'rgba(15, 23, 42, 0.8)',
        '--glass-border': 'rgba(148, 163, 184, 0.1)',
        '--nav-bg': 'rgba(30, 41, 59, 0.8)',
        '--card-bg': 'rgba(30, 41, 59, 0.6)',
        '--input-bg': 'rgba(15, 23, 42, 0.8)',
        '--border-color': 'rgba(148, 163, 184, 0.2)',
        '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
      }
    };
    
    this.html = document.documentElement;
    this.init();
  }

  init() {
    // Initialize theme on page load
    this.loadTheme();
    
    // Listen for system theme changes
    this.listenForSystemThemeChanges();
    
    // Add theme toggle event listeners
    this.addThemeToggleListeners();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme === 'system' ? (prefersDark ? 'dark' : 'light') : savedTheme;
    this.setTheme(theme);
  }

  setTheme(theme) {
    const themeColors = this.themes[theme];
    if (!themeColors) return;

    // Apply theme colors
    Object.entries(themeColors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
    
    // Set data attribute
    this.html.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update theme toggle buttons
    this.updateThemeToggles(theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  updateThemeToggles(theme) {
    // Update all theme toggle buttons on the page
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
      const sunIcon = toggle.querySelector('.sun-icon');
      const moonIcon = toggle.querySelector('.moon-icon');
      
      if (sunIcon && moonIcon) {
        if (theme === 'light') {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        } else {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        }
      }
    });
  }

  toggleTheme() {
    const currentTheme = this.html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  addThemeToggleListeners() {
    // Add event listeners to all theme toggle buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.theme-toggle')) {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  listenForSystemThemeChanges() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        this.setTheme(newTheme);
      }
    });
  }

  // Get current theme
  getCurrentTheme() {
    return this.html.getAttribute('data-theme') || 'dark';
  }

  // Check if theme is dark
  isDark() {
    return this.getCurrentTheme() === 'dark';
  }

  // Check if theme is light
  isLight() {
    return this.getCurrentTheme() === 'light';
  }
}

// Initialize theme system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeSystem = new ThemeSystem();
});

// Also initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeSystem = new ThemeSystem();
  });
} else {
  window.themeSystem = new ThemeSystem();
} 