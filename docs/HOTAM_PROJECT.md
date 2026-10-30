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

## Delivery status

Production is unchanged. Candidate is committed locally as 338e77e before this status addendum. Direct Git push lacked host credentials. The connected GitHub integration rejected create-tree with 403 Resource not accessible by integration. No alternate mutation was attempted after that denial. Installation 154615782 has selected-repository access and lists NEXORA, TRIPLIO-CANONICAL and SARI-LEGAL only; hotam.vip is not selected. The owner must add hotam.vip to that installation before a remote commit/PR/deployment can proceed. No domain/DNS/hosting changes were attempted. Source package is retained in the existing website Drive folder; no user download is required.


Access update: Founder saved the existing GitHub App installation selection. Connector readback now includes 6765266-sudo/hotam.vip alongside the three previously selected repositories. The previous 403 is historical; remote write and PR creation must be verified before claiming persistence. Production remains unchanged until a separate deployment decision.
