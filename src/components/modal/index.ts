import { cn } from "../../utilities/cn.js";

export interface ModalOptions {
  title?: string;
  content: string | HTMLElement;
  footer?: string | HTMLElement;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlay?: boolean;
  onClose?: () => void;
}

const sizeMap: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export class Modal {
  private root: HTMLElement | null = null;
  private prevFocus: Element | null = null;

  open(opts: ModalOptions): void {
    this.prevFocus = document.activeElement;
    const overlay = document.createElement("div");
    overlay.className = "twants-modal-overlay";
    overlay.setAttribute("role", "presentation");

    const modal = document.createElement("div");
    modal.className = cn("twants-modal", sizeMap[opts.size ?? "md"]);
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const header = document.createElement("div");
    header.className = "twants-modal-header";
    header.innerHTML = `
      <div class="twants-modal-title">${opts.title ?? ""}</div>
      <button class="twants-icon-button" data-close aria-label="Close" style="margin-left:auto"></button>
    `;

    const body = document.createElement("div");
    body.className = "twants-modal-body";
    if (typeof opts.content === "string") body.innerHTML = opts.content;
    else body.appendChild(opts.content);

    modal.append(header, body);

    if (opts.footer) {
      const footer = document.createElement("div");
      footer.className = "twants-modal-footer";
      if (typeof opts.footer === "string") footer.innerHTML = opts.footer;
      else footer.appendChild(opts.footer);
      modal.appendChild(footer);
    }

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    this.root = overlay;

    const close = () => this.close(opts.onClose);
    header.querySelector("[data-close]")?.addEventListener("click", close);
    if (opts.closeOnOverlay !== false) {
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    }
    document.addEventListener("keydown", this.onKey);
    queueMicrotask(() => {
      const focusable = modal.querySelector<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      focusable?.focus();
    });
  }

  private onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") this.close();
  };

  close(cb?: () => void): void {
    document.removeEventListener("keydown", this.onKey);
    this.root?.remove();
    this.root = null;
    (this.prevFocus as HTMLElement | null)?.focus?.();
    cb?.();
  }
}

export const modal = new Modal();