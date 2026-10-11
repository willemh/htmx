type HeaderProps = {
  logo?: string
  title?: string
}

export const Header = ({ logo, title = 'My Application' }: HeaderProps) => {
  return (
    <header className="border-b border-base-300 bg-base-100">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6" aria-label="Main navigation">
        <div className="navbar-start">
          <a className="btn btn-ghost text-lg" href="/">{logo ?? title}</a>
        </div>
        <div className="navbar-end">
        </div>
      </nav>
    </header>
  )
}
