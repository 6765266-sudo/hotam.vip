# HOTAM.VIP — website renewal

Existing website: https://hotam.vip/
Canonical repository: 6765266-sudo/hotam.vip
Implementation branch: hotam/editorial-platform-20261030
Baseline commit: fc822ccf5ea6447820d0167780f50115c44d228b

## Ownership and scope

NEXORA coordinates the website implementation. Existing Archive ownership retains research, source verification, translation and article acceptance. CINORA retains film production and release gates; VERSONA retains music production and release gates. Website work does not expand their release permissions. This document is an implementation brief, not a new governance authority or a claim that a ChatGPT project/chat was created.

## First delivery

- Retain the established dark/gold identity, public domain, published film inventory, analytics ID and contact destination.
- Replace the empty first screen with an editorial introduction and a featured existing film.
- Provide film search, accessible modal viewing, direct YouTube fallback and shareable film selection links.
- Never instantiate YouTube players until visitor action; remove player on close.
- Use textual DOM construction for film metadata, validate video IDs, and handle missing collection/thumbnail/clipboard access.
- Add an Archive section without publishing unverified historical content.
- Fix contact-field associations and visible submission-failure feedback; do not send test inquiries to the owner.

## Content workflow

A film added to videos.json uses the same YouTube ID as its public release. Do not reupload media merely to put it on the website. A completed article should be implemented as a real page with a stable public URL, title, original source, translation and editorial context, after the content owner clears that exact version. A WhatsApp teaser should link to that page. Never describe a link, QR code or watermark as access control.

Existing source, date, translation, image rights and release decisions must travel with each article. Do not copy private research drafts, customer files, unreleased films/music, access tokens or governance records into this public repository. Public article storage is not a paid-content backend. Account, payment and subscription features need a separate implementation and verification.

Future sections for music and The Human Within should be added only when releasable works exist. No fabricated testimonials, audience figures, product claims or placeholders posing as finished work.

## Acceptance / rollback

Verify desktop and narrow layout, Hebrew/RTL, all seven existing titles, search/no-match/reset, film open/Escape/cleanup/focus return, shared-link selection without autoplay, contact navigation and direct YouTube escape route. External media playback and actual form delivery must be reported separately from UI behavior.

Before production replacement retain the exact baseline commit. A failure can be reverted with a new commit restoring the affected baseline files; never reset repository history. Preserve CNAME, DNS, existing media and ownership. No new hosting subscription or domain/DNS change is required for this frontend candidate.

## Candidate validation — 2026-10-30

Browser inspection covered the rendered desktop layout and a 390px iframe viewport (document width 375px including its scrollbar, no horizontal overflow). Seven cards were present. Searching the Hebrew word for grandmother produced one result; an absent term produced the explicit no-result message; clearing restored seven. The exact first video opened the corresponding YouTube-nocookie player with its correct title. Closing/Escape removed the iframe and returned focus. The share URL selected the corresponding card without creating a player. Actual perceptual film/audio acceptance was not performed. Clipboard share text handling was inspected in code, not independently exercised against a user's WhatsApp account.

Thumbnails failed to load in this browser; the local brand fallback rendered instead of broken images. The hero uses an existing repository illustration and explicitly identifies it as illustrative. Contact submission feedback was repaired in code; no real inquiry was sent, so receipt at Formspree/email is not verified. Existing DNS, CNAME, video inventory and media bytes are untouched.

## Delivery status — current

PR #8 is OPEN / DRAFT and its initial remote candidate is 24f78e968e7a08dfee99a6142b3c658a4fc2ee57. Connector reads verified the exact candidate and repository write/admin permissions on 2026-11-01. The GitHub App repository selection was corrected by the Founder; no further repository-selection action is requested.

The earlier create-tree 403 and missing local Git credentials are historical. They do not describe the current access state. The remote draft PR was subsequently created successfully. Production remains unchanged; merge and deployment are not authorized by this review.

## Focused review — 2026-11-01

The five changed source files were compared by Git blob SHA against the exact remote initial candidate before editing. Local Git history has a different intermediate documentation commit; matching file content is not described as matching local HEAD.

Observed defect: when clipboard access failed, the share action offered only a different YouTube URL. The candidate now exposes and selects the actual site film-selection URL in a labelled read-only field for manual copying. Search singular feedback and the collection-load failure message were also corrected (the hero does not contain a direct film).

Review evidence and remaining limits are recorded in docs/HOTAM_REVIEW_20261101.md. Synthetic form checks do not prove Formspree delivery; no real inquiry is sent. No rights-pending articles, unreleased films/music, DNS or analytics configuration changes are included.
