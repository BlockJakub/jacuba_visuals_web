# Jacuba Visuals Web

Professional web development business website focused on trust, local visibility, portfolio proof, and lead generation.

---

## 1. Project purpose

This project is the main business website for offering web development services.

The website must do 3 jobs well:

1. **Sell services** — clearly explain what is offered.
2. **Build trust** — show skills, project examples, reviews, and professional structure.
3. **Generate enquiries** — guide visitors toward contact, quote requests, and Google reviews.

This is **not** a separate portfolio website.
Portfolio will be integrated into the main business website as one of the core sections/pages.

---

## 2. Main business goal

Turn website visitors into real leads for:

- small business websites
- restaurant or food business websites
- landing pages
- redesigns
- front-end development work
- simple custom JavaScript systems
- small business digital presence improvements

---

## 3. Core website principles

The website must be:

- professional
- clean and modern
- fast loading
- responsive on all devices
- search engine friendly
- easy to expand later
- structured with reusable code
- suitable for GitHub hosting

No PHP will be used in this version.

---

## 4. Technical rules

### Front-end stack

- HTML5
- SCSS using Dart Sass
- JavaScript
- Transpiled JavaScript build step
- Modular architecture

### Performance rules

- responsive layout
- responsive images
- lazy loading for non-critical images
- compressed images
- minimal JavaScript on first load
- reusable SCSS modules
- compiled CSS output
- avoid bloated libraries unless truly needed

### SEO rules

- semantic HTML structure
- one clear H1 per page
- unique title tag per page
- unique meta description per page
- meaningful headings structure (H1 -> H2 -> H3)
- descriptive alt text for real content images
- internal linking between pages
- good URL naming
- readable content focused on service + location intent

---

## 5. Important SEO clarification

### Title tag vs H1

These are **not the same thing**.

#### Title tag

The title tag appears mainly in:

- browser tab
- Google search results
- social/link previews in some cases

Example:

`Web Development in Leven | Jacuba Visuals Web`

#### H1

The H1 is the main visible heading on the page.

Example:

`Professional Web Development Services in Leven`

### Rule

The title and H1 should support the same keyword/topic, but they do **not** need to be identical.

That is often better because it avoids robotic repetition.

---

## 6. Website structure

Planned main pages:

1. **Home**
2. **Services**
3. **Portfolio**
4. **Reviews**
5. **About**
6. **Contact**

Possible future pages:

- individual project detail pages
- blog/articles
- FAQ
- local service pages for nearby towns

---

## 7. What each page must do

### Home

Purpose:

- explain who the business helps
- explain the main offer quickly
- show trust signals
- direct users to contact or portfolio

Includes:

- hero section
- short business introduction
- key benefits
- featured services
- selected projects
- testimonials preview
- call to action

### Services

Purpose:

- explain what is offered
- show business value, not only technical features

Includes:

- service cards or sections
- who each service is for
- benefits
- process summary
- call to action

### Portfolio

Purpose:

- prove ability through real examples

Includes:

- project cards
- image preview
- project summary
- tech used
- business outcome or purpose

### Reviews

Purpose:

- build trust and social proof

Includes:

- testimonials
- optional star layout
- button linking to Google Business review page

### About

Purpose:

- make the business feel personal and trustworthy

Includes:

- personal introduction
- work philosophy
- strengths
- visual/brand identity

### Contact

Purpose:

- make contacting easy

Includes:

- email
- contact form placeholder or static contact methods
- links to professional profiles
- clear call to action

---

## 8. Design and content priorities

Priority order:

1. clarity
2. trust
3. speed
4. mobile usability
5. SEO structure
6. visual polish

The site must not feel chaotic or overloaded.

Each section must answer one of these questions:

- What do you do?
- Why should I trust you?
- What have you built?
- How do I contact you?

---

## 9. Branding direction

The site should present:

- professional developer
- practical business problem solver
- someone who builds clean, useful websites
- someone who understands structure, performance, and presentation

