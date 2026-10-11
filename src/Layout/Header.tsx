type HeaderProps = {
  logo?: string
  title?: string
}

export const Header = ({ logo, title = 'My Application' }: HeaderProps) => {
  return (
    <header className="border-b border-base-300 bg-base-100">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6" aria-label="Main navigation">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost btn-square" type="button" aria-label="Open menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul className="menu dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            {logo ?? title}
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn btn-primary btn-sm" href="#get-started">Get started</a>
        </div>
      </nav>
    </header>
  )
}
