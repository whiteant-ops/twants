import React from "react";
import styles from "./styles.module.css";

type Row = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export default function PropsTable({ rows }: { rows: Row[] }): React.ReactElement {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td><code>{row.name}</code></td>
              <td><code>{row.type}</code></td>
              <td>{row.default ?? "-"}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}