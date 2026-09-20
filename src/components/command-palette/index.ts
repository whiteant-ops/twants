export interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  icon?: string;
  action: () => void;
}

export class CommandPalette {
  private overlay: HTMLElement | null = null;

  constructor(private items: CommandItem[]) {}

  open(): void {
    this.overlay = document.createElement("div");
    this.overlay.className = "twants-command-palette";
    this.overlay.setAttribute("role", "dialog");
    this.overlay.setAttribute("aria-modal", "true");

    this.overlay.innerHTML = `
      <div class="twants-command-palette-panel">
        <input class="twants-command-palette-input" placeholder="Type a command..." aria-label="Search commands" />
        <div class="twants-command-palette-list" role="listbox"></div>
      </div>
    `;
    document.body.appendChild(this.overlay);

    const input = this.overlay.querySelector<HTMLInputElement>("input")!;
    const list = this.overlay.querySelector<HTMLElement>(".twants-command-palette-list")!;
    const render = (q: string) => {
      const filtered = this.items.filter((i) =>
        i.label.toLowerCase().includes(q.toLowerCase())
      );
      list.innerHTML = filtered.map((i) => `
        <button class="twants-menu-item" data-id="${i.id}" role="option">
          ${i.icon ?? ""}
          <span>${i.label}</span>
          ${i.hint ? `<span class="twants-menu-item-shortcut">${i.hint}</span>` : ""}
        </button>
      `).join("");
      list.querySelectorAll<HTMLElement>("[data-id]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const item = this.items.find((x) => x.id === btn.dataset.id);
          this.close();
          item?.action();
        });
      });
    };
    render("");
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });
    input.focus();
  }

  close(): void {
    this.overlay?.remove();
    this.overlay = null;
  }
}