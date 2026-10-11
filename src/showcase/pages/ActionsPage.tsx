import { Button, Dropdown, Fab, Modal, Swap, ThemeController } from '../../ui/actions/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const ActionsPage = () => (
  <div>
    <ShowcaseSection id="button" title="Button" description="Button colors, styles, sizes, loading, and link behavior use the same composable control.">
      <Button color="primary">Primary</Button>
      <Button color="secondary" variant="outline">Outline</Button>
      <Button color="accent" variant="soft">Soft</Button>
      <Button variant="ghost" size="sm">Ghost</Button>
      <Button loading color="primary">Saving</Button>
      <Button href="/showcase">Link action</Button>
    </ShowcaseSection>

    <ShowcaseSection id="dropdown" title="Dropdown" description="Native details and summary provide click, keyboard, and open-state behavior without client-side code.">
      <Dropdown trigger="Open menu" align="start">
        <li><a href="/showcase/actions">Edit profile</a></li>
        <li><a href="/showcase">View overview</a></li>
        <li><button type="button">Archive</button></li>
      </Dropdown>
    </ShowcaseSection>

    <ShowcaseSection id="fab" title="FAB / Speed Dial" description="Focus or activate the floating action trigger to reveal its actions. The preview keeps it within this section.">
      <div className="relative h-52 w-full overflow-hidden rounded-box border border-base-300 bg-base-200/50">
        <p className="p-5 text-sm text-base-content/65">Focus or activate the plus button.</p>
        <Fab trigger={<span aria-label="Create">+</span>} className="absolute bottom-5 right-5">
          <button type="button" className="btn btn-circle btn-lg" aria-label="Create note">N</button>
          <button type="button" className="btn btn-circle btn-lg" aria-label="Upload file">U</button>
        </Fab>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="modal" title="Modal" description="The native Popover API supplies open, close, backdrop, and Escape behavior in supported browsers.">
      <Modal id="showcase-confirm" trigger="Open dialog" title="Save changes?">
        <p className="py-4">Your changes will be visible to everyone on the project.</p>
      </Modal>
    </ShowcaseSection>

    <ShowcaseSection id="swap" title="Swap" description="A native checkbox swaps the visible content, with DaisyUI supplying the optional animation.">
      <Swap ariaLabel="Toggle favorite" effect="rotate" onContent={<span>★</span>} offContent={<span>☆</span>} className="text-4xl" />
      <span className="text-sm text-base-content/65">Select the star to toggle it.</span>
    </ShowcaseSection>

    <ShowcaseSection id="theme-controller" title="Theme Controller" description="This checkbox applies its theme value with DaisyUI CSS. Theme choice is not persisted across page loads.">
      <ThemeController theme="forest" ariaLabel="Use forest theme">Forest theme</ThemeController>
      <ThemeController theme="cupcake" type="radio" name="showcase-theme" ariaLabel="Use cupcake theme">Cupcake theme</ThemeController>
    </ShowcaseSection>
  </div>
)