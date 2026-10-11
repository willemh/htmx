import { Accordion, AccordionItem, Avatar, AvatarGroup, Badge, Card, Carousel, CarouselItem, Chat, Collapse, Countdown, Diff, Kbd, List, ListItem, Mask, Stat, Stats, Table, Timeline, TimelineItem } from '../../ui/datadisplay/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

const galleryImages = [
  'https://img.daisyui.com/images/stock/daisyui-hat-1.webp',
  'https://img.daisyui.com/images/stock/daisyui-hat-2.webp',
  'https://img.daisyui.com/images/stock/daisyui-hat-3.webp',
  'https://img.daisyui.com/images/stock/daisyui-hat-4.webp',
]

export const DataDisplayPage = () => (
  <div>
    <ShowcaseSection id="accordion" title="Accordion" description="Native details elements let one item remain open at a time when they share a name.">
      <Accordion>
        <AccordionItem title="What is DaisyUI?" name="showcase-faq" icon="arrow">A component library built on Tailwind CSS.</AccordionItem>
        <AccordionItem title="Does this need React?" name="showcase-faq" icon="arrow">No. These examples are rendered with Hono JSX.</AccordionItem>
      </Accordion>
    </ShowcaseSection>

    <ShowcaseSection id="avatar" title="Avatar" description="Use images, initials, status indicators, and groups to represent people or teams.">
      <Avatar placeholder="WH" ring status="online" />
      <AvatarGroup>
        <Avatar placeholder="AL" />
        <Avatar placeholder="MK" />
        <Avatar placeholder="+3" />
      </AvatarGroup>
    </ShowcaseSection>

    <ShowcaseSection id="badge" title="Badge" description="Compact labels communicate status, category, or counts alongside other content.">
      <Badge color="primary">Primary</Badge>
      <Badge color="success" variant="soft">Published</Badge>
      <Badge color="warning" variant="outline">Review</Badge>
      <Badge size="lg" color="error">3 issues</Badge>
    </ShowcaseSection>

    <ShowcaseSection id="card" title="Card" description="Compose an image, title, body, and actions into a single content surface.">
      <Card
        title="Field notes"
        figure={<img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="A notebook on a desk" loading="lazy" />}
        actions={<a href="/showcase/data-display" className="btn btn-primary btn-sm">Read notes</a>}
        className="w-full max-w-sm bg-base-200"
      >
        <p>A short update from the design team.</p>
      </Card>
    </ShowcaseSection>

    <ShowcaseSection id="carousel" title="Carousel" description="Horizontally scroll through a fixed set of content panels.">
      <Carousel ariaLabel="Color samples" className="w-full gap-4">
        <CarouselItem className="w-4/5 sm:w-1/2"><div className="grid h-36 w-full place-items-center rounded-box bg-primary text-primary-content">01 · Primary</div></CarouselItem>
        <CarouselItem className="w-4/5 sm:w-1/2"><div className="grid h-36 w-full place-items-center rounded-box bg-secondary text-secondary-content">02 · Secondary</div></CarouselItem>
        <CarouselItem className="w-4/5 sm:w-1/2"><div className="grid h-36 w-full place-items-center rounded-box bg-accent text-accent-content">03 · Accent</div></CarouselItem>
      </Carousel>
    </ShowcaseSection>

    <ShowcaseSection id="chat" title="Chat" description="Message bubbles support sender metadata, avatars, timestamps, and delivery notes.">
      <div className="w-full space-y-2">
        <Chat name="Mira" time="10:42" side="start" avatar={<span className="grid h-full place-items-center bg-secondary text-secondary-content">M</span>}>
          The new build is ready to review.
        </Chat>
        <Chat name="You" time="10:43" side="end" bubbleColor="primary" footer="Seen">
          Great, I’ll take a look.
        </Chat>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="collapse" title="Collapse" description="Reveal supporting details on demand with a native disclosure control.">
      <Collapse title="Build details" icon="plus" className="w-full max-w-lg bg-base-200">
        <p>TypeScript and DaisyUI CSS both compile successfully.</p>
      </Collapse>
    </ShowcaseSection>

    <ShowcaseSection id="countdown" title="Countdown" description="Animate a numeric value between updates. This server-rendered example shows a static value.">
      <span className="text-sm">Next release in</span>
      <Countdown value={42} ariaLabel="42 seconds remaining" className="text-4xl font-mono" />
      <span className="text-sm">seconds</span>
    </ShowcaseSection>

    <ShowcaseSection id="diff" title="Diff" description="Compare two versions using an interactive draggable divider.">
      <Diff
        before={<div className="grid min-h-40 place-items-center bg-base-200 p-6 text-lg">Before</div>}
        after={<div className="grid min-h-40 place-items-center bg-primary p-6 text-lg text-primary-content">After</div>}
        className="w-full max-w-xl"
      />
    </ShowcaseSection>

    <ShowcaseSection id="kbd" title="Kbd" description="Show keyboard keys and shortcuts inline with instructions.">
      <span>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command menu.</span>
    </ShowcaseSection>

    <ShowcaseSection id="list" title="List" description="Arrange repeated rows with consistent alignment and separators.">
      <List className="w-full max-w-xl rounded-box border border-base-300 bg-base-200">
        <ListItem><div className="font-medium">Design review</div><div className="text-sm text-base-content/60">Today · 14:30</div></ListItem>
        <ListItem><div className="font-medium">Release notes</div><div className="text-sm text-base-content/60">Tomorrow · Draft</div></ListItem>
      </List>
    </ShowcaseSection>

    <ShowcaseSection id="mask" title="Mask" description="Crop content to geometric, circular, and decorative shapes.">
      <Mask shape="squircle" className="grid h-24 w-24 place-items-center bg-primary font-bold text-primary-content">D</Mask>
      <Mask shape="heart" className="grid h-24 w-24 place-items-center bg-error text-error-content">★</Mask>
      <Mask shape="hexagon" className="grid h-24 w-24 place-items-center bg-accent font-bold text-accent-content">HEX</Mask>
    </ShowcaseSection>

    <ShowcaseSection id="stat" title="Stat" description="Present key metrics with a title, value, supporting context, and optional actions.">
      <Stats className="w-full bg-base-200 shadow-sm">
        <Stat title="Active users" value="2,401" description="↗ 12% this month" />
        <Stat title="Conversion" value="4.8%" description="Across all channels" valueClassName="text-secondary" />
        <Stat title="Revenue" value="$18.2k" description="Quarter to date" />
      </Stats>
    </ShowcaseSection>

    <ShowcaseSection id="table" title="Table" description="Readable tabular data with optional zebra striping, pinning, and responsive overflow.">
      <Table zebra className="w-full">
        <caption className="caption-bottom p-3 text-left text-sm text-base-content/60">Recent deployments</caption>
        <thead><tr><th>Build</th><th>Branch</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>#1482</td><td>main</td><td><Badge color="success" size="sm">Passed</Badge></td></tr>
          <tr><td>#1481</td><td>feature/showcase</td><td><Badge color="warning" size="sm">Review</Badge></td></tr>
        </tbody>
      </Table>
    </ShowcaseSection>

    <ShowcaseSection id="timeline" title="Timeline" description="Place events in chronological order with optional timestamps and markers.">
      <Timeline className="w-full">
        <TimelineItem start="09:15" icon={<span className="status status-success" aria-label="Complete" />}>Design approved</TimelineItem>
        <TimelineItem start="11:30" icon={<span className="status status-info" aria-label="In progress" />}>Build deployed</TimelineItem>
        <TimelineItem start="14:00" connectAfter={false}>Review scheduled</TimelineItem>
      </Timeline>
    </ShowcaseSection>

    <ShowcaseSection id="aura" title="Aura" description="Wrap a surface with a luminous animated edge effect.">
      <div className="aura aura-rainbow rounded-box p-1"><div className="rounded-box bg-base-100 px-8 py-5 font-semibold">Highlighted surface</div></div>
      <div className="aura aura-glow aura-primary rounded-box p-1"><div className="rounded-box bg-base-100 px-8 py-5">Glow variant</div></div>
    </ShowcaseSection>

    <ShowcaseSection id="hover-3d" title="Hover 3D" description="Pointer movement over the non-interactive surface applies a subtle 3D tilt.">
      <div className="hover-3d max-w-sm">
        <div className="card bg-base-200 shadow-xl">
          <figure><img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="A graphic credit card" loading="lazy" /></figure>
          <div className="card-body"><h3 className="card-title">3D card</h3><p>Move the pointer over this card.</p></div>
        </div>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="hover-gallery" title="Hover Gallery" description="Hover horizontally over the image strip to reveal alternate product views.">
      <figure className="hover-gallery aspect-[4/3] w-full max-w-sm overflow-hidden rounded-box">
        {galleryImages.map((src, index) => <img key={src} src={src} alt={`Hat view ${index + 1}`} loading="lazy" />)}
      </figure>
    </ShowcaseSection>

    <ShowcaseSection id="text-rotate" title="Text Rotate" description="Cycle through a short set of labels. DaisyUI pauses the animation while hovered.">
      <span className="text-rotate text-3xl font-bold text-primary">
        <span className="justify-items-center"><span>DESIGN</span><span>BUILD</span><span>SHIP</span></span>
      </span>
    </ShowcaseSection>
  </div>
)