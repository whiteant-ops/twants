/**
 * TWANTS icon set.
 * Small, dependency-free SVG strings. Fluent-inspired strokes.
 * Use like: el.innerHTML = icons.check;
 */
const svg = (paths: string, viewBox = "0 0 24 24"): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  check:     svg(`<path d="M20 6L9 17l-5-5"/>`),
  close:     svg(`<path d="M18 6L6 18M6 6l12 12"/>`),
  chevronDown:  svg(`<path d="M6 9l6 6 6-6"/>`),
  chevronRight: svg(`<path d="M9 6l6 6-6 6"/>`),
  chevronLeft:  svg(`<path d="M15 6l-6 6 6 6"/>`),
  chevronUp:    svg(`<path d="M6 15l6-6 6 6"/>`),
  search:    svg(`<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>`),
  settings:  svg(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1z"/>`),
  user:      svg(`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
  bell:      svg(`<path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`),
  home:      svg(`<path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5"/>`),
  menu:      svg(`<path d="M4 6h16M4 12h16M4 18h16"/>`),
  plus:      svg(`<path d="M12 5v14M5 12h14"/>`),
  minus:     svg(`<path d="M5 12h14"/>`),
  trash:     svg(`<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>`),
  edit:      svg(`<path d="M12 20h9"/><path d="M16.5 3.5l4 4L7 21H3v-4L16.5 3.5z"/>`),
  copy:      svg(`<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>`),
  download:  svg(`<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M5 21h14"/>`),
  upload:    svg(`<path d="M12 21V9"/><path d="M7 14l5-5 5 5"/><path d="M5 3h14"/>`),
  eye:       svg(`<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>`),
  eyeOff:    svg(`<path d="M17.9 17.9A10.9 10.9 0 0 1 12 19c-7 0-11-7-11-7a19 19 0 0 1 5.1-5.9"/><path d="M9.9 5.2A10.9 10.9 0 0 1 12 5c7 0 11 7 11 7a19 19 0 0 1-3.1 4"/><path d="M1 1l22 22"/>`),
  info:      svg(`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>`),
  alert:     svg(`<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>`),
  checkCircle: svg(`<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>`),
  xCircle:   svg(`<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>`),
  sun:       svg(`<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`),
  moon:      svg(`<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>`),
  monitor:   svg(`<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`),
  cmd:       svg(`<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 0 0 0-6z"/>`),
  folder:    svg(`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>`),
  file:      svg(`<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5"/>`),
} as const;

export type IconName = keyof typeof icons;
export const getIcon = (name: IconName): string => icons[name];