import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import ThemeToggle from "@site/src/components/ThemeToggle";
import clsx from "clsx";
import styles from "./styles.module.css";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default function Navbar(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const logo = useBaseUrl("img/logo.svg");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const links = [
    { label: "Docs", to: "/docs/intro" },
    { label: "Components", to: "/docs/components/button" },
    { label: "Integrations", to: "/docs/integrations/vanilla" },
    { label: "Changelog", to: "/docs/changelog" },
  ];

  return (
    <header className={`navbar ${styles.navbar}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="" width={22} height={22} />
          <span>{siteConfig.title}</span>
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={clsx(styles.link, location.pathname.startsWith(l.to) && styles.linkActive)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="https://github.com/twants/twants"
            className={styles.iconBtn}
            aria-label="GitHub repository"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <ThemeToggle />
          <button
            className={clsx(styles.iconBtn, styles.menuBtn)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileNav}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={styles.mobileLink}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}