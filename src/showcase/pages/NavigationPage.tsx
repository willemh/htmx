import { BreadcrumbItem, Breadcrumbs, Dock, DockItem, Link, Menu, MenuItem, MenuTitle, Megamenu, Navbar, NavbarCenter, NavbarEnd, NavbarStart, Pagination, PaginationItem, Step, Steps, Tab, TabPanel, Tabs } from '../../ui/navigation/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const NavigationPage = () => (
  <div>
    <ShowcaseSection id="breadcrumbs" title="Breadcrumbs" description="Show the current location in a hierarchy and identify the active page.">
      <Breadcrumbs>
        <BreadcrumbItem href="/showcase">Showcase</BreadcrumbItem>
        <BreadcrumbItem href="/showcase/navigation">Navigation</BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
      </Breadcrumbs>
    </ShowcaseSection>

    <ShowcaseSection id="dock" title="Dock" description="Keep a compact bottom navigation available for primary destinations.">
      <div className="relative h-28 w-full overflow-hidden rounded-box border border-base-300 bg-base-200/40">
        <Dock className="!static !transform-none">
          <DockItem href="/showcase" icon={<span aria-hidden="true">⌂</span>} label="Home" />
          <DockItem href="/showcase/data-display" icon={<span aria-hidden="true">▤</span>} label="Library" active />
          <DockItem href="/showcase/data-input" icon={<span aria-hidden="true">⚙</span>} label="Settings" />
        </Dock>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="link" title="Link" description="Restore link affordance with underline, hover-only underline, and semantic color variants.">
      <Link href="/showcase">Standard link</Link>
      <Link href="/showcase/navigation" color="primary">Primary link</Link>
      <Link href="https://daisyui.com" color="secondary" hoverOnly target="_blank">DaisyUI docs</Link>
    </ShowcaseSection>

    <ShowcaseSection id="menu" title="Menu" description="Build vertical or horizontal menus from list items, with active and disabled states.">
      <Menu ariaLabel="Project navigation" className="w-64 rounded-box bg-base-200">
        <MenuTitle>Project</MenuTitle>
        <MenuItem href="/showcase" active>Overview</MenuItem>
        <MenuItem href="/showcase/navigation">Navigation</MenuItem>
        <MenuItem disabled>Archived</MenuItem>
      </Menu>
    </ShowcaseSection>

    <ShowcaseSection id="megamenu" title="Megamenu" description="On small screens a native popover opens the menu; wide screens show a horizontal set of destinations.">
      <div className="w-full rounded-box border border-base-300 p-4">
        <Megamenu id="showcase-megamenu" trigger="Services" width="wide">
          <button type="button" className="btn btn-ghost" popoverTarget="showcase-service-one">Design</button>
          <div id="showcase-service-one" popover className="w-64 rounded-box bg-base-200 p-5 shadow-lg"><h3 className="font-semibold">Design systems</h3><p className="mt-2 text-sm">Tokens, components, and patterns.</p></div>
          <button type="button" className="btn btn-ghost" popoverTarget="showcase-service-two">Development</button>
          <div id="showcase-service-two" popover className="w-64 rounded-box bg-base-200 p-5 shadow-lg"><h3 className="font-semibold">Development</h3><p className="mt-2 text-sm">Build and ship product experiences.</p></div>
        </Megamenu>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="navbar" title="Navbar" description="Arrange brand, primary links, and actions in start, center, and end regions.">
      <Navbar ariaLabel="Preview navigation" className="w-full rounded-box bg-base-200">
        <NavbarStart><a href="/showcase" className="btn btn-ghost">Northstar</a></NavbarStart>
        <NavbarCenter className="hidden sm:flex"><Menu orientation="horizontal"><MenuItem href="/showcase">Work</MenuItem><MenuItem href="/showcase/navigation">About</MenuItem></Menu></NavbarCenter>
        <NavbarEnd><a href="/showcase" className="btn btn-primary btn-sm">Contact</a></NavbarEnd>
      </Navbar>
    </ShowcaseSection>

    <ShowcaseSection id="pagination" title="Pagination" description="Navigate a result set with current, neighboring, and disabled page controls.">
      <Pagination ariaLabel="Example pages">
        <PaginationItem disabled ariaLabel="Previous page">«</PaginationItem>
        <PaginationItem href="/showcase/navigation">1</PaginationItem>
        <PaginationItem href="/showcase/navigation?page=2" active ariaLabel="Page 2">2</PaginationItem>
        <PaginationItem href="/showcase/navigation?page=3">3</PaginationItem>
        <PaginationItem href="/showcase/navigation?page=3" ariaLabel="Next page">»</PaginationItem>
      </Pagination>
    </ShowcaseSection>

    <ShowcaseSection id="steps" title="Steps" description="Show progress through a linear process with completed, current, and future steps.">
      <Steps ariaLabel="Account setup" className="w-full">
        <Step color="primary">Account</Step><Step color="primary" current>Profile</Step><Step>Confirmation</Step>
      </Steps>
    </ShowcaseSection>

    <ShowcaseSection id="tab" title="Tabs" description="Switch between related views using keyboard-reachable tab links and panels.">
      <div className="w-full">
        <Tabs variant="border" ariaLabel="Project views">
          <Tab href="#showcase-overview" active>Overview</Tab>
          <Tab href="#showcase-activity">Activity</Tab>
          <Tab href="#showcase-settings">Settings</Tab>
        </Tabs>
        <TabPanel id="showcase-overview" labelledBy="showcase-overview" className="p-4">The project overview is selected.</TabPanel>
      </div>
    </ShowcaseSection>
  </div>
)