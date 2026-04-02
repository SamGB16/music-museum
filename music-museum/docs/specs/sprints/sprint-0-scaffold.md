# Sprint 0 — Project Scaffold

## Goal
Set up the Next.js project with TypeScript, Tailwind CSS, and the
base folder structure that all future sprints will build on.

## Files Expected to Change
- package.json
- tsconfig.json
- next.config.ts
- postcss.config.mjs
- app/layout.tsx
- app/page.tsx
- app/globals.css
- components/ui/ (empty folder)
- components/content/ (empty folder)

## Tasks
1. Run create-next-app to scaffold the project
2. Verify Tailwind CSS is configured and working
3. Create components/ui/ folder
4. Create components/content/ folder
5. Delete default Next.js placeholder content from app/page.tsx
6. Confirm the dev server runs without errors

## Verification
Run these commands — all must pass clean:

- npm run dev (site loads at localhost:3000)
- npm run build (no errors)
- npm run lint (no errors)

## Completion Checklist
- [ ] Next.js app runs locally
- [ ] Tailwind CSS is active
- [ ] components/ui/ folder exists
- [ ] components/content/ folder exists
- [ ] app/page.tsx is cleared of placeholder content
- [ ] npm run build passes
- [ ] npm run lint passes