import { Footer } from "../ui/layout/Footer/Footer.js"

type PageFooterProps = {
  logo?: string
  title?: string
}

export const PageFooter = ({ logo, title = 'My Application' }: PageFooterProps) => {
  return (
    <Footer orientation="horizontal" centered className="border-t border-base-300 bg-base-100">
      <div className="footer p-4 text-base-content">
        <div>
          <a className="btn btn-ghost text-lg" href="/">{logo ?? title}</a>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        </div>
      </div>
   </Footer>
  )
}
