# Project Structure After Refactoring

```
chartoon-landing-page/
│
├── src/
│   ├── lib/                          ✨ NEW: Application logic & data
│   │   ├── constants.ts              📌 Centralized types, constants, config
│   │   │   ├── SPACING
│   │   │   ├── BORDER_RADIUS
│   │   │   ├── CHART_DIMENSIONS
│   │   │   ├── COLORS
│   │   │   ├── DATA_ATTRIBUTES
│   │   │   └── ChartId type
│   │   │
│   │   └── snippets.ts               📝 All chart code examples
│   │       ├── CHART_SNIPPETS
│   │       └── getChartSnippets()
│   │
│   ├── i18n/
│   │   └── LocaleProvider.tsx        🌍 I18n context & hooks
│   │
│   ├── components/                   🎨 React Components (organized by domain)
│   │   ├── common/                   ✨ NEW: Shared, reusable components
│   │   │   ├── ChartPlaceholder.tsx  📊 Reusable chart area placeholder
│   │   │   ├── LanguageDropdown.tsx  🌐 Language selector (extracted)
│   │   │   └── NavLink.tsx           🔗 Styled navigation link
│   │   │
│   │   ├── get-started/              ✨ NEW: Feature-specific components
│   │   │   ├── ChartDetailView.tsx   📋 Chart + snippets display
│   │   │   ├── GetStartedIntro.tsx   📖 Installation guide section
│   │   │   └── SideNavigation.tsx    📑 Multi-section navigation
│   │   │
│   │   ├── CodeBlock.tsx             💻 Code display with copy button
│   │   ├── CodeTabs.tsx              📑 Tabbed code snippets
│   │   ├── Features.tsx              ⭐ Features grid section
│   │   ├── Footer.tsx                👣 Footer section
│   │   ├── Header.tsx                🔤 Header (refactored: 30 lines)
│   │   ├── Hero.tsx                  🎭 Hero section
│   │   ├── Showcase.tsx              🖼️ Chart showcase grid
│   │   └── ThemeSwitch.tsx           🌙 Light/dark theme toggle
│   │
│   ├── app/                          📱 Next.js app structure
│   │   ├── page.tsx                  🏠 Home page (unchanged)
│   │   ├── layout.tsx                📐 Root layout
│   │   ├── globals.css               🎨 Global styles & CSS vars
│   │   │
│   │   ├── get-started/
│   │   │   └── page.tsx              ✨ Refactored: 35 lines (was 150)
│   │   │                             Uses: GetStartedIntro, ChartDetailView,
│   │   │                             SideNavigation, getChartSnippets()
│   │   │
│   │   ├── bar-chart/
│   │   │   └── page.tsx              ✨ Refactored: 20 lines (was 60)
│   │   │                             Uses: ChartPlaceholder, getChartSnippets()
│   │   │
│   │   ├── line-chart/
│   │   │   └── page.tsx              ✨ Refactored: 20 lines (was 60)
│   │   │
│   │   ├── pie-chart/
│   │   │   └── page.tsx              ✨ Refactored: 20 lines (was 60)
│   │   │
│   │   └── world-chart/
│   │       └── page.tsx              ✨ Refactored: 20 lines (was 60)
│   │
│   └── styles.d.ts                   TypeScript CSS module definitions
│
├── locales/                          🌐 i18n translation files
│   ├── en.json
│   └── tr.json
│
├── public/                           📦 Static assets
│   └── flags/
│
├── Configuration Files
│   ├── tsconfig.json                 TypeScript config (with @/* path alias)
│   ├── next.config.ts                Next.js config
│   ├── postcss.config.mjs            PostCSS (Tailwind) config
│   ├── eslint.config.mjs             ESLint rules
│   ├── package.json                  Dependencies & scripts
│   └── .gitignore
│
├── Documentation 📚
│   ├── README.md                     Project overview
│   ├── REFACTORING.md                ✨ NEW: Refactoring details
│   └── this file!
```

---

## 🎯 Key Architectural Decisions

### 1. **lib/ Folder for Shared Logic**
- `constants.ts`: Types, config values, enums
- `snippets.ts`: Data (code examples)
- Future: utilities, helpers, hooks

