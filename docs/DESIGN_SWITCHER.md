# Design Switcher Documentation

This document provides instructions on how to switch between the **Original Design** and the **SAP Design** in your portfolio website.

## Overview

Your website now supports two design modes:
- **Original Design**: The current design with decorative elements, animations, and a more creative aesthetic
- **SAP Design**: A clean, enterprise-grade design inspired by SAP's official design system

## Quick Switch

### Method 1: Using the Design Switcher Button

A floating button is automatically added to your website (bottom-right corner). Click it to toggle between designs.

- **When in Original Design**: Button shows "Original" with a palette icon
- **When in SAP Design**: Button shows "SAP Design" with the SAP logo

The preference is automatically saved to your browser's localStorage, so it will persist across sessions.

### Method 2: Programmatic Control

You can also switch designs programmatically using the `useDesignMode` hook:

```tsx
import { useDesignMode } from "@/app/context/DesignContext";

function MyComponent() {
  const { designMode, setDesignMode, toggleDesignMode } = useDesignMode();

  // Get current mode
  console.log(designMode); // "original" or "sap"

  // Set specific mode
  setDesignMode("sap");
  setDesignMode("original");

  // Toggle between modes
  toggleDesignMode();
}
```

### Method 3: Manual localStorage

You can manually set the design mode in the browser console:

```javascript
// Switch to SAP Design
localStorage.setItem("designMode", "sap");
location.reload();

// Switch back to Original Design
localStorage.setItem("designMode", "original");
location.reload();
```

## SAP Design Features

The SAP Design mode implements the following principles from SAP's official design system:

### Typography
- Clean, professional sans-serif font (72 font family)
- Clear hierarchy with proper line heights
- No italic or uppercase transformations (unlike the original design)
- Letter-spacing adjustments for readability

### Colors
- **SAP Blue (#0070f2)**: Primary brand color
- **White (#ffffff)**: Backgrounds and cards
- **Neutral Grays**: Secondary backgrounds and borders
- **Semantic Colors**: Success (green), Warning (amber), Error (red), Information (blue)

### Spacing
- 8px grid system for consistent spacing
- Generous whitespace for clean layout
- Proper padding and margins

### Components
- **Buttons**: Rounded corners (6px), clean borders, no shadows
- **Cards**: Subtle borders, minimal shadows, no decorative elements
- **Inputs**: Clean borders with focus states
- **Navigation**: Sticky with blur backdrop, clean links

### Removed Elements
- Particle backgrounds
- Hero ornaments and decorative elements
- Background images and textures
- Asymmetrical layouts
- Italic typography
- Uppercase transformations
- Heavy shadows and glows

## File Structure

```
app/
├── sap-design.css                    # SAP design tokens and utility classes
├── context/
│   └── DesignContext.tsx             # Design mode state management
├── components/
│   └── Helper/
│       └── DesignSwitcher.tsx        # Design switcher UI component
└── globals.css                       # Global styles with SAP mode overrides
```

## Customization

### Adding SAP Classes to Components

When creating new components, you can use the `useDesignClass` helper for conditional styling:

```tsx
import { useDesignClass } from "@/app/context/DesignContext";

function MyComponent() {
  const cardClass = useDesignClass(
    "bg-card border border-border shadow-2xl rounded-lg", // Original
    "bg-sap-white border border-sap-border rounded-lg"    // SAP
  );

  return <div className={cardClass}>...</div>;
}
```

### Using SAP Design Tokens

All SAP design tokens are available as CSS variables:

```css
.sap-element {
  background-color: var(--sap-primary);
  color: var(--sap-white);
  padding: var(--sap-spacing-m);
  border-radius: var(--sap-radius-m);
  font-family: var(--sap-font-family);
  font-size: var(--sap-font-size-m);
  box-shadow: var(--sap-shadow-2);
}
```

### Available SAP CSS Variables

| Category   | Variables                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------- |
| Colors     | `--sap-primary`, `--sap-success`, `--sap-warning`, `--sap-error`, `--sap-text-primary`, etc. |
| Spacing    | `--sap-spacing-xs`, `--sap-spacing-s`, `--sap-spacing-m`, `--sap-spacing-l`, etc.            |
| Typography | `--sap-font-size-xs` through `--sap-font-size-display`                                       |
| Shadows    | `--sap-shadow-1` through `--sap-shadow-4`                                                    |
| Radius     | `--sap-radius-none`, `--sap-radius-s`, `--sap-radius-m`, `--sap-radius-l`                    |

## Troubleshooting

### Design doesn't switch

1. Check if the DesignProvider is properly wrapped in `app/providers.tsx`
2. Verify that `DesignSwitcher` component is imported in `app/layout.tsx`
3. Clear browser cache and localStorage

### Components not updating

Some components may need to be updated to support both design modes. Check if the component uses the `useDesignMode` hook.

### Styles not applying

Ensure `sap-design.css` is imported in `app/layout.tsx`:
```tsx
import "./sap-design.css";
```

## Design Mode Persistence

The design preference is stored in:
- **localStorage key**: `designMode`
- **Values**: `"original"` or `"sap"`
- **Default**: `"original"` (original design)

## Browser Support

The design switcher works in all modern browsers that support:
- CSS Custom Properties (CSS Variables)
- localStorage
- React Context API

## Contributing

To add SAP design support to a new component:

1. Import `useDesignMode` from `@/app/context/DesignContext`
2. Add conditional rendering based on `designMode`
3. Use SAP CSS classes and design tokens when in SAP mode
4. Test both modes to ensure proper rendering
