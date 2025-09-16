# Component Structure

This directory contains all React components organized by type and purpose.

## Directory Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx        # Button component with variants
│   │   ├── Card.tsx          # Card container component
│   │   ├── Input.tsx         # Form input component
│   │   ├── Badge.tsx         # Badge component
│   │   └── Stat.tsx          # Statistics display component
│   └── sections/             # Page section components
│       ├── Sidebar.tsx       # Main navigation sidebar
│       ├── Topbar.tsx        # Top navigation bar
│       ├── KPIStats.tsx      # Key Performance Indicators
│       ├── OrdersTable.tsx   # Orders listing table
│       └── SalesChart.tsx    # Sales trend chart
├── layouts/
│   └── SiteLayout.tsx        # Main site layout with RTL support
└── pages/
    └── SellerDashboard.tsx   # Main dashboard page
```

## Features

### RTL Support
- All components are designed with RTL (Right-to-Left) support for Persian/Farsi
- Uses `dir="rtl"` at the layout root
- Proper text alignment and icon positioning

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Responsive grid layouts (sm/md/lg/xl)
- Flexible sidebar that adapts to screen size

### Accessibility
- Semantic HTML elements
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management

### Component Variants
- Button: primary, secondary, outline, ghost
- Badge: default, success, warning, error, info
- Card: different padding sizes

## Usage Examples

### Basic Button
```tsx
import Button from '../components/ui/Button';

<Button variant="primary" size="md">
  Click me
</Button>
```

### Statistics Card
```tsx
import Stat from '../components/ui/Stat';

<Stat
  title="Total Sales"
  value="1,234,567"
  change="+12% from last month"
  changeType="positive"
  icon={<TrendingUp className="w-6 h-6" />}
/>
```

### Layout Usage
```tsx
import SiteLayout from '../layouts/SiteLayout';
import SellerDashboard from '../pages/SellerDashboard';

<SiteLayout>
  <SellerDashboard />
</SiteLayout>
```

## Dependencies

- React 19+
- Tailwind CSS 3.4+
- Lucide React (icons)
- Recharts (charts)
- React Router DOM
- Classnames (utility)