### 2. **components/common/** for Reusable Components
- No dependencies on i18n hooks unless necessary
- Generic props (no business logic)
- Examples:
  - `ChartPlaceholder.tsx` — Purely presentational
  - `NavLink.tsx` — Stateless link wrapper
  - `LanguageDropdown.tsx` — Self-contained with internal state

### 3. **components/get-started/** for Feature Modules
- Components specific to get-started page
- Can use i18n, context hooks
- Examples:
  - `GetStartedIntro.tsx` — Uses i18n
  - `SideNavigation.tsx` — Reusable navigation pattern
  - `ChartDetailView.tsx` — Combines other components

### 4. **app/** for Routes/Pages
- Minimal logic (state management)
- Compose components
- Handle routing, layout
- Examples:
  - `app/page.tsx` — Home (assembles Hero, Features, Showcase)
  - `app/get-started/page.tsx` — Hub page with multi-section view
  - `app/[chart]/page.tsx` — Individual chart pages

---

## 🔄 Data Flow

```
Constants & Types (lib/constants.ts)
        ↓
    Snippets (lib/snippets.ts)
        ↓
   Components (components/*)
        ↓
     Pages (app/**/page.tsx)
        ↓
    Rendered to Browser
```

---

## 📦 Component Dependencies

```
Header.tsx
├── LanguageDropdown.tsx (common)
├── NavLink.tsx (common)
├── ThemeSwitch.tsx
└── useTranslation() hook

get-started/page.tsx
├── SideNavigation.tsx (get-started)
├── GetStartedIntro.tsx (get-started)
├── ChartDetailView.tsx (get-started)
│   ├── ChartPlaceholder.tsx (common)
│   └── CodeTabs.tsx
├── getChartSnippets() (lib/snippets)
└── useTranslation() hook

bar-chart/page.tsx (similar for line, pie, world)
├── ChartPlaceholder.tsx (common)
├── CodeTabs.tsx
└── getChartSnippets() (lib/snippets)
```

---

## 🚀 Performance Implications

| Change | Impact |
|--------|--------|
| Centralized snippets | ✅ Reduces bundle if using code-splitting |
| Extracted components | ✅ Easier to lazy-load components |
| Constants in lib/ | ✅ Tree-shakeable, unused constants removed |
| Smaller pages | ✅ Faster parsing/compilation |
| Proper separation | ✅ Better caching of static components |

---

## 🔐 Type Safety Coverage

All code is fully typed with TypeScript:

```typescript
// Constant types are inferred
export const CHART_TYPES = ["bar", "line", "pie", "world"] as const;
export type ChartType = (typeof CHART_TYPES)[number];

// Component props are explicit
interface ChartPlaceholderProps {
  chartId: string;
  title: string;
  height?: string;
}

// All usages are validated at compile-time
const SNIPPETS = getChartSnippets("bar"); // ✅ Valid
const SNIPPETS = getChartSnippets("invalid"); // ❌ TypeScript error!
```

---

## 📝 File Statistics

### Lines of Code
- `lib/constants.ts`: 45 lines
- `lib/snippets.ts`: 140 lines
- `components/common/*`: ~40 lines total
- `components/get-started/*`: ~80 lines total
- **Total new/extracted**: ~305 lines (well-organized, documented)

### Removed Duplicates
- Chart snippets: -240 lines (was duplicated 4×)
- Header LanguageDropdown: -60 lines (extracted)
- Get-started page: -115 lines (decomposed)
- **Total saved**: ~415 lines of duplicate/monolithic code

---

## ✅ Testing Strategy

### Unit Test Locations
```
__tests__/
├── lib/
│   ├── constants.test.ts
│   └── snippets.test.ts
├── components/
│   ├── common/
│   │   ├── ChartPlaceholder.test.tsx
│   │   ├── LanguageDropdown.test.tsx
│   │   └── NavLink.test.tsx
│   └── get-started/
│       ├── SideNavigation.test.tsx
│       └── ChartDetailView.test.tsx
```

### What to Test
- Constants export correct values
- `getChartSnippets()` returns correct snippet
- Components accept required props
- Navigation buttons trigger callbacks
- Language dropdown changes locale
