# Focus Timer

A simple, minimal, and aesthetic productivity timer designed to help you stay focused and manage your breaks effectively. Built with clean, vanilla web technologies.

## Features

- **Multiple Productivity Presets:** Choose from a variety of scientifically-backed focus methodologies:
  - **Micro Focus (12m/3m):** For quick tasks and short bursts of energy.
  - **Short Pomodoro (24m/6m):** A slightly condensed version of the classic method.
  - **Classic Pomodoro (25m/5m):** The standard Pomodoro technique.
  - **Medium Focus (45m/10m):** For longer, sustained concentration.
  - **Deep Study (50m/10m):** Ideal for intensive learning sessions.
  - **52 / 17:** Based on studies of peak productivity rhythms.
  - **Deep Work (75m/25m):** Extended blocks for complex problem-solving.
  - **Maximum (90m/30m):** The maximum recommended human focus limit before a major break.
- **Focus & Break Modes:** Seamlessly switch between dedicated focus time and restful break periods.
- **Manual Transitions:** The timer stops exactly at `00:00`, giving you full control over when to start your next session (no startling automatic jumps or audio alarms).
- **Drift-Free Accuracy:** Utilizes a `Date.now()` synchronization system to guarantee pixel-perfect timer accuracy, even if the browser tab is left in the background for hours.
- **Clean Light Mode UI:** Features a beautifully crafted, modern light theme with custom SVG iconography and smooth CSS transitions.

## Tech Stack

- **HTML5:** Semantic structure.
- **CSS3:** Custom properties (variables), Grid, Flexbox, and conic gradients for the timer ring. Fully responsive design.
- **Vanilla JavaScript (ES6+):** Handles state management, precise timing logic, and DOM manipulation without any heavy frameworks or external dependencies.

## How to Use

1. Clone or download the repository to your local machine.
2. Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Select your desired preset from the right-hand panel (or bottom on mobile).
4. Click **Start** to begin your session.
5. When the timer reaches `00:00`, take your time, and click **Skip** or select the next mode to continue.

## Development

The project is split into three main files for easy maintenance:
- `index.html` - Contains the application layout and UI structure.
- `style.css` - Contains the light theme styles and layout rules.
- `script.js` - Contains the timer logic, preset configurations, and custom SVG icon mappings.
