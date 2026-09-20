import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home(): React.ReactElement {
  return (
    <Layout title="A Modern Tailwind UI System" description="TWANTS - A Modern Tailwind UI System for Everywhere.">
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Tailwind CSS v4 / Fluent-inspired</p>
          <h1>TWANTS</h1>
          <p className={styles.lede}>
            Framework-agnostic UI components powered by semantic CSS tokens and small, optional JavaScript modules.
          </p>
          <div className={styles.actions}>
            <Link className="twants-button twants-button-primary twants-button-lg" to="/docs/getting-started/installation">
              Get started
            </Link>
            <Link className="twants-button twants-button-lg" to="/docs/components/button">
              Browse components
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
