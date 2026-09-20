---
title: Radio Group
---

# Radio Group

Radio buttons let users select one option from a set.

## Basic

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem">
  <label class="twants-radio-label"><input type="radio" name="plan" class="twants-radio" value="free" checked /> Free</label>
  <label class="twants-radio-label"><input type="radio" name="plan" class="twants-radio" value="pro" /> Pro</label>
  <label class="twants-radio-label"><input type="radio" name="plan" class="twants-radio" value="enterprise" /> Enterprise</label>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <label className="twants-radio-label"><input type="radio" name="plan" className="twants-radio" value="free" defaultChecked /> Free</label>
    <label className="twants-radio-label"><input type="radio" name="plan" className="twants-radio" value="pro" /> Pro</label>
    <label className="twants-radio-label"><input type="radio" name="plan" className="twants-radio" value="enterprise" /> Enterprise</label>
  </div>
</Preview>

## Disabled

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.5rem">
  <label class="twants-radio-label" style="opacity:0.5"><input type="radio" name="dis" class="twants-radio" disabled /> Disabled</label>
  <label class="twants-radio-label"><input type="radio" name="dis" class="twants-radio" /> Option B</label>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
    <label className="twants-radio-label" style={{opacity:0.5}}><input type="radio" name="dis" className="twants-radio" disabled /> Disabled</label>
    <label className="twants-radio-label"><input type="radio" name="dis" className="twants-radio" /> Option B</label>
  </div>
</Preview>

## With Descriptions

<Preview
  code={`<div style="display:flex;flex-direction:column;gap:0.75rem">
  <label class="twants-radio-label" style="align-items:flex-start;gap:0.625rem">
    <input type="radio" name="desc" class="twants-radio" style="margin-top:0.15rem" checked />
    <div>
      <div style="font-size:var(--twants-text-base);color:var(--twants-foreground)">Starter</div>
      <div style="font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">For personal projects</div>
    </div>
  </label>
  <label class="twants-radio-label" style="align-items:flex-start;gap:0.625rem">
    <input type="radio" name="desc" class="twants-radio" style="margin-top:0.15rem" />
    <div>
      <div style="font-size:var(--twants-text-base);color:var(--twants-foreground)">Team</div>
      <div style="font-size:var(--twants-text-xs);color:var(--twants-foreground-muted)">For small teams up to 10</div>
    </div>
  </label>
</div>`}
>
  <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
    {[
      ['Starter', 'For personal projects', true],
      ['Team', 'For small teams up to 10', false],
    ].map(([title, desc, checked]) => (
      <label key={title} className="twants-radio-label" style={{alignItems:'flex-start',gap:'0.625rem'}}>
        <input type="radio" name="desc" className="twants-radio" style={{marginTop:'0.15rem'}} defaultChecked={checked} />
        <div>
          <div style={{fontSize:'var(--twants-text-base)',color:'var(--twants-foreground)'}}>{title}</div>
          <div style={{fontSize:'var(--twants-text-xs)',color:'var(--twants-foreground-muted)'}}>{desc}</div>
        </div>
      </label>
    ))}
  </div>
</Preview>

## Props

<PropsTable
  rows={[
    { name: "className", type: "string", default: "—", description: "Use twants-radio on the input element." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the radio button." },
  ]}
/>

## Accessibility

- Group radios with the same `name` attribute.
- Use `<fieldset>` + `<legend>` for the group label.
- Arrow keys navigate between radios in the same group automatically.
- Each radio needs a visible label.
