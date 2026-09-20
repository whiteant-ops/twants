export interface TabsOptions {
  activeIndex?: number;
  onChange?: (index: number, tab: HTMLElement) => void;
}

export class Tabs {
  constructor(private root: HTMLElement, private opts: TabsOptions = {}) {
    this.init();
  }

  private init(): void {
    const tabs = this.root.querySelectorAll<HTMLElement>("[role='tab']");
    const panels = this.root.querySelectorAll<HTMLElement>("[role='tabpanel']");

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => this.select(i));
      tab.addEventListener("keydown", (e) => this.onKey(e, i, tabs.length));
    });

    this.select(this.opts.activeIndex ?? 0, false);
    void panels;
  }

  private onKey(e: KeyboardEvent, i: number, total: number): void {
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (i + 1) % total;
    if (e.key === "ArrowLeft")  next = (i - 1 + total) % total;
    if (e.key === "Home")       next = 0;
    if (e.key === "End")        next = total - 1;
    if (next !== null) {
      e.preventDefault();
      this.select(next);
      this.root.querySelectorAll<HTMLElement>("[role='tab']")[next]?.focus();
    }
  }

  select(index: number, emit = true): void {
    const tabs = this.root.querySelectorAll<HTMLElement>("[role='tab']");
    const panels = this.root.querySelectorAll<HTMLElement>("[role='tabpanel']");
    tabs.forEach((t, i) => t.setAttribute("aria-selected", String(i === index)));
    panels.forEach((p, i) => p.toggleAttribute("hidden", i !== index));
    if (emit) this.opts.onChange?.(index, tabs[index]);
  }
}