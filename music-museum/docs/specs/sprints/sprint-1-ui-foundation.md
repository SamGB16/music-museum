# Sprint 1 — UI Foundation

## Goal
Build the reusable component layer that all exhibit pages will use.
These components must reflect the Swiss design style established in
the spec: clean layouts, strong typography, clear hierarchy.

## Files Expected to Change
- components/ui/Card.tsx
- components/ui/SectionHeading.tsx
- components/ui/Panel.tsx
- app/globals.css
- app/page.tsx

## Tasks
1. Create Card component — title, subtitle, optional description
2. Create SectionHeading component — large heading with optional subtitle
3. Create Panel component — full width content wrapper with padding
4. Update globals.css with Swiss-style base tokens (spacing, typography)
5. Update app/page.tsx to use the new components as a basic demo

## Verification
- npm run build passes with no errors
- npm run lint passes clean
- All three components render on the homepage without errors
- Components reflect Swiss style — clean, minimal, grid-aligned

## Completion Checklist
- [ ] Card.tsx created in components/ui/
- [ ] SectionHeading.tsx created in components/ui/
- [ ] Panel.tsx created in components/ui/
- [ ] globals.css updated with base design tokens
- [ ] app/page.tsx updated to render the components
- [ ] npm run build passes
- [ ] npm run lint passes
- [ ] Site visually reflects Swiss design style