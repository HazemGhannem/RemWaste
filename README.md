# Skip Selector Project

## Overview

This project is a responsive Skip Size Selector web app built with React and Tailwind CSS. It allows users to choose from different skip sizes with an intuitive card/list toggle view, enhanced with animations, lazy loading, and skeleton loading indicators to ensure smooth performance and a great user experience.

---

## Project Structure

- **assets/**  
  Contains all SVG components used as icons and illustrations. Using SVG components instead of static images provides more flexibility, easier styling, and better performance.

- **api/**  
  Houses service hooks for data fetching, keeping data logic separated and reusable.

- **types/**  
  Defines TypeScript types such as `Skip` to ensure type safety across the project.

- **components/**  
  Contains reusable UI components like Navbar, Buttons, Animations, Loaders, and Skeletons to promote code reuse and maintainability.

- **cards/**  
  Split into three components: one for card view, one for list view, and a parent component that handles the toggle and animations between views.

---

## Styling & Responsiveness

The project uses **Tailwind CSS** for styling, chosen for its flexibility and rapid development capabilities.  
- Layouts and font sizes use `rem` and percentages for fluid and scalable design.  
- Tailwind’s responsive breakpoints (`sm`, `md`, `lg`, etc.) ensure the UI adapts seamlessly to mobile phones and desktop browsers.

---

## Features

- **Card/List Toggle View:**  
  Users can switch between a card grid and list layout with smooth animations for better usability.

- **Animations:**  
  Subtle animations on cards, alerts, and counters improve the user experience and visual feedback.

- **Lazy Loading & Skeletons:**  
  Components such as cards are lazy-loaded to improve initial load times. Skeleton loaders display placeholders during data fetching, enhancing perceived performance.

- **Performance Icon:**  
  A small icon indicates loading or performance status, keeping users informed.

---

## Development Workflow

1. **Setup:**  
   Initialized the React project and configured Tailwind CSS for styling.

2. **Component Design:**  
   Created reusable components (Navbar, Buttons, Cards, Skeletons) for scalability.

3. **SVG as Components:**  
   Converted SVG assets into React components for better control over styling and interactivity.

4. **Data Fetching:**  
   Built custom hooks in the `api/` folder to fetch skip data, enabling separation of concerns.

5. **View Modes & Animation:**  
   Implemented the toggle between card and list views using state management with React, enhanced with Tailwind animations.

6. **Performance Enhancements:**  
   Added lazy loading with `React.lazy` and dynamic imports, and skeleton loaders for asynchronous content.

7. **Testing & Responsiveness:**  
   Tested on multiple screen sizes and browsers to ensure consistent, responsive behavior.

---

## Conclusion

This project focuses on maintainability, flexibility, and performance. It combines modern React best practices with Tailwind CSS’s utility-first styling to deliver an engaging and responsive user interface for skip size selection.

---



