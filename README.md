# Notion Workspace Clone & Layout Inspector

A high-fidelity, responsive clone of Notion's iconic modular workspace landing page, featuring an interactive document block editor, four-pillar product showcase, relational database explorer, template gallery, and a built-in layout & breakpoint inspector.

---

## 🌟 Key Features

### 1. Interactive Notion Block Canvas (Hero Sandbox)
- **Live Block Editor**: Type and edit content right inside the hero viewport.
- **Dynamic Block Types**: Headings, Callout blocks, Checkboxes with completion strikethrough, Toggle lists, and Quotes.
- **Slash Command (`/`) Menu**: Click "+ Add Block" or trigger the popup menu to insert new interactive blocks on the fly.
- **Simulated Notion AI**: Analyze the page in real-time to summarize progress and completed deliverables.
- **Reset Sandbox**: Quickly restore the initial state with one click.

### 2. Four Core Pillars Interactive Showcase
- **Docs**: Live document preview with collaborative team presence tags and typography toggles (*Default Sans*, *Serif*, *Mono*).
- **Wikis**: Centralized knowledge base with verified policy badges, owner info, and instant search filtering.
- **Projects**: 3-column interactive Kanban board (*To Do*, *In Progress*, *Completed*) where tasks can be moved across sprint stages.
- **Notion AI**: Integrated workspace intelligence with quick prompts (*Extract action items*, *Draft project brief*, *Summarize velocity*).

### 3. Asymmetric Bento Grid
- **Connected Relational Databases**: Interactive property explorer toggling between *Relation*, *Formula*, *Rollup*, and *Multi-select* properties.
- **Universal Instant Search**: Filterable search bar with fuzzy matching.
- **Zero Latency Architecture**: Visual cache indicator and sync engine.
- **Enterprise Security**: SAML 2.0, SOC2, HIPAA, and audit logging cards.

### 4. Community Template Gallery
- Filterable across *All Templates*, *Engineering*, *Design*, *Startups*, and *Personal*.
- Detailed preview modal displaying included sections and structure with a duplicate action.

### 5. Customer Stories & Quantified Metrics Ribbon
- Metrics: `100M+ Builders`, `45% Faster Onboarding`, `2.8x Cross-Team Visibility`.
- Verified quotes from Figma, OpenAI, and Ramp.

### 6. Interactive Layout & Breakpoint Inspector Overlay
- **Live Viewport Dimensions**: Real-time display of window dimensions (`px`) and active Tailwind breakpoint (`XS`, `SM`, `MD`, `LG`, `XL`, `2XL`).
- **12-Column Grid Overlay**: Toggleable red column grid guide for structure analysis.
- **CSS Outlines**: Toggleable dashed boundaries highlighting section boxes, flex containers, and grid items.
- **Responsive Frame Simulator**: Test presets (`100% Fluid`, `1440px Desktop`, `1024px Laptop`, `768px Tablet`, `390px Mobile`) directly within the view.

### 7. Interactive Onboarding Flow
- Multi-step modal for testing workspace creation and team configuration.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom theme tokens & dark mode variant
- **Icons**: Lucide React
- **Build Tool**: Vite 8

---

## 🚀 Getting Started

1. Clone or download the repository:
```bash
git clone https://github.com/sathwik-svg/Landing-Page-Clone-upgrade.git
cd Landing-Page-Clone-upgrade
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```
