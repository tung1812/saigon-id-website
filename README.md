# Saigon ID — Interior Design Portfolio Website

A responsive, bilingual portfolio website presenting an interior design and construction business, its services, facilities, and completed projects.

**Live website:** [saigonid.com.vn](https://saigonid.com.vn/)  
**Repository:** [tung1812/saigon-id-website](https://github.com/tung1812/saigon-id-website)

## Overview

This React application organizes the company's work into a visual portfolio. Visitors can explore featured interior projects, browse image galleries, learn about the business and its facilities, and find contact information. The interface supports Vietnamese and English.

## Features

- **Project portfolio:** A projects overview and individual detail pages with photo galleries.
- **Multilingual interface:** Vietnamese and English translations using `i18next` and `react-i18next`, with the language preference saved locally.
- **Client-side navigation:** Separate pages for Home, About, Projects, Furniture, and Infrastructure using React Router.
- **Interactive presentation:** A rotating homepage hero, scroll-triggered transitions, and a back-to-top control.
- **Responsive layouts:** Styles tailored to different screen sizes.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React, JavaScript, JSX, CSS |
| Build tooling | Vite |
| Routing | React Router |
| Internationalization | i18next, react-i18next |
| Code quality | ESLint |

## Run locally

Requirements: a recent version of Node.js and npm compatible with the project's Vite version.

```bash
git clone https://github.com/tung1812/saigon-id-website.git
cd saigon-id-website
npm install
npm run dev
```

Open the local address printed by Vite.

To build and preview a production bundle:

```bash
npm run build
npm run preview
```

To run the lint checks:

```bash
npm run lint
```

## Project structure

```text
src/
├── components/   # Shared header, footer, and page controls
├── hooks/        # Scroll animation logic
├── i18n/         # Language setup and translation content
├── pages/        # Route-level pages and project details
├── styles/       # Shared UI animations and component styles
└── assets/       # Portfolio imagery and icons
```

## Scope and notes

- This is a **frontend portfolio website**, not a full-stack application; the repository does not contain a dedicated backend or database.
- Project content and galleries are maintained in the frontend source rather than fetched from a CMS.
- Images, logos, and business branding are included for showcasing the website; ownership of those materials is separate from the source code.

## Potential improvements

- Move project information into structured data files or a CMS to simplify updates.
- Add automated UI tests and accessibility checks.
- Further optimize image delivery for large galleries.

---

*This README describes functionality visible in the repository. Individual development responsibilities can be added once the project roles are confirmed.*
