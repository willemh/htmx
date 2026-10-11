---
name: react-to-hono-jsx
description: "Use when converting React or TSX components to Hono JSX in this project, including props, children, events, DaisyUI components, and TypeScript validation."
---

# React to Hono JSX

Convert React components to the Hono JSX runtime used by this project. Preserve the component's intent and public API where practical, but do not carry over React-only runtime assumptions.

## Project Conventions

- TypeScript uses `jsx: react-jsx` and `jsxImportSource: hono/jsx`; use Hono JSX, not React imports.
- Import child-prop types with `import type { PropsWithChildren } from 'hono/jsx'`.
- Type components as named functions or arrow functions with explicit props. Use `PropsWithChildren<{ ... }>` for components that render children.
- For a named slot, derive its type as `type Child = PropsWithChildren['children']` instead of importing `ReactNode` or using `any`.
- Use native HTML elements and semantic markup. DaisyUI components are styled with their documented class names; prefer those classes over custom CSS when they cover the behavior.
- Preserve required base classes when accepting `className`, and append the caller's class names.
- Local TypeScript imports follow the repository's NodeNext convention and use `.js` extensions.
- Follow the neighboring component's file and export structure. Use a category `index.ts` barrel when that category exposes one.

## Conversion Procedure

1. Read the source component and its nearby call sites. Identify its props, defaults, children, slots, and actual interactive behavior.
2. Replace React types (`ReactNode`, `FC`, React HTML attribute types) with Hono JSX types or small explicit prop types. Keep optional props optional and preserve sensible defaults.
3. Translate JSX and conditional rendering directly where supported. Use standard HTML attributes and Hono JSX conventions; do not add React imports, hooks, context, refs, or a client-side state model to a server-rendered component.
4. Treat event handlers such as `onClick` as a behavior requirement, not a syntax conversion. Hono renders on the server; implement the interaction with native HTML/CSS, a project-supported client script or HTMX, or document that hydration is required. Do not leave inert handlers behind.
5. Keep repeated or variable content composable through `children` or typed slots. Use correct interactive semantics, labels, and accessible names when rendering controls.
6. Preserve DaisyUI's structural class names and expected markup hierarchy. Add variants by composing documented modifier classes, not by replacing the base component class.
7. Export the component according to the surrounding category's conventions and update its barrel only when appropriate.
8. Run `npm run build` to compile CSS and TypeScript, then run any focused tests available for the changed component. Resolve errors in the touched slice without broad unrelated cleanup.

## Hono JSX Example

```tsx
import type { PropsWithChildren } from 'hono/jsx'

type PanelProps = PropsWithChildren<{
  title: string
  className?: string
}>

export const Panel = ({ title, className = '', children }: PanelProps) => (
  <section className={`card ${className}`.trim()}>
    <h2>{title}</h2>
    {children}
  </section>
)
```

For a React component that depends on hooks or browser-only APIs, first determine whether the project has a client-side runtime for it. Hono JSX alone does not provide React hydration.