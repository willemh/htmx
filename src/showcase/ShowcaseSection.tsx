import type { PropsWithChildren } from 'hono/jsx'

type ShowcaseSectionProps = PropsWithChildren<{
  id: string
  title: string
  description: string
}>

export const ShowcaseSection = ({ id, title, description, children }: ShowcaseSectionProps) => (
  <section id={id} className="scroll-mt-24 border-b border-base-300 py-8 last:border-b-0">
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      <a className="link link-hover text-sm text-base-content/60" href={`https://daisyui.com/components/${id}/`} target="_blank" rel="noreferrer">
        DaisyUI docs
      </a>
    </div>
    <p className="mb-5 max-w-3xl text-sm leading-6 text-base-content/70">{description}</p>
    <div className="flex min-h-16 flex-wrap items-center gap-4">{children}</div>
  </section>
)