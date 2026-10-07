# Portfolio design QA

Source visual truth: ../generated_images/exec-0ce40334-7f48-45f9-a020-76ffd3e97fe1.png (1536 × 1024).

Browser implementation evidence: qa/desktop.jpg, qa/desktop-final.jpg, qa/mobile.jpg, qa/mobile-final.jpg. Desktop CSS viewport: 1363 × 926; desktop full-page capture: 1348 × 1387. Mobile tested in a 393px iframe, 378px available after the scrollbar. Browser screenshot normalization: initial captures 1348px wide; final mobile observation 664 × 936, scaled to normalize its 174px content region to 320px. This is a responsive webpage, not a native mobile app.

State: hero at top, menu closed. Evidence compared together: qa/comparison-desktop.jpg and qa/comparison-mobile-final.jpg. Hero, technology labels, featured card, and service typography were examined at readable sizes in the combined captures.

## Findings and comparison history

- Initial [P2]: Mobile capability text wrapped excessively, increasing vertical spacing. Fixed the list width and wrapping and reduced technology row spacing. Revised mobile evidence shows compact rows without overflow.
- Initial [P2]: Desktop healthcare artwork used on mobile. Added the mobile artwork from the selected reference through a responsive picture element. Revised evidence shows the mobile-specific dashboard.
- No remaining actionable P0/P1/P2 findings in the tested views.

## Fidelity surfaces

- Fonts: Locally bundled Inter with weights 400–800 matches the reference's sans-serif hierarchy. Desktop headline remains two lines; mobile headline stays two lines. Font and exact line metrics are approximate because the source is generated artwork.
- Layout: Split desktop hero, three stack rows, bordered project card and three service columns retained. Mobile changes to one column with a menu. No horizontal overflow observed in the desktop or 378px mobile content view.
- Colors: Charcoal #101315/#151719, lime #d4fa76, ivory text and restrained gray borders match the selected visual direction.
- Assets: Actual selected source artwork is reused, with separate desktop and mobile crops; no approximated dashboard artwork. Phosphor library icons replace the standard mock icons.
- Copy: Name, hero, healthcare contribution and Upwork CTA preserved. Short service copy is edited to avoid unsupported performance or expertise claims. About copy was added to give the existing navigation a useful destination.

## Interaction checks

- Explore my work changes the URL to #work and moves to the work section.
- About navigation changes the URL to #about.
- Mobile menu opens with expanded state and visible links; Services closes it and navigates to #services.
- All three external CTAs point to the user's supplied Upwork profile and open in a new tab with noopener/noreferrer.
- Service links point to the contact section.
- Browser logs checked: no app-origin console errors. Cloud-browser extension metadata errors are outside the app.

## Follow-up polish

[P3] Exact generated font metrics and spacing vary slightly. The illustrative artwork is low resolution compared with a real product screenshot. The About section extends page height intentionally.

Build passed. Narrower devices and 200% text enlargement were not exhaustively tested.

final result: passed
