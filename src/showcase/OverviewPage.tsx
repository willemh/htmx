import { showcaseCategories } from './categories.js'

export const OverviewPage = () => (
  <div>
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase text-primary">Component index</p>
        <h2 className="text-2xl font-bold">Explore the library</h2>
      </div>
      <p className="text-sm text-base-content/65">68 DaisyUI components across 7 categories</p>
    </div>
    <div className="divide-y divide-base-300 border-y border-base-300">
      {showcaseCategories.map((category) => (
        <a
          key={category.slug}
          href={`/showcase/${category.slug}`}
          className="group flex flex-wrap items-center justify-between gap-3 py-5 transition-colors hover:bg-base-200/60"
        >
          <div>
            <h3 className="font-semibold group-hover:text-primary">{category.title}</h3>
            <p className="mt-1 text-sm text-base-content/65">{category.description}</p>
          </div>
          <span className="badge badge-outline">{category.count} components</span>
        </a>
      ))}
    </div>
  </div>
)