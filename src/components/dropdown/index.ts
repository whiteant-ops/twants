export class Dropdown {
  private open = false;
  private onDocClick = (e: MouseEvent) => {
    if (!this.root.contains(e.target as Node)) this.hide();
  };
  private onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.hide();
  };

  constructor(private root: HTMLElement, private trigger: HTMLElement, private menu: HTMLElement) {
    trigger.addEventListener("click", () => this.toggle());
    trigger.setAttribute("aria-haspopup", "menu");
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    menu.setAttribute("role", "menu");
  }

  toggle(): void { this.open ? this.hide() : this.show(); }

  show(): void {
    this.open = true;
    this.menu.hidden = false;
    this.trigger.setAttribute("aria-expanded", "true");
    document.addEventListener("click", this.onDocClick);
    document.addEventListener("keydown", this.onKey);
  }

  hide(): void {
    this.open = false;
    this.menu.hidden = true;
    this.trigger.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", this.onDocClick);
    document.removeEventListener("keydown", this.onKey);
  }
}