import { OverviewPage } from './OverviewPage.js'
import { showcaseCategories } from './categories.js'
import { ActionsPage } from './pages/ActionsPage.js'
import { DataDisplayPage } from './pages/DataDisplayPage.js'
import { DataInputPage } from './pages/DataInputPage.js'
import { FeedbackPage } from './pages/FeedbackPage.js'
import { LayoutPage } from './pages/LayoutPage.js'
import { MockupPage } from './pages/MockupPage.js'
import { NavigationPage } from './pages/NavigationPage.js'

export { showcaseCategories } from './categories.js'

type ShowcaseProps = {
  category?: string
}

export const Showcase = ({ category }: ShowcaseProps) => {
  const activeCategory = showcaseCategories.find((item) => item.slug === category)

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-base-100">
      <header className="border-b border-base-300 bg-base-200/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase text-primary">DaisyUI 5 · component showcase</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{activeCategory?.title ?? 'Showcase'}</h1>
              <p className="mt-2 max-w-2xl text-base-content/70">
                {activeCategory?.description ?? 'A working catalog of DaisyUI components, rendered with Hono JSX.'}
              </p>
            </div>
            <a href="/showcase" className="btn btn-sm btn-outline">All categories</a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:px-8">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <nav aria-label="Showcase categories">
            <p className="mb-2 px-3 text-xs font-semibold uppercase text-base-content/55">Categories</p>
            <ul className="menu menu-sm rounded-box bg-base-200/60">
              <li><a href="/showcase" className={!activeCategory ? 'menu-active' : ''}>Overview</a></li>
              {showcaseCategories.map((item) => (
                <li key={item.slug}>
                  <a href={`/showcase/${item.slug}`} className={activeCategory?.slug === item.slug ? 'menu-active' : ''}>
                    <span>{item.title}</span>
                    <span className="badge badge-sm badge-ghost">{item.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="min-w-0">
          {!activeCategory && <OverviewPage />}
          {activeCategory?.slug === 'actions' && <ActionsPage />}
          {activeCategory?.slug === 'data-display' && <DataDisplayPage />}
          {activeCategory?.slug === 'data-input' && <DataInputPage />}
          {activeCategory?.slug === 'feedback' && <FeedbackPage />}
          {activeCategory?.slug === 'layout' && <LayoutPage />}
          {activeCategory?.slug === 'mockup' && <MockupPage />}
          {activeCategory?.slug === 'navigation' && <NavigationPage />}
        </div>
      </div>
    </main>
  )
}