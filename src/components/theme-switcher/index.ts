export type ThemeMode = "light" | "dark" | "system";

export class ThemeSwitcher {
  static get current(): ThemeMode {
    return (localStorage.getItem("twants-theme") as ThemeMode) || "system";
  }

  static set(mode: ThemeMode): void {
    localStorage.setItem("twants-theme", mode);
    ThemeSwitcher.apply(mode);
  }

  static apply(mode: ThemeMode = ThemeSwitcher.current): void {
    const root = document.documentElement;
    if (mode === "system") {
      root.removeAttribute("data-theme");
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = prefersDark ? "dark" : "light";
    } else {
      root.dataset.theme = mode;
    }
  }

  static init(): void {
    ThemeSwitcher.apply();
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (ThemeSwitcher.current === "system") ThemeSwitcher.apply();
    });
  }
}