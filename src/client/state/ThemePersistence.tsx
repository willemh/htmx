export const ThemePersistence = () => (
  <script dangerouslySetInnerHTML={{ __html: `
    (() => {
      const themeKey = 'htmx:daisyui-theme';
      const modeKey = 'htmx:daisyui-mode';
      const root = document.documentElement;
      let selectedTheme = 'cupcake';
      let selectedMode = 'light';

      try {
        selectedTheme = localStorage.getItem(themeKey) || selectedTheme;
        selectedMode = localStorage.getItem(modeKey) || selectedMode;
      } catch {}

      root.dataset.theme = selectedTheme;
      if (selectedMode === 'dark') root.dataset.themeMode = 'dark';

      const syncControls = () => {
        document.querySelectorAll('input.theme-controller[type="radio"]').forEach((input) => {
          input.checked = input.value === selectedTheme;
        });
        const modeToggle = document.querySelector('input[name="site-mode"][value="dark"]');
        if (modeToggle) modeToggle.checked = selectedMode === 'dark';
      };

      document.addEventListener('DOMContentLoaded', syncControls, { once: true });
      document.addEventListener('change', (event) => {
        const input = event.target;
        if (!(input instanceof HTMLInputElement)) return;

        if (input.matches('input.theme-controller[type="radio"]') && input.checked) {
          selectedTheme = input.value;
          root.dataset.theme = selectedTheme;
          try { localStorage.setItem(themeKey, selectedTheme); } catch {}
        }

        if (input.matches('input[name="site-mode"][value="dark"]')) {
          selectedMode = input.checked ? 'dark' : 'light';
          if (selectedMode === 'dark') root.dataset.themeMode = 'dark';
          else delete root.dataset.themeMode;
          try { localStorage.setItem(modeKey, selectedMode); } catch {}
        }
      });
    })();
  ` }} />
)