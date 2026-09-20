---
title: Tree
---

# Tree

Trees display hierarchical data with expandable/collapsible nodes.

## Basic

<Preview
  code={`<div class="twants-tree">
  <ul>
    <li>
      <div class="twants-tree-item" aria-expanded="true">
        <span class="twants-tree-chevron">▸</span>
        <span>📁 src</span>
      </div>
      <ul>
        <li>
          <div class="twants-tree-item" aria-expanded="false">
            <span class="twants-tree-chevron">▸</span>
            <span>📁 components</span>
          </div>
        </li>
        <li>
          <div class="twants-tree-item">
            <span class="twants-tree-chevron" style="visibility:hidden">▸</span>
            <span>📄 index.ts</span>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <div class="twants-tree-item">
        <span class="twants-tree-chevron" style="visibility:hidden">▸</span>
        <span>📄 package.json</span>
      </div>
    </li>
  </ul>
</div>`}
>
  <div className="twants-tree">
    <ul>
      <li>
        <div className="twants-tree-item" aria-expanded="true">
          <span className="twants-tree-chevron">▸</span>
          <span>📁 src</span>
        </div>
        <ul>
          <li>
            <div className="twants-tree-item" aria-expanded="false">
              <span className="twants-tree-chevron">▸</span>
              <span>📁 components</span>
            </div>
          </li>
          <li>
            <div className="twants-tree-item">
              <span className="twants-tree-chevron" style={{visibility:'hidden'}}>▸</span>
              <span>📄 index.ts</span>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <div className="twants-tree-item">
          <span className="twants-tree-chevron" style={{visibility:'hidden'}}>▸</span>
          <span>📄 package.json</span>
        </div>
      </li>
    </ul>
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
  ]}
/>

## Accessibility

- Use `role="tree"` on the container, `role="treeitem"` on each item.
- `aria-expanded` indicates if a node is expanded or collapsed.
- Arrow keys navigate between nodes, Enter activates the selected node.
- Use `aria-level` to indicate depth.
