import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  code?: string;
  language?: string;
}

export default function ComponentPreview({ children, code }: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        <button
          className={`${styles.tab} ${tab === "preview" ? styles.tabActive : ""}`}
          onClick={() => setTab("preview")}
        >
          Preview
        </button>
        {code && (
          <button
            className={`${styles.tab} ${tab === "code" ? styles.tabActive : ""}`}
            onClick={() => setTab("code")}
          >
            Code
          </button>
        )}
      </div>

      <div className={styles.body}>
        {tab === "preview" ? (
          <div className={styles.preview}>{children}</div>
        ) : (
          <pre className={styles.code}><code>{code}</code></pre>
        )}
      </div>
    </div>
  );
}