---
"@montana-state-club-soccer/mscss": patch
---

Fixed text contrast issues and removed hardcoded content:

- Improved text contrast on blue backgrounds - all components with `bg-primary` now use white or gold text
- Updated Card, Button, Badge, Modal, and Tabs components for better readability
- Removed hardcoded content from Footer (no default copyright text)
- Made LoginForm and SignUpForm fully configurable - all labels, placeholders, and button text can be customized via props
- Added Header and Footer components with Storybook stories and tests
- Fixed 15 failing tests across multiple components
