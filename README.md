# MSCSS Component Library
## Contributors:
### Seth Keirn and Landon Farrar
A reusable **Tailwind CSS React component library** for the **Montana State Club Soccer (MSCS)** web ecosystem.  
This library provides shared UI components, utilities, and styling primitives to ensure a **consistent and unified design** across all MSCS applications — including the main website, admin tools, and supporting apps.

---

## ✨ Features

- 🚀 **Reusable React Components** — Buttons, Cards, Layout, Forms, Navigation, and more  
- 🎨 **Tailwind CSS-based styling** for rapid, consistent UI development  
- 🔗 **Shared design system** used across all MSCS frontend projects  
- 📦 **Local or npm-based package** for easy integration  
- ⚡ **Fully typed** (if using TypeScript)  
- 🧩 Designed to work smoothly with **React + Vite** environments  

---

## 📦 Installation

### Local Development (Recommended for MSCS projects)

From your UI project (e.g., `mscs-ui`):

```bash
npm install ../MSCSS
````

Or if linked via workspace / `package.json`:

```json
"dependencies": {
  "@montana-state-club-soccer/mscss": "file:../MSCSS"
}
```

---

## 🛠️ Usage

Import components directly into your frontend application:

```jsx
import { Button, Card, Input, Badge } from '@montana-state-club-soccer/mscss'

export default function Example() {
  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold">Hello MSCS!</h2>
      <Input placeholder="Type here..." className="mt-4" />
      <Button variant="primary" className="mt-4">Submit</Button>
      <Badge color="blue" className="mt-4">New</Badge>
    </Card>
  )
}
```

All components are styled with Tailwind utility classes, ensuring visual consistency across MSCS apps.

---

## 📁 Project Structure

```
MSCSS/
├── src/
│   ├── components/        # Reusable React components
│   ├── styles/            # Tailwind configs / base styles
│   ├── index.js           # Component exports
│   └── utils/             # Helper utilities (if any)
├── dist/                  # Build output (generated)
├── package.json
└── tailwind.config.js
```

---

## 🧱 Component Categories

(May vary based on implementation)

* **Forms** — Input, Select, Checkbox, Textarea
* **Buttons** — Variants, sizes, icons
* **Feedback** — Badges, Alerts, Modals
* **Layout** — Card, Container, Grid utilities
* **Navigation** — Header, Sidebar (if included)
* **Typography** — Headings, text utilities

---

## 🏗️ Developing the Library

To work on the components directly:

```bash
npm install
npm run dev
```

### Build the library for production use:

```bash
npm run build
```

This generates the compiled output in `dist/`, which is consumed by the UI projects.

---

## 🔄 Using with Vite (Hot Reload Support)

Most MSCS frontend repos use Vite.
To make the MSCSS library update in real-time during development:

1. Edit files in `../MSCSS/src`
2. Rebuild the library:

```bash
cd ../MSCSS
npm run build
```

3. Vite automatically refreshes the consuming UI project

(Or use `vite --force` if caching interferes.)

---

## 🧪 Testing Components

If your library includes tests:

```bash
npm run test
```

---

## 📄 License

Internal MSCS resource — not for public distribution unless approved.

---

## 🤝 Contributing

1. Create a new branch:

   ```bash
   git checkout -b feature/my-component
   ```
2. Add or update components in `src/components`
3. Update exports in `src/index.js`
4. Build and test thoroughly
5. Submit PR for review

---

## 🐦 About the Project

This library is part of the **Montana State Club Soccer web ecosystem**, which includes:

* `mscs-ui` — Public-facing site
* `mscs-api` — Backend API
* Admin and internal tools

MSCSS ensures a unified design system across all of them.

---
