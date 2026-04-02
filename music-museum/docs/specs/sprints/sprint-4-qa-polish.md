# Sprint 4 — QA & Polish

## Goal
Review the site as a Smithsonian curator and improve narrative flow,
visual consistency, and user experience. This is the final sprint
before the midterm review presentation.

## Smithsonian Curator Review
Have AI review the site as if it were a curator for the Smithsonian
designing an exhibition. Evaluate and improve:

- Narrative flow — does the story of music consumption flow logically?
- Exhibit organization — are the eras presented in a clear order?
- Artifact presentation — are the key artifacts described compellingly?
- Educational value — does the visitor learn something meaningful?
- Emotional engagement — does the site create a sense of discovery?
- Visual coherence — is the Swiss style applied consistently?
- Visitor experience — is navigation intuitive and clear?

## Files Expected to Change
- app/page.tsx
- app/globals.css
- Any exhibit page that needs copy or design improvements
- components/ (any component needing refinement)

## Tasks
1. Add a back-to-homepage link on every exhibit page if missing
2. Review and improve copy on all five exhibit pages for
   Explorer archetype tone and educational value
3. Ensure Swiss design style is consistent across all pages
4. Add a brief "Why This Matters" section to each exhibit page
   explaining the cultural significance of the era
5. Verify all navigation works correctly
6. Run full verification suite

## Verification
- npm run build passes
- npm run lint passes
- All five exhibit pages load correctly
- Navigation between pages works
- Site reads as a curated exhibition not a generic webpage
- Swiss design style consistent throughout
- Explorer archetype tone present throughout

## Completion Checklist
- [ ] Back link on every exhibit page
- [ ] "Why This Matters" section on each exhibit page
- [ ] Copy reviewed for Explorer tone
- [ ] Swiss style consistent across all pages
- [ ] All navigation working
- [ ] npm run build passes
- [ ] npm run lint passes
- [ ] Site feels like a museum exhibition