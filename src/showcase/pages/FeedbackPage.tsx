import { Alert, Loading, Progress, RadialProgress, Skeleton, Status, Toast, Tooltip } from '../../ui/feedback/index.js'
import { ShowcaseSection } from '../ShowcaseSection.js'

export const FeedbackPage = () => (
  <div>
    <ShowcaseSection id="alert" title="Alert" description="Communicate important information with semantic alert roles and optional actions.">
      <div className="w-full space-y-3">
        <Alert color="info" title="Update available" icon={<span aria-hidden="true">i</span>}>Version 2.4 is ready to install.</Alert>
        <Alert color="success" variant="soft" role="status">Your changes were saved.</Alert>
        <Alert color="warning" orientation="vertical" actions={<button type="button" className="btn btn-sm">Review</button>}>Storage is nearly full.</Alert>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="loading" title="Loading" description="Indicate in-flight work with several animated shapes and sizes.">
      <Loading animation="spinner" color="primary" ariaLabel="Loading results" />
      <Loading animation="dots" size="lg" ariaLabel="Loading conversation" />
      <Loading animation="ring" color="secondary" ariaLabel="Loading content" />
      <Loading animation="bars" size="sm" ariaLabel="Loading data" />
    </ShowcaseSection>

    <ShowcaseSection id="progress" title="Progress" description="Show task completion or an indeterminate task with the native progress element.">
      <div className="w-full max-w-lg space-y-3"><Progress value={64} color="primary" ariaLabel="Upload progress" /><Progress color="secondary" ariaLabel="Indeterminate progress" /></div>
    </ShowcaseSection>

    <ShowcaseSection id="radial-progress" title="Radial Progress" description="Show a compact percentage with accessible progressbar values and adjustable size.">
      <RadialProgress value={72} ariaLabel="72 percent complete" className="text-primary">72%</RadialProgress>
      <RadialProgress value={38} size="7rem" thickness="0.6rem" ariaLabel="38 percent complete">38%</RadialProgress>
    </ShowcaseSection>

    <ShowcaseSection id="skeleton" title="Skeleton" description="Reserve the shape of content while data is loading.">
      <div className="flex w-full max-w-md items-center gap-4">
        <Skeleton className="h-14 w-14 shrink-0 rounded-full" />
        <div className="flex-1 space-y-3"><Skeleton className="h-4 w-2/3" /><Skeleton text className="h-4 w-full" /></div>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="status" title="Status" description="A small colored indicator communicates health when paired with a text label.">
      <span className="flex items-center gap-2"><Status color="success" ariaLabel="Online" />Online</span>
      <span className="flex items-center gap-2"><Status color="warning" size="lg" ariaLabel="Degraded" />Degraded</span>
      <span className="flex items-center gap-2"><Status color="error" ariaLabel="Offline" />Offline</span>
    </ShowcaseSection>

    <ShowcaseSection id="toast" title="Toast" description="Position a stack of live notifications. This preview is kept inline so it does not obscure the page.">
      <div className="w-full rounded-box border border-base-300 p-4">
        <Toast vertical="top" horizontal="end" className="!static !transform-none" ariaLabel="Notification preview">
          <Alert color="success" role="status">Changes published</Alert>
          <Alert color="info" role="status">Build started</Alert>
        </Toast>
      </div>
    </ShowcaseSection>

    <ShowcaseSection id="tooltip" title="Tooltip" description="Reveal a short hint on hover or keyboard focus without adding a separate popover script.">
      <Tooltip content="Copy link" placement="top" color="primary"><button type="button" className="btn btn-outline">Hover or focus</button></Tooltip>
      <Tooltip content={<span><strong>Shortcut</strong><br />⌘ + K</span>} placement="right"><button type="button" className="btn btn-ghost">Rich tooltip</button></Tooltip>
    </ShowcaseSection>
  </div>
)