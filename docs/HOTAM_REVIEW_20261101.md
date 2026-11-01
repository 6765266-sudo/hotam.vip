# HOTAM focused candidate review — 2026-11-01

Scope: development candidate of PR #8; no merge or production deployment. Initial candidate: `24f78e968e7a08dfee99a6142b3c658a4fc2ee57`. No newer PR comments or candidate were present at review start. All five changed files matched remote Git blob hashes before edits. This is maintainer QA, not independent product certification.

## Repairs

- When automatic clipboard copying fails, expose and select the actual film-selection URL in a labelled, read-only LTR input; preserve the direct YouTube alternative. It no longer forces visitors to share a different destination.
- Correct Hebrew singular search feedback.
- Correct collection-load failure copy: the hero links to the collection, not directly to a film.
- Replace outdated GitHub access-blocker instructions with current draft-PR status. Historical 403 is not a current request for Founder action.

## Browser checks actually performed

- Desktop viewport 1363px: document scrollWidth 1348px; seven film cards. No horizontal overflow. Desktop and mobile screenshots visually inspected.
- Real child viewports in an iframe: 320 / 390 / 1200px; document widths 305 / 375 / 1185px respectively (scrollbar excluded), scrollWidth equals clientWidth; RTL and seven cards. These are viewport checks, not physical phone or Safari acceptance.
- Hebrew search for grandmother: one result; nonexistent term: zero with feedback; clear: seven. Corrected singular feedback observed.
- First film opened by click and Enter; other six by Enter. All seven iframe video IDs and titles matched their selected cards. Close/Escape returned focus to each trigger. No iframe remains after close event. One immediate post-close sample caught the pre-event iframe; subsequent observation confirmed cleanup, and later tests explicitly waited for detach. A mouse-input timeout on the second film did not change UI; keyboard continuation completed the checks.
- Shared link to second film selects/focuses its card with zero player iframes and no autoplay.
- Actual clipboard write/readback succeeded through supported browser control; exact local preview film-selection URL matched. The earlier native-click path returned clipboard failure. Corrected failure branch additionally exercised with a synthetic rejected clipboard implementation in a preview-only fixture: labelled URL visible, fully selected and focused.
- Contact page success and HTTP-failure branches exercised in preview-only copies with fetch replaced by local synthetic responses and action replaced by a local fragment. Success hides form and focuses confirmation heading; failure keeps entered values and re-enables button. No actual Formspree POST or inquiry was sent. Production form source is unchanged in this delta.
- `node --check hotam.js` and `git diff --check` passed.

## Remaining limits

Actual inquiry delivery, email receipt, all-film perceptual picture/audio playback, Safari/Firefox, screen readers and a physical phone were not tested. External YouTube thumbnails failed in this QA environment; the existing local-logo fallback rendered. This review does not establish the cause or availability on the visitor's network. A YouTube player UI loaded, not full media acceptance. Unavailable-collection copy was checked in source, not a forced fetch-failure browser test. Contact timeout behaviour was not changed or certified. Preview fixtures are not production files.

## Preservation and next decision

No changes to videos.json, film/media bytes, CNAME, DNS, analytics ID, contact endpoint, unreleased works or rights-pending Archive content. No new Site, worker, account or paid service. Founder reviews the corrected candidate before a separate publication decision. Keep PR #8 draft; this document does not authorize deployment.
