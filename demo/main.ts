import "../src/styles/index.css";
import { modal, toast, Tabs, Dropdown, CommandPalette, ThemeSwitcher, icons } from "../src/index.js";

ThemeSwitcher.init();

// Icons in placeholder slots
for (const [id, name] of [
  ["search-icon", "search"],
  ["i-info", "info"],
  ["i-ok", "checkCircle"],
  ["i-err", "xCircle"],
] as const) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = icons[name];
}

// Theme button
const themeBtn = document.getElementById("theme-btn")!;
themeBtn.innerHTML = icons.moon;
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  ThemeSwitcher.set(next);
  themeBtn.innerHTML = next === "dark" ? icons.sun : icons.moon;
});

// Tabs
const tabsEl = document.getElementById("tabs")!;
// Wrap to a common root so Tabs can find tabpanels
const tabsRoot = tabsEl.parentElement!;
new Tabs(tabsRoot);

// Dropdown
const menu = document.getElementById("menu") as HTMLElement;
const trigger = document.getElementById("menu-trigger") as HTMLElement;
new Dropdown(trigger.parentElement!, trigger, menu);

// Modal
document.getElementById("open-modal")!.addEventListener("click", () => {
  modal.open({
    title: "Delete project",
    content: `<p style="color:var(--twants-foreground-secondary);font-size:var(--twants-text-sm)">
      This action cannot be undone. All files, deploy logs, and settings will be permanently removed.
    </p>`,
    footer: `
      <button class="twants-button" data-close>Cancel</button>
      <button class="twants-button twants-button-danger" data-close>Delete</button>
    `,
  });
  // hook footer buttons
  setTimeout(() => {
    document.querySelectorAll(".twants-modal-footer [data-close]").forEach((b) =>
      b.addEventListener("click", () => modal.close())
    );
  });
});

// Drawer
document.getElementById("open-drawer")!.addEventListener("click", () => {
  const host = document.getElementById("drawer-host")!;
  host.innerHTML = `
    <div class="twants-modal-overlay" id="drawer-overlay" style="align-items:stretch;padding:0;justify-content:flex-end">
      <div class="twants-drawer">
        <div class="twants-modal-header">
          <div class="twants-modal-title">Filters</div>
          <button class="twants-icon-button" id="drawer-close" style="margin-left:auto"></button>
        </div>
        <div class="twants-modal-body twants-stack">
          <label class="twants-field"><span class="twants-field-label">Name</span><input class="twants-input" /></label>
          <label class="twants-field"><span class="twants-field-label">Status</span>
            <select class="twants-select"><option>All</option><option>Active</option><option>Archived</option></select>
          </label>
        </div>
      </div>
    </div>
  `;
  const close = () => (host.innerHTML = "");
  document.getElementById("drawer-close")!.addEventListener("click", close);
  document.getElementById("drawer-overlay")!.addEventListener("click", (e) => {
    if (e.target === document.getElementById("drawer-overlay")) close();
  });
});

// Toast
document.getElementById("show-toast")!.addEventListener("click", () =>
  toast.show({ title: "Deployed", description: "twants@0.1.0 shipped to production.", variant: "success" })
);

// Command palette
const palette = new CommandPalette([
  { id: "new",    label: "New project",  hint: "⌘N", action: () => toast.show({ title: "New project" }) },
  { id: "open",   label: "Open project", hint: "⌘O", action: () => toast.show({ title: "Open project" }) },
  { id: "theme",  label: "Toggle theme", hint: "⌘J", action: () => ThemeSwitcher.set(document.documentElement.dataset.theme === "dark" ? "light" : "dark") },
  { id: "docs",   label: "Open documentation",        action: () => window.open("/docs/", "_blank") },
]);
document.getElementById("open-cmd")!.addEventListener("click", () => palette.open());
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    palette.open();
  }
});

// Reveal-style hover on cards
document.querySelectorAll<HTMLElement>(".twants-card, .twants-stat-card").forEach((el) => {
  el.classList.add("twants-reveal");
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--twants-mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--twants-my", `${e.clientY - r.top}px`);
  });
});