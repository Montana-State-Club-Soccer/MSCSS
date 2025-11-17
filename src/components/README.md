# Component Library Structure

This directory contains all reusable components for the Montana State Club Soccer component library.

## Organization

Components should be organized in their own folders with the following structure:

```
components/
├── Button/
│   ├── Button.tsx
│   ├── Button.types.ts
│   └── index.ts
├── Card/
│   ├── Card.tsx
│   ├── Card.types.ts
│   └── index.ts
```

Each component should:
- Be built with TypeScript
- Use Tailwind CSS for styling
- Export proper TypeScript types
- Be exported from its index.ts file
