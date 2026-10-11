import { Calendar, Checkbox, FieldLabel, Fieldset, FileInput, Filter, FilterReset, FloatingLabel, Input, Label, OTP, Radio, Range, Rating, Select, Textarea, Toggle, Validator } from '../../ui/datainput/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const DataInputPage = () => (
  <div>
    <ShowcaseSection id="calendar" title="Calendar" description="DaisyUI styles calendar integrations; the native date input shown here works without an additional client library.">
      <div className="flex flex-col gap-2">
        <Label htmlFor="showcase-date">Publish date</Label>
        <Calendar library="cally"><Input type="date" ariaLabel="Publish date" /></Calendar>
        <span className="text-xs text-base-content/60">Use Cally, DayPicker, or Vanilla Calendar Pro for an embedded calendar.</span>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="checkbox" title="Checkbox" description="Select independent options with a native checkbox.">
      <label className="label cursor-pointer gap-3"><Checkbox name="newsletter" value="yes" ariaLabel="Subscribe to product updates" /><span>Product updates</span></label>
      <Checkbox color="primary" checked ariaLabel="Selected example" />
      <Checkbox color="success" disabled ariaLabel="Disabled example" />
    </ShowcaseSection>

    <ShowcaseSection id="fieldset" title="Fieldset" description="Group related controls under a legend and optional supporting text.">
      <Fieldset legend="Profile" description="Your email is used for account notifications." className="w-full max-w-md rounded-box border border-base-300 bg-base-200 p-4">
        <FieldLabel htmlFor="profile-email">Email address</FieldLabel>
        <Input type="email" name="email" placeholder="you@example.com" ariaLabel="Email address" />
      </Fieldset>
    </ShowcaseSection>

    <ShowcaseSection id="file-input" title="File Input" description="Select one or more local files, with size, color, and disabled variants.">
      <div className="flex flex-col gap-2"><Label htmlFor="showcase-file">Upload a document</Label><FileInput name="document" accept=".pdf,.doc,.docx" ariaLabel="Choose a document" /></div>
      <FileInput color="primary" size="sm" multiple ariaLabel="Choose multiple images" />
    </ShowcaseSection>

    <ShowcaseSection id="filter" title="Filter" description="Use a radio group to choose one filter; the reset control clears the current form selection.">
      <Filter action="/showcase/data-input" className="flex-wrap">
        <FilterReset />
        <input className="btn" type="radio" name="framework" aria-label="All" value="all" defaultChecked />
        <input className="btn" type="radio" name="framework" aria-label="Hono" value="hono" />
        <input className="btn" type="radio" name="framework" aria-label="Tailwind" value="tailwind" />
      </Filter>
    </ShowcaseSection>

    <ShowcaseSection id="input" title="Input" description="Use the same styled control for text, dates, search, email, and other native input types.">
      <Input name="search" type="search" placeholder="Search components" ariaLabel="Search components" />
      <Input name="date" type="date" ariaLabel="Choose a date" color="primary" />
      <Input name="disabled" placeholder="Disabled" ariaLabel="Disabled field" disabled />
    </ShowcaseSection>

    <ShowcaseSection id="label" title="Label" description="Associate visible text with controls or use a floating label for compact forms.">
      <div className="flex flex-col gap-3">
        <Label htmlFor="label-example">Project name</Label>
        <Input name="project" placeholder="Project name" ariaLabel="Project name" />
      </div>
      <FloatingLabel text="Workspace name"><Input name="workspace" placeholder=" " ariaLabel="Workspace name" /></FloatingLabel>
    </ShowcaseSection>

    <ShowcaseSection id="otp" title="OTP" description="One numeric input controls the displayed slots and supports browser one-time-code autofill.">
      <OTP name="verification-code" length={6} ariaLabel="Six-digit verification code" />
    </ShowcaseSection>

    <ShowcaseSection id="radio" title="Radio" description="Choose one option from a named radio group.">
      <label className="label cursor-pointer gap-2"><Radio name="plan" value="starter" checked ariaLabel="Starter plan" /><span>Starter</span></label>
      <label className="label cursor-pointer gap-2"><Radio name="plan" value="team" ariaLabel="Team plan" /><span>Team</span></label>
      <label className="label cursor-pointer gap-2"><Radio name="plan" value="enterprise" ariaLabel="Enterprise plan" color="secondary" /><span>Enterprise</span></label>
    </ShowcaseSection>

    <ShowcaseSection id="range" title="Range" description="Choose a numeric value using a keyboard-accessible slider.">
      <div className="flex w-full max-w-md items-center gap-4"><span className="text-sm">0</span><Range name="volume" value={68} ariaLabel="Volume" color="primary" /><span className="text-sm">100</span></div>
    </ShowcaseSection>

    <ShowcaseSection id="rating" title="Rating" description="A radio group makes the selected rating accessible and form-submittable.">
      <Rating name="quality" value={4} />
      <Rating name="half-rating" value={3.5} half itemClassName="bg-warning" />
    </ShowcaseSection>

    <ShowcaseSection id="select" title="Select" description="Choose a single option or enable multiple selection with native select behavior.">
      <Select name="region" value="eu" ariaLabel="Region" options={[
        { value: 'us', label: 'United States' },
        { value: 'eu', label: 'Europe' },
        { value: 'apac', label: 'Asia Pacific' },
      ]} />
    </ShowcaseSection>

    <ShowcaseSection id="textarea" title="Textarea" description="Enter multi-line content with optional sizing and validation states.">
      <Textarea name="notes" value="Add release notes here..." rows={3} ariaLabel="Release notes" className="w-full max-w-lg" />
    </ShowcaseSection>

    <ShowcaseSection id="toggle" title="Toggle" description="A checkbox styled as a switch retains native form behavior and keyboard controls.">
      <label className="label cursor-pointer gap-3"><Toggle name="notifications" value="enabled" checked ariaLabel="Email notifications" color="primary" /><span>Email notifications</span></label>
    </ShowcaseSection>

    <ShowcaseSection id="validator" title="Validator" description="Browser constraint validation drives success/error styles and reveals a supporting hint.">
      <div className="flex w-full max-w-md flex-col gap-2">
        <Label htmlFor="showcase-validator">Work email</Label>
        <Validator id="showcase-validator" type="email" name="work-email" value="not-an-email" required hint="Enter a valid email address." ariaLabel="Work email" />
      </div>
    </ShowcaseSection>
  </div>
)