Tone should be:

- confident
- direct
- professional
- clear

---

## 10. Suggested folder structure

```text
jacuba-visuals-web/
│
├── README.md
├── package.json
├── .gitignore
│
├── src/
│   ├── index.html
│   ├── services.html
│   ├── portfolio.html
│   ├── reviews.html
│   ├── about.html
│   ├── contact.html
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── favicons/
│   │
│   ├── scss/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _functions.scss
│   │   │
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _base.scss
│   │   │   ├── _typography.scss
│   │   │   └── _utilities.scss
│   │   │
│   │   ├── layout/
│   │   │   ├── _container.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   └── _navigation.scss
│   │   │
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _section-heading.scss
│   │   │   ├── _testimonials.scss
│   │   │   ├── _project-card.scss
│   │   │   └── _contact-block.scss
│   │   │
│   │   ├── pages/
│   │   │   ├── _home.scss
│   │   │   ├── _services.scss
│   │   │   ├── _portfolio.scss
│   │   │   ├── _reviews.scss
│   │   │   ├── _about.scss
│   │   │   └── _contact.scss
│   │   │
│   │   └── main.scss
│   │
│   └── js/
│       ├── main.js
│       ├── navigation.js
│       ├── lazyload.js
│       └── modules/
│           └── helpers.js
│
└── dist/
    ├── css/
    ├── js/
    └── assets/
```

---

## 11. Build philosophy

Use source files in `src/` and compile final production-ready files into `dist/`.

This keeps the project organized and easier to maintain.

### Why this matters

- cleaner workflow
- easier debugging
- reusable SCSS structure
- easier future scaling
- better separation between source and output files

---

## 12. Planned development order

We will build this step by step.

### Phase 1 — Foundation

- define project architecture
- define folder structure
- define page structure
- define SEO direction
- create homepage content plan

### Phase 2 — Base front-end system

- base HTML template
- SCSS architecture
- variables, reset, typography
- container and grid
- reusable button and card styles

### Phase 3 — Homepage

- hero
- benefits/services preview
- featured projects
- testimonial preview
- contact call to action

### Phase 4 — Remaining pages

- services
- portfolio
- reviews
- about
- contact

### Phase 5 — Optimization

- responsive improvements
- image optimization
- lazy loading
- metadata checks
- accessibility checks
- performance cleanup

---

## 13. SEO content direction

Primary target themes:

- web development
- web design
- responsive websites
- small business websites
- fast loading websites
- SEO friendly websites
- local business web development in Leven / Scotland

Important:

Content must be written for humans first, but structured so search engines clearly understand:

- the service
- the location relevance
- the business purpose
- the trust signals

---

## 14. Google Business integration

The website should support Google Business visibility.

Planned integration:

- link to Google Business profile
- link to Google review form
- review call-to-action button
- consistent branding and service wording across website and business profile

---

## 15. Future upgrades

Possible later improvements:

- blog for SEO growth
- project detail pages
- downloadable PDF service guide
- pricing guide
- FAQ page
- simple contact form service using a static form provider
- analytics and search console integration

---

## 16. Non-goals for this version

To keep the project focused, this first version will **not** include:

- PHP
- database
- authentication
- dashboard
- admin area
- booking system
- order system

This version is a professional static business website.

---

## 17. Definition of success

The project is successful when:

- the structure is clean and expandable
- the homepage clearly sells the service
- the website looks professional on mobile and desktop
- the portfolio supports credibility
- the site is ready for GitHub deployment
- the SEO foundations are correctly built

---

## 18. Immediate next step

After this README, the next task should be:

**Create the exact project folder structure and base development workflow.**

That means:

- project folders
- SCSS architecture setup
- JavaScript folder plan
- build tools plan for Dart Sass and JavaScript transpilation

---

## 19. Working rule

We move one clear step at a time.

No jumping ahead.
No chaos.
No mixing design, SEO, and code randomly.

Each step must be approved mentally against this README before moving on.
