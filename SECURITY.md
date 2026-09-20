# Security Policy

## Supported versions

| Version | Supported |
| --- | --- |
| 0.x | ✅ |

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security problems. Instead,
email **security@twants.dev** with:

- A short description of the issue
- Steps to reproduce
- Affected versions
- Any suggested fix (optional)

You will receive a response within 72 hours. If the issue is confirmed, a
patch will be released as soon as reasonably possible and you will be
credited in the release notes unless you request otherwise.

## Scope

TWANTS ships HTML, CSS, and minimal JavaScript only. It does not perform
network requests, evaluate user HTML in the interactive modules by default,
or require any privileged API. Reports concerning XSS surface in the
interactive modules (e.g. `Modal`, `Toast`, `CommandPalette`) are welcome.