import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import ComponentPreview from "@site/src/components/ComponentPreview";
import PropsTable from "@site/src/components/PropsTable";

const Callout = ({ type = "info", title, children }: any) => {
  const map = { info: "twants-alert-info", success: "twants-alert-success", warning: "twants-alert-warning", danger: "twants-alert-danger" };
  return (
    <div className={`twants-alert ${map[type as keyof typeof map] ?? map.info}`} style={{ margin: "1rem 0" }}>
      <div>
        {title && <div className="twants-alert-title">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

const Button = ({ variant = "primary", children, ...rest }: any) => (
  <button className={`twants-button twants-button-${variant}`} {...rest}>
    {children}
  </button>
);

const Card = ({ title, children, footer }: any) => (
  <div className="twants-card" style={{ margin: "1.25rem 0" }}>
    {title && <div className="twants-card-header"><div className="twants-card-title">{title}</div></div>}
    <div className="twants-card-body">{children}</div>
    {footer && <div className="twants-card-footer">{footer}</div>}
  </div>
);

export default {
  ...MDXComponents,
  Callout,
  Button,
  Card,
  Preview: ComponentPreview,
  PropsTable,
};