import { Divider, Drawer, Footer, Hero, Indicator, Join, Stack } from '../../ui/layout/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const LayoutPage = () => (
  <div>
    <ShowcaseSection id="divider" title="Divider" description="Separate content horizontally, or use a vertical divider between adjacent columns.">
      <div className="w-full"><p className="text-center">Section above</p><Divider>OR</Divider><p className="text-center">Section below</p></div>
      <div className="flex h-20 items-center gap-4"><span>Left</span><Divider orientation="vertical">OR</Divider><span>Right</span></div>
    </ShowcaseSection>

    <ShowcaseSection id="drawer" title="Drawer" description="A checkbox-controlled sidebar opens from either side without a client framework.">
      <div className="h-64 w-full overflow-hidden rounded-box border border-base-300">
        <Drawer
          id="showcase-drawer"
          className="h-full"
          sidebar={<ul className="menu min-h-full w-64 bg-base-200 p-4"><li><a href="/showcase">Overview</a></li><li><a href="/showcase/layout">Layout examples</a></li></ul>}
        >
          <div className="p-4"><h3 className="font-semibold">Page content</h3><p className="mt-2 text-sm">Use the menu button to reveal the sidebar.</p></div>
        </Drawer>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="footer" title="Footer" description="Organize site links, contact information, and supporting actions into columns.">
      <Footer orientation="horizontal" className="w-full bg-base-200 p-8">
        <nav><h3 className="footer-title">Product</h3><a className="link link-hover" href="/showcase">Components</a><a className="link link-hover" href="/showcase/layout">Layout</a></nav>
        <nav><h3 className="footer-title">Resources</h3><a className="link link-hover" href="https://daisyui.com/components/">Documentation</a><a className="link link-hover" href="https://github.com/saadeghi/daisyui">Source</a></nav>
        <aside><p>Built with DaisyUI and Hono JSX.</p></aside>
      </Footer>
    </ShowcaseSection>

    <ShowcaseSection id="hero" title="Hero" description="A full-width image or color field introduces a page, product, or primary action.">
      <Hero
        image="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
        title="A brighter workspace"
        subtitle="A compact hero preview"
        body="Keep the message focused and make the next action clear."
        ctaText="Explore"
        ctaLink="/showcase"
        className="min-h-72 w-full rounded-box"
      />
    </ShowcaseSection>

    <ShowcaseSection id="indicator" title="Indicator" description="Attach a small count or status marker to another element.">
      <Indicator indicator={<span className="badge badge-secondary">8</span>}>
        <button type="button" className="btn">Inbox</button>
      </Indicator>
      <Indicator indicator={<span className="status status-success" aria-label="Online" />} position="bottom-start">
        <div className="avatar"><div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-content">A</div></div>
      </Indicator>
    </ShowcaseSection>

    <ShowcaseSection id="join" title="Join" description="Connect adjacent controls and let DaisyUI round only the outer edges.">
      <Join><button type="button" className="btn join-item">Day</button><button type="button" className="btn join-item btn-active">Week</button><button type="button" className="btn join-item">Month</button></Join>
      <Join orientation="vertical"><button type="button" className="btn join-item">Top</button><button type="button" className="btn join-item">Middle</button><button type="button" className="btn join-item">Bottom</button></Join>
    </ShowcaseSection>

    <ShowcaseSection id="stack" title="Stack" description="Layer several surfaces around a shared center point.">
      <Stack className="text-center">
        <div className="grid h-24 w-40 place-items-center rounded-box border border-base-300 bg-base-200">Back</div>
        <div className="grid h-24 w-40 place-items-center rounded-box border border-base-300 bg-primary text-primary-content">Front</div>
      </Stack>
    </ShowcaseSection>
  </div>
)