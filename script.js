const presets = [
  { id: "micro", name: "Micro Focus", focus: 12, break: 3, icon: "sparkle" },
  { id: "short", name: "Short Pomodoro", focus: 24, break: 6, icon: "timer" },
  { id: "classic", name: "Classic Pomodoro", focus: 25, break: 5, icon: "classicPomodoro" },
  { id: "medium", name: "Medium Focus", focus: 45, break: 10, icon: "mediumFocus" },
  { id: "deep", name: "Deep Study", focus: 50, break: 10, icon: "deepStudy" },
  { id: "balanced", name: "52 / 17", focus: 52, break: 17, icon: "fiftyTwoSeventeen" },
  { id: "long", name: "Deep Work", focus: 75, break: 25, icon: "deepWork" },
  { id: "max", name: "Maximum", focus: 90, break: 30, icon: "maximum" },
];

const icons = {
  clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  timer: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="15" y2="11"/><circle cx="12" cy="14" r="8"/></svg>',
  brain: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/></svg>',
  coffee: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>',
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  pause: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>',
  reset: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
  skip: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>',
  sparkle: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 3v4"/><path d="M17 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>',
  mediumFocus: '<svg width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M4.62 1.438A2.38 2.38 0 0 1 7 3.818v6.47a2.724 2.724 0 1 1-5.439-.228C.994 9.45.636 8.26.636 7.265c0-1.354.665-2.67 1.617-3.189A2.38 2.38 0 0 1 4.62 1.438"/><path d="M3.511 5.694c-.35-.08-1.141-.599-1.26-1.611M4.97 8.365C6.398 8.205 6.963 6.699 7 6.086M2.29 8.632c-.356.28-.64.917-.731 1.427M9.38 1.438A2.38 2.38 0 0 0 7 3.818v6.47a2.724 2.724 0 1 0 5.439-.228c.567-.61.924-1.8.924-2.795c0-1.354-.664-2.67-1.617-3.189A2.38 2.38 0 0 0 9.38 1.438"/><path d="M10.489 5.694c.35-.08 1.141-.599 1.26-1.611M9.03 8.365C7.602 8.205 7.037 6.699 7 6.086m4.71 2.546c.356.28.64.917.731 1.427"/></svg>',
  deepStudy: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15.5 13a3.5 3.5 0 0 0-3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-7 0v-1.8"/><path d="M17.5 16a3.5 3.5 0 0 0 0-7H17"/><path d="M19 9.3V6.5a3.5 3.5 0 0 0-7 0M6.5 16a3.5 3.5 0 0 1 0-7H7"/><path d="M5 9.3V6.5a3.5 3.5 0 0 1 7 0v10"/></svg>',
  deepWork: '<svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M248 124a56.11 56.11 0 0 0-32-50.61V72a48 48 0 0 0-88-26.49A48 48 0 0 0 40 72v1.39a56 56 0 0 0 0 101.2V176a48 48 0 0 0 88 26.49A48 48 0 0 0 216 176v-1.41A56.09 56.09 0 0 0 248 124ZM88 208a32 32 0 0 1-31.81-28.56A55.87 55.87 0 0 0 64 180h8a8 8 0 0 0 0-16h-8a40 40 0 0 1-13.33-77.73A8 8 0 0 0 56 78.73V72a32 32 0 0 1 64 0v68.26A47.8 47.8 0 0 0 88 128a8 8 0 0 0 0 16a32 32 0 0 1 0 64Zm104-44h-8a8 8 0 0 0 0 16h8a55.87 55.87 0 0 0 7.81-.56A32 32 0 1 1 168 144a8 8 0 0 0 0-16a47.8 47.8 0 0 0-32 12.26V72a32 32 0 0 1 64 0v6.73a8 8 0 0 0 5.33 7.54A40 40 0 0 1 192 164Zm16-52a8 8 0 0 1-8 8h-4a36 36 0 0 1-36-36v-4a8 8 0 0 1 16 0v4a20 20 0 0 0 20 20h4a8 8 0 0 1 8 8Zm-148 8h-4a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-4a8 8 0 0 1 16 0v4a36 36 0 0 1-36 36Z"/></svg>',
  classicPomodoro: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M6.16 4.6A4.054 4.054 0 0 1 8 7.994c0-1.415.726-2.66 1.825-3.384c.23-.199.426-.395.609-.602L5.56 4.001c.19.214.386.41.593.594z"/><path d="M11.18 6.06A4.399 4.399 0 0 0 13 2.5V2h1V0H2v2h1v.5a4.391 4.391 0 0 0 1.808 3.551A2.564 2.564 0 0 1 6 7.99a2.755 2.755 0 0 1-1.209 2.003a4.441 4.441 0 0 0-1.79 3.503v.503h-1v2h12v-2h-1v-.5a4.435 4.435 0 0 0-1.769-3.492a2.762 2.762 0 0 1-1.23-1.996a2.551 2.551 0 0 1 1.169-1.946zM9 8a3.693 3.693 0 0 0 1.519 2.763A3.477 3.477 0 0 1 12 13.495V14h-1.77c-.7-.87-1.71-2-2.23-2s-1.53 1.13-2.23 2H4v-.5a3.472 3.472 0 0 1 1.459-2.723a3.698 3.698 0 0 0 1.54-2.766a3.482 3.482 0 0 0-1.498-2.683a3.438 3.438 0 0 1-1.502-2.827v-.5h8v.5a3.426 3.426 0 0 1-1.479 2.813a3.487 3.487 0 0 0-1.521 2.678z"/></svg>',
  fiftyTwoSeventeen: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="m15.81 10l-2.5-5H14a.5.5 0 0 0 0-1h-.79a6.04 6.04 0 0 0-4.198-1.95L9 2a1 1 0 0 0-2 0v.05a6.168 6.168 0 0 0-4.247 1.947L2 4a.5.5 0 0 0 0 1h.69l-2.5 5H0c0 1.1 1.34 2 3 2s3-.9 3-2h-.19L3.26 4.91a.525.525 0 0 0 .159-.148A4.842 4.842 0 0 1 6.994 3.06L7 14H6v1H4v1h8v-1h-2v-1H9V3.06a4.71 4.71 0 0 1 3.524 1.693a.519.519 0 0 0 .193.186L10.19 10H10c0 1.1 1.34 2 3 2s3-.9 3-2h-.19zM5 10H1l2-3.94zm6 0l2-3.94L15 10h-4z"/></svg>',
  maximum: '<svg width="20" height="20" viewBox="0 0 1025 896" fill="currentColor"><path d="M960.585 192h-2l2 444v4q0 26-19 45t-45 19h-768q-27 0-45.5-19t-18.5-45v-4l2-444h-2q-27 0-45.5-18.5T.585 128t18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 33-27 52l219 310l166-368q-17-7-27.5-23t-10.5-35q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 19-10.5 35t-27.5 23l166 368l219-310q-27-19-27-52q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5t-19 45.5t-45 18.5zm-896 576h896q26 0 45 18.5t19 45t-19 45.5t-45 19h-896q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5z"/></svg>',
};

let selectedId = "classic";
let mode = "focus";
let isRunning = false;
let intervalId = null;
let remaining = 25 * 60;
let targetTime = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  durationPill: $("#duration-pill"),
  focusMode: $("#focus-mode"),
  breakMode: $("#break-mode"),
  timerRing: $("#timer-ring"),
  modeLabel: $("#mode-label"),
  modeLabelText: $("#mode-label-text"),
  time: $("#time"),
  timerPreset: $("#timer-preset"),
  startPause: $("#start-pause"),
  startPauseText: $("#start-pause-text"),
  reset: $("#reset"),
  skip: $("#skip"),
  presets: $("#presets"),
};

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(Number(seconds) || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getSelectedPreset() {
  return presets.find((preset) => preset.id === selectedId) || presets[2];
}

function getModeDurationSeconds(currentMode, preset) {
  if (!preset) return 0;
  return currentMode === "break" ? preset.break * 60 : preset.focus * 60;
}

function getTimerProgress(totalSeconds, remainingSeconds) {
  if (!totalSeconds || totalSeconds <= 0) return 0;
  const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
  return Math.min(100, Math.max(0, progress));
}

function runTimerSelfTests() {
  const tests = [
    ["formatTime handles zero", formatTime(0) === "00:00"],
    ["formatTime handles one second", formatTime(1) === "00:01"],
    ["formatTime handles one minute", formatTime(60) === "01:00"],
    ["formatTime handles long durations", formatTime(90 * 60) === "90:00"],
    ["formatTime clamps negative values", formatTime(-12) === "00:00"],
    ["focus duration is selected", getModeDurationSeconds("focus", presets[2]) === 25 * 60],
    ["break duration is selected", getModeDurationSeconds("break", presets[2]) === 5 * 60],
    ["progress starts at zero", getTimerProgress(1500, 1500) === 0],
    ["progress reaches one hundred", getTimerProgress(1500, 0) === 100],
    ["progress clamps overflow", getTimerProgress(1500, -10) === 100],
  ];

  const failed = tests.filter(([, passed]) => !passed);
  if (failed.length > 0) {
    console.error("Focus Timer self-tests failed:", failed.map(([name]) => name));
  }
}

function icon(name) {
  return icons[name] || icons.clock;
}

function hydrateInlineIcons() {
  $$('[data-icon]').forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

function setRunning(nextRunning) {
  isRunning = nextRunning;

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  if (isRunning) {
    targetTime = Date.now() + remaining * 1000;
    
    intervalId = setInterval(() => {
      const now = Date.now();
      const newRemaining = Math.ceil((targetTime - now) / 1000);

      if (newRemaining <= 0) {
        setRunning(false);
        remaining = 0;
        render();
        return;
      }

      if (newRemaining !== remaining) {
        remaining = newRemaining;
        render();
      }
    }, 200);
  }

  render();
}

function setMode(nextMode) {
  mode = nextMode;
  remaining = getModeDurationSeconds(mode, getSelectedPreset());
  setRunning(false);
}

function choosePreset(presetId) {
  selectedId = presetId;
  mode = "focus";
  remaining = getModeDurationSeconds(mode, getSelectedPreset());
  setRunning(false);
}

function renderPresets() {
  elements.presets.innerHTML = presets
    .map((preset) => {
      const selected = preset.id === selectedId;
      return `
        <button class="preset-button ${selected ? "active" : ""}" type="button" data-preset-id="${preset.id}">
          <span class="preset-left">
            <span class="preset-icon">${icon(preset.icon)}</span>
            <span>
              <span class="preset-title">${preset.name}</span>
              <span class="preset-subtitle">${preset.focus} min focus</span>
            </span>
          </span>
          <span>
            <span class="preset-duration">${preset.focus}/${preset.break}</span>
            <span class="preset-unit">min</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function render() {
  const preset = getSelectedPreset();
  const totalSeconds = getModeDurationSeconds(mode, preset);
  const progress = getTimerProgress(totalSeconds, remaining);

  elements.durationPill.textContent = `${preset.focus}m / ${preset.break}m`;
  elements.time.textContent = formatTime(remaining);
  elements.timerPreset.textContent = preset.name;
  elements.timerRing.style.background = `conic-gradient(#111827 ${progress}%, rgba(0, 0, 0, 0.05) ${progress}%)`;
  elements.modeLabelText.textContent = mode === "focus" ? "Focus" : "Break";
  elements.modeLabel.querySelector("[data-icon]").dataset.icon = mode === "focus" ? "brain" : "coffee";
  elements.modeLabel.querySelector("[data-icon]").innerHTML = icon(mode === "focus" ? "brain" : "coffee");

  elements.focusMode.classList.toggle("active", mode === "focus");
  elements.breakMode.classList.toggle("active", mode === "break");
  elements.startPauseText.textContent = isRunning ? "Pause" : "Start";
  elements.startPause.querySelector("[data-icon]").dataset.icon = isRunning ? "pause" : "play";
  elements.startPause.querySelector("[data-icon]").innerHTML = icon(isRunning ? "pause" : "play");

  renderPresets();
}

elements.focusMode.addEventListener("click", () => setMode("focus"));
elements.breakMode.addEventListener("click", () => setMode("break"));
elements.startPause.addEventListener("click", () => setRunning(!isRunning));
elements.reset.addEventListener("click", () => {
  remaining = getModeDurationSeconds(mode, getSelectedPreset());
  setRunning(false);
});
elements.skip.addEventListener("click", () => setMode(mode === "focus" ? "break" : "focus"));
elements.presets.addEventListener("click", (event) => {
  const button = event.target.closest("[data-preset-id]");
  if (!button) return;
  choosePreset(button.dataset.presetId);
});

runTimerSelfTests();
hydrateInlineIcons();
render();
