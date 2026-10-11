import { MockupBrowser, MockupCode, MockupCodeLine, MockupPhone, MockupWindow } from '../../ui/mockup/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const MockupPage = () => (
  <div>
    <ShowcaseSection id="mockup-browser" title="Browser Mockup" description="Frame a responsive page preview with a browser toolbar and address bar.">
      <MockupBrowser url="https://example.dev/showcase" className="w-full" contentClassName="bg-base-200 p-8">
        <h3 className="text-xl font-bold">Project overview</h3><p className="mt-2">A preview inside a browser frame.</p>
      </MockupBrowser>
    </ShowcaseSection>

    <ShowcaseSection id="mockup-code" title="Code Mockup" description="Render terminal-style code with prefixes and highlighted output lines.">
      <MockupCode className="w-full max-w-2xl">
        <MockupCodeLine>npm run build</MockupCodeLine>
        <MockupCodeLine prefix=">" className="text-warning">Building stylesheet...</MockupCodeLine>
        <MockupCodeLine prefix="✓" className="text-success">Build completed</MockupCodeLine>
      </MockupCode>
    </ShowcaseSection>

    <ShowcaseSection id="mockup-phone" title="Phone Mockup" description="Present responsive content inside a phone-shaped frame.">
      <MockupPhone>
        <div className="flex min-h-full flex-col bg-base-100 p-4 text-center">
          <span className="text-xs text-base-content/60">9:41</span>
          <div className="my-auto"><div className="avatar"><div className="mx-auto h-16 w-16 rounded-full"><img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" alt="Profile portrait" loading="lazy" /></div></div><h3 className="mt-3 font-semibold">Mobile preview</h3><p className="mt-1 text-sm">Content adapts to a narrow screen.</p></div>
          <div className="h-1 w-20 self-center rounded-full bg-base-content/30"></div>
        </div>
      </MockupPhone>
    </ShowcaseSection>

    <ShowcaseSection id="mockup-window" title="Window Mockup" description="Frame a desktop app surface with an operating-system window header.">
      <MockupWindow className="w-full max-w-2xl" contentClassName="p-8">
        <h3 className="text-lg font-semibold">Workspace</h3><p className="mt-2 text-base-content/70">Files, activity, and tools fit inside the window frame.</p>
      </MockupWindow>
    </ShowcaseSection>
  </div>
)