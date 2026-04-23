# Portfolio Template — Dark Glassmorphism

A modern, futuristic developer portfolio built with React 19, Vite, Tailwind CSS v4, and Framer Motion. Features a dark glassmorphism aesthetic with ruby-red accents, smooth animations, 3D hover effects, and a fully responsive layout.

---

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server at `http://localhost:5173` with hot reload |
| `npm run build` | Build for production — outputs to `dist/` |
| `npm run preview` | Preview the production build locally before deploying |
| `npm run lint` | Run ESLint across all `.js` and `.jsx` files |

---

## Customizing the Template

### Personal Information

| File | What to change |
|---|---|
| `src/components/Hero.jsx` | Name, roles typing animation, social links, code card content |
| `src/components/About.jsx` | Bio paragraph, stats (years, projects, rating) |
| `src/components/Experience.jsx` | Job roles, companies, dates, bullet points |
| `src/components/Skills.jsx` | Skill icons and categories in `row1` / `row2` arrays |
| `src/components/Projects.jsx` | Project titles, descriptions, tags, live/GitHub links |
| `src/components/Contact.jsx` | Contact form destination, social links |
| `src/components/Footer.jsx` | Email, phone, social links, copyright name |
| `index.html` | Page title and meta description |

### Assets

Place your files inside `src/assets/`:

| File | Usage |
|---|---|
| `profile-photo 1.jpg` | Profile photo in the About section |
| `logo.png` | Logo used in Navbar, Footer, and browser favicon |
| `Resume.docx.pdf` | Linked from the "Get Resume" button in Hero |
| `project-1.png` … `Project-7.png` | Project card thumbnail images |

> **Favicon:** `logo.png` is also copied to `public/logo.png` and referenced in `index.html`. If you replace the logo, copy the new file to `public/` as well.

### Colors & Theme

All design tokens are defined in `src/index.css` under `@theme`:

```css
@theme {
  --color-ruby: #E63946;          /* primary accent — change this to retheme the whole app */
  --color-surface: #0A0A0A;       /* page background */
  --color-surface-raised: #111111;
  --color-card: #141414;
  --color-ink: #E3E2E2;           /* primary text color */
  --color-muted: #6B7280;
}
```

The ruby gradient text utility is also defined here:

```css
.ruby-grad {
  background: linear-gradient(90deg, #7A0E1A 0%, #C8202F 40%, #E63946 70%, #FF7B87 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Adding or Removing Projects

Open `src/components/Projects.jsx` and edit the `projects` array. Each entry looks like:

```js
{
  title: 'Your Project',
  tagline: 'Short one-liner',
  description: 'Full description shown on expand.',
  tags: ['React', 'Node.js', 'MongoDB'],
  image: project1,          // import the image at the top of the file
  accent: '#E63946',
  live: 'https://your-live-url.com',
  github: 'https://github.com/you/repo',
}
```

The homepage shows the **first 3** entries. All entries appear on the `/projects` page.

### Adding or Removing Skills

Open `src/components/Skills.jsx` and edit the `row1` / `row2` arrays. Import the icon from `react-icons/si`:

```js
{ name: 'React', icon: SiReact, color: '#61DAFB', category: 'Framework' }
```

### Adding Work Experience

Open `src/components/Experience.jsx` and edit the `jobs` array:

```js
{
  role: 'Senior Developer',
  company: 'Company Name',
  location: 'Remote',
  date: '2022 – Present',
  bullets: [
    'What you built or achieved.',
    'Impact or scale of your work.',
  ],
}
```

---

## Project Structure

```
├── public/
│   └── logo.png                  # favicon + static logo (served directly)
├── src/
│   ├── assets/                   # images, PDF resume, logo
│   ├── components/
│   │   ├── Navbar.jsx            # floating pill navbar with scroll detection
│   │   ├── Hero.jsx              # hero with typing animation + 3D code card
│   │   ├── About.jsx             # bio with typing effect + 3D profile photo
│   │   ├── Experience.jsx        # zigzag timeline layout
│   │   ├── Skills.jsx            # dual infinite marquee rows
│   │   ├── Projects.jsx          # cards with blur-sibling + 3D tilt
│   │   ├── Contact.jsx           # contact form with glowing inputs
│   │   └── Footer.jsx            # links, socials, copyright
│   ├── pages/
│   │   └── ProjectsPage.jsx      # standalone /projects route (all projects)
│   ├── App.jsx                   # route definitions + global background glow
│   ├── main.jsx                  # React root + BrowserRouter
│   └── index.css                 # design tokens, global styles, ruby-grad utility
├── index.html                    # favicon, fonts, page title
├── vite.config.js
└── package.json
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling (no config file needed) |
| Framer Motion | 12 | Animations, layout transitions, scroll effects |
| React Router DOM | 6 | Client-side routing (`/` and `/projects`) |
| React Icons | 5 | Icon sets (si, fa, hi2) |

---

## Deployment

### Vercel (recommended)

```bash
npm run build
# Push to GitHub, then import the repo at vercel.com — zero config needed
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder at netlify.com/drop
```

> For client-side routing (`/projects`) to work on Netlify, create `public/_redirects`:
>
> ```
> /*  /index.html  200
> ```

### Manual / Any Static Host

```bash
npm run build
# Upload the contents of dist/ to any static hosting provider
```

---

## License

MIT — free to use, modify, and distribute.
