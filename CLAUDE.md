# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for **SkoolMotion** (student transportation / carpool platform), served at `skoolmotion.com`. There is no build step, no package.json, and no framework — each page is a self-contained `.html` file at the repo root. Deployment is automatic: push to `main` and Vercel deploys in under a minute (see `deployment-guide.md`). Product context lives in `PRD.md`.

The application itself (admin portal + API + mobile app) lives in the separate `TransafeGo` repository; this site only markets it and submits leads to it.

## Shared Files — Use These, Don't Duplicate

Every page includes four shared files (see `index.html` for the include pattern):

- `shell.css` — shared styles (header/nav/footer shell).
- `config.js` — single source of truth for contact info (phone, email, address) and `API_BASE` (`https://admin.skoolmotion.com`, the TransafeGo admin app that serves as the API). It auto-populates any element with classes like `config-phone`, `config-email`, `config-phone-link`, `config-email-link`. **Never hardcode contact details in a page — use these classes.**
- `nav.js` — shared nav behavior (scroll state, mobile menu, dropdown accessibility). It is guarded (`window.__smNavBound`) because some pages still carry legacy inline nav code; don't add new inline nav handlers.
- `analytics.js` — analytics snippet.

## Conventions

- Forms that submit data (carpool pre-registration, availability checker) POST to the admin app at `API_BASE` from `config.js` — never a hardcoded URL.
- When adding a page: include the four shared files above, and update `sitemap.xml` (and `robots.txt` if relevant).
- `marketing/` contains marketing strategy documents (email sequences, ad copy, content calendar) — planning material, not site content served to visitors.
- Pages like `privacy.html`, `cookie.html`, `account-deletion.html`, and `sms-opt-in` exist to satisfy app-store / Twilio compliance requirements — keep their URLs stable, as external services link to them.
