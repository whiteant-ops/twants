export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "danger";
  duration?: number;
}

export class ToastManager {
  private viewport!: HTMLElement;

  constructor() {
    if (typeof document === "undefined") return;
    let v = document.querySelector<HTMLElement>(".twants-toast-viewport");
    if (!v) {
      v = document.createElement("div");
      v.className = "twants-toast-viewport";
      v.setAttribute("role", "region");
      v.setAttribute("aria-live", "polite");
      document.body.appendChild(v);
    }
    this.viewport = v;
  }

  show(opts: ToastOptions): HTMLElement {
    const el = document.createElement("div");
    el.className = "twants-toast";
    if (opts.variant) el.classList.add(`twants-toast-${opts.variant}`);
    el.innerHTML = `
      <div style="flex:1">
        ${opts.title ? `<div class="twants-toast-title">${opts.title}</div>` : ""}
        ${opts.description ? `<div class="twants-toast-description">${opts.description}</div>` : ""}
      </div>
      <button class="twants-icon-button twants-icon-button-sm" data-close aria-label="Dismiss"></button>
    `;
    const dismiss = () => el.remove();
    el.querySelector("[data-close]")?.addEventListener("click", dismiss);
    this.viewport.appendChild(el);
    const dur = opts.duration ?? 4000;
    if (dur > 0) setTimeout(dismiss, dur);
    return el;
  }
}

export const toast = new ToastManager();