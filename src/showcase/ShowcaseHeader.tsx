import { Toggle } from '../ui/datainput/Toggle/Toggle.js'

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave',
  'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua',
  'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk',
  'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim',
  'nord', 'sunset', 'caramellatte', 'abyss', 'silk',
]

export const ShowcaseHeader = () => (
  <header className="border-b border-base-300 bg-base-100">
    <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6" aria-label="Main navigation">
      <div className="navbar-start">
        <a className="btn btn-ghost text-lg" href="/showcase">DaisyUI Showcase</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/showcase">Overview</a></li>
          <li><a href="/showcase/actions">Actions</a></li>
          <li><a href="/showcase/data-display">Data display</a></li>
          <li><a href="/showcase/data-input">Data input</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-3">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-sm">Theme</summary>
            <ul className="menu dropdown-content z-20 mt-2 max-h-[70vh] w-56 flex-nowrap overflow-y-auto rounded-box bg-base-200 p-2 shadow-lg">
              <li className="menu-title">Appearance</li>
              <li>
                <label className="label flex cursor-pointer justify-between gap-3">
                  <span>Dark mode</span>
                  <Toggle name="site-mode" value="dark" ariaLabel="Switch to dark mode" size="sm" />
                </label>
              </li>
              <li className="menu-title">All themes</li>
              {themes.filter((theme) => theme !== 'light' && theme !== 'dark').map((theme) => (
                <li key={theme}>
                  <input
                    type="radio"
                    name="site-theme"
                    value={theme}
                    checked={theme === 'cupcake'}
                    className="theme-controller btn btn-sm btn-ghost w-full justify-start capitalize"
                    aria-label={theme}
                  />
                </li>
              ))}
            </ul>
          </details>
          <a className="btn btn-primary btn-sm" href="/showcase">Browse components</a>
        </div>
      </div>
    </nav>
  </header>
)