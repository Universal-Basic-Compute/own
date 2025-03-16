# Own.ai Color Scheme Proposition

## Primary Colors

| Color Name | Hex Code | RGB | Description |
|------------|----------|-----|-------------|
| AI Blue | #0066FF | rgb(0, 102, 255) | Primary brand color representing technology and innovation |
| Financial Green | #00CC99 | rgb(0, 204, 153) | Secondary brand color representing financial growth and prosperity |
| Ownership Purple | #6633CC | rgb(102, 51, 204) | Tertiary brand color representing ownership and premium value |

## Gradient Combinations

| Gradient Name | Colors | Usage |
|---------------|--------|-------|
| Future Wealth | AI Blue → Financial Green | Primary CTAs, hero sections, important UI elements |
| Digital Asset | AI Blue → Ownership Purple | Secondary CTAs, feature highlights, AI asset visualizations |
| Growth Path | Financial Green → Ownership Purple | Progress indicators, success states, achievement visuals |

## Status Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Success | #00E676 | rgb(0, 230, 118) | Confirmations, completed actions |
| Warning | #FFAB00 | rgb(255, 171, 0) | Alerts, important notices |
| Error | #FF5252 | rgb(255, 82, 82) | Error states, critical issues |
| Info | #2196F3 | rgb(33, 150, 243) | Informational messages, tips |

## Chart & Data Visualization Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Data Blue 1 | #29B6F6 | rgb(41, 182, 246) | Primary chart color |
| Data Green 1 | #26A69A | rgb(38, 166, 154) | Secondary chart color |
| Data Purple 1 | #9575CD | rgb(149, 117, 205) | Tertiary chart color |
| Data Blue 2 | #5C6BC0 | rgb(92, 107, 192) | Additional chart color |
| Data Green 2 | #66BB6A | rgb(102, 187, 106) | Additional chart color |
| Data Purple 2 | #BA68C8 | rgb(186, 104, 200) | Additional chart color |

## Supporting Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Dark | #212121 | rgb(33, 33, 33) | Primary text, headers |
| Medium Dark | #616161 | rgb(97, 97, 97) | Secondary text, labels |
| Medium | #9E9E9E | rgb(158, 158, 158) | Disabled text, tertiary information |
| Light Medium | #E0E0E0 | rgb(224, 224, 224) | Borders, dividers |
| Light | #F5F5F5 | rgb(245, 245, 245) | Backgrounds, cards |
| White | #FFFFFF | rgb(255, 255, 255) | Page backgrounds, text on dark colors |

## Background Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Deep Space | #121212 | rgb(18, 18, 18) | Dark mode background |
| Night Mode | #1E1E1E | rgb(30, 30, 30) | Dark mode secondary background |
| Light Cloud | #FAFAFA | rgb(250, 250, 250) | Light mode background |
| Paper White | #FFFFFF | rgb(255, 255, 255) | Light mode secondary background |

## Usage Guidelines

### Brand Identity
- Use AI Blue as the dominant color for brand recognition
- Apply Financial Green to elements related to growth, earnings, and success
- Reserve Ownership Purple for premium features, ownership concepts, and high-value elements

### User Interface
- Maintain a 60% (neutral colors) / 30% (primary colors) / 10% (accent colors) ratio
- Use gradients sparingly for important interactive elements
- Ensure sufficient contrast between text and background colors
- Apply status colors consistently across the platform

### Data Visualization
- Use the chart color palette sequentially for consistency
- Ensure all data visualizations are accessible and distinguishable
- Maintain consistent color meaning across different charts and graphs

## Accessibility Considerations

- All color combinations must meet WCAG 2.1 AA standards for contrast
- Provide alternative visual indicators beyond color for important status information
- Test the color scheme with various forms of color blindness
- Ensure the design works in both light and dark modes

---

# Own.ai Design Language & Animation System

## Design Philosophy

The Own.ai design language embodies three core principles:

1. **Empowerment through Clarity** - Design elements that make complex financial and AI concepts accessible and actionable
2. **Digital Ownership** - Visual language that conveys the tangible value of digital assets
3. **Progressive Revelation** - Interface elements that adapt to the user's journey from novice to expert

## Typography

### Primary Font: Montserrat
- Headings and important UI elements
- Weights: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)
- Conveys modern, professional, and accessible character

### Secondary Font: Inter
- Body text, UI elements, data displays
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Optimized for screen readability at all sizes

### Typographic Scale
| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 40px | Bold | 48px | Page titles, hero sections |
| H2 | 32px | Bold | 40px | Section headers |
| H3 | 24px | SemiBold | 32px | Card headers, feature titles |
| H4 | 20px | SemiBold | 28px | Subsection headers |
| Body 1 | 16px | Regular | 24px | Primary content text |
| Body 2 | 14px | Regular | 20px | Secondary content, UI elements |
| Caption | 12px | Medium | 16px | Supporting text, labels |
| Button | 16px | SemiBold | 24px | Call to action text |

## Iconography

### Style Guidelines
- Consistent 2px stroke weight
- Rounded corners (2px radius)
- Minimal, functional design
- Clear meaning without labels when possible

### Icon Categories
1. **Navigation Icons** - Consistent system for platform navigation
2. **Action Icons** - Clear visual cues for interactive elements
3. **Status Icons** - Distinct visuals for different states
4. **Asset Icons** - Unique representations for different AI asset types
5. **Financial Icons** - Intuitive symbols for financial concepts

### Implementation
- SVG format for all icons
- Variable color support (can inherit from parent elements)
- Consistent padding within 24x24px viewbox
- Responsive scaling without loss of clarity

## Component Design

### Cards
- Subtle drop shadows (0px 4px 12px rgba(0, 0, 0, 0.08))
- 8px border radius
- Consistent internal padding (16px or 24px)
- Optional highlight borders (left or top) using brand colors

### Buttons
- Primary: Gradient backgrounds using brand colors
- Secondary: Outlined with brand color borders
- Tertiary: Text-only with brand colors
- 8px border radius
- Consistent height (48px for primary, 40px for secondary/tertiary)
- Icon+text combinations with 8px spacing

### Forms
- Floating labels that transform on focus
- Clear validation states with both color and icon indicators
- Consistent field heights (48px)
- 4px border radius
- Animated focus states

### Navigation
- Clear active/inactive states
- Subtle hover animations
- Consistent spacing between items
- Optional icon+text combinations

## Animation System

### Principles
1. **Purposeful** - Animations should guide users and provide feedback, not distract
2. **Fluid** - Natural, physics-based movements that feel organic
3. **Efficient** - Quick enough to not impede experienced users
4. **Consistent** - Similar elements animate in similar ways

### Timing Functions
| Name | Curve | Duration | Usage |
|------|-------|----------|-------|
| Standard | cubic-bezier(0.4, 0.0, 0.2, 1) | 300ms | Most UI transitions |
| Accelerate | cubic-bezier(0.0, 0.0, 0.2, 1) | 200ms | Elements entering screen |
| Decelerate | cubic-bezier(0.4, 0.0, 1, 1) | 200ms | Elements exiting screen |
| Sharp | cubic-bezier(0.4, 0.0, 0.6, 1) | 150ms | Quick feedback, toggles |

### Micro-interactions
1. **Button States**
   - Hover: Subtle scale (1.02) and brightness increase (5%)
   - Active: Quick scale down (0.98) and brightness decrease (5%)
   - Loading: Pulsing opacity or inline spinner

2. **Form Interactions**
   - Focus: Border animation and label transition
   - Validation: Smooth color transitions and icon appearance
   - Error/Success: Gentle shake animation for errors

3. **Card Interactions**
   - Hover: Slight elevation increase and shadow expansion
   - Selection: Border highlight animation
   - Expansion: Smooth height/width transitions for revealing content

### Page Transitions
1. **Content Loading**
   - Staggered fade-in for content blocks (50ms delay between elements)
   - Progressive loading states for data-heavy sections
   - Skeleton screens for content awaiting data

2. **Navigation Transitions**
   - Slide transitions between related content
   - Fade transitions between unrelated content
   - Maintain position awareness through consistent animation directions

3. **Modal Interactions**
   - Background dim animation (150ms)
   - Modal entrance with slight scale-up from 0.95 to 1.0
   - Exit with fade and scale-down

### Data Visualization Animations
1. **Chart Loading**
   - Sequential element appearance
   - Drawing animations for lines and paths
   - Staggered bar/column growth

2. **Data Updates**
   - Smooth transitions between data states
   - Color shifts for status changes
   - Value counting animations for significant metrics

3. **User-triggered Filters**
   - Smooth sorting/filtering transitions
   - Clear cause-and-effect animation relationships
   - Maintain context during significant data view changes

## Implementation Recommendations

### CSS Variables
- Store all colors, timing functions, and animation parameters as CSS variables
- Implement dark/light mode through variable swapping
- Use consistent naming conventions for all design tokens

### Animation Libraries
- Use CSS transitions for simple state changes
- Implement GSAP for complex, chained animations
- Consider Lottie for highly detailed animated illustrations

### Component Architecture
- Build a comprehensive Figma component library
- Implement as React components with StoryBook documentation
- Ensure all components support responsive behavior
- Document accessibility features and keyboard interactions

### Performance Considerations
- Optimize animations to use GPU-accelerated properties (transform, opacity)
- Implement reduced motion options for accessibility
- Set animation thresholds to prevent performance issues on lower-end devices
- Test animation performance across device types
