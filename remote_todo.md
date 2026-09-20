# TWANTS Remote Setup Runbook

Dokumen ini berisi pekerjaan yang harus dilakukan di GitHub setelah workspace lokal selesai dirapikan.

Repository target:

- Repository: https://github.com/whiteant-ops/twants
- GitHub Pages: https://whiteant-ops.github.io/twants/
- Wiki: https://github.com/whiteant-ops/twants/wiki
- Projects: https://github.com/whiteant-ops/twants/projects
- Discussions: https://github.com/whiteant-ops/twants/discussions
- Issues: https://github.com/whiteant-ops/twants/issues
- Releases: https://github.com/whiteant-ops/twants/releases
- npm: https://www.npmjs.com/package/twants

Dokumen ini melengkapi [doc_update.md](doc_update.md). Fokusnya adalah konfigurasi remote GitHub, bukan perubahan source code lokal.

---

## 1. Prasyarat Lokal

Pastikan perintah berikut berhasil dari folder project:

```bash
npm run typecheck
npm run build
npm run typecheck --prefix docs
npm run build --prefix docs
```

Pastikan juga file penting berikut sudah ada:

- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- `.github/workflows/publish.yml`
- `.github/workflows/release-drafter.yml`
- `.github/workflows/labels.yml`
- `.github/CODEOWNERS`
- `.github/dependabot.yml`
- `.github/ISSUE_TEMPLATE/`
- `docs/docusaurus.config.ts`
- `docs/package-lock.json`

Catatan: workflow root saat ini menggunakan `npm install` karena workspace belum memiliki `package-lock.json` root. Jangan mengubahnya menjadi `npm ci` sebelum root lockfile tersedia dan sudah diuji.

---

## 2. Buat Repository GitHub

Buka GitHub dan buat repository baru dengan nilai berikut:

- Owner: `whiteant-ops`
- Repository name: `twants`
- Visibility: Public
- Jangan centang `Add a README file`
- Jangan menambahkan `.gitignore` atau license baru dari GitHub

Repository harus kosong supaya commit lokal pertama tidak menimbulkan konflik merge.

---

## 3. Push Commit Pertama

Jalankan dari folder project lokal:

```bash
git init
git branch -M main
git add -A
git commit -m "chore: initial commit"
git remote add origin https://github.com/whiteant-ops/twants.git
git push -u origin main
```

Verifikasi remote:

```bash
git remote -v
git branch --show-current
git status
```

Hasil yang diharapkan:

- Remote `origin` mengarah ke `https://github.com/whiteant-ops/twants.git`.
- Branch aktif adalah `main`.
- Working tree bersih.
- Commit pertama terlihat di halaman repository GitHub.

Jika menggunakan SSH, URL alternatifnya adalah:

```text
git@github.com:whiteant-ops/twants.git
```

---

## 4. Aktifkan Repository Features

Buka `Settings -> General -> Features`, lalu aktifkan:

- Issues
- Discussions
- Projects
- Wiki

Di bagian Pull Requests, aktifkan:

- Allow squash merging
- Automatically delete head branches

Pengaturan yang tidak diperlukan untuk project ini dapat dibiarkan nonaktif.

---

## 5. Konfigurasi GitHub Pages

Buka `Settings -> Pages`:

1. Pada `Build and deployment`, pilih `Source: GitHub Actions`.
2. Pastikan HTTPS aktif.
3. Jangan pilih deployment dari branch manual.

Setelah workflow `Deploy Docs to GitHub Pages` selesai, verifikasi:

```text
https://whiteant-ops.github.io/twants/
```

Pemeriksaan minimum:

- Homepage tidak blank.
- Logo tampil.
- Link internal tidak mengarah ke root domain yang salah.
- CSS TWANTS tampil.
- Halaman `/twants/docs/intro` dapat dibuka.
- Navbar, sidebar, theme toggle, dan halaman Button berfungsi.

Penyebab blank yang paling umum adalah `baseUrl` salah. Untuk project repository ini nilainya wajib:

```ts
baseUrl: "/twants/"
```

---

## 6. Konfigurasi Actions Permissions

Buka `Settings -> Actions -> General`:

- Workflow permissions: `Read and write permissions` bila Release Drafter membutuhkan write access.
- Aktifkan izin workflow yang diperlukan untuk membuat dan memperbarui release draft.
- Pastikan Actions diizinkan berjalan pada branch `main`.

Workflow yang harus muncul pada tab Actions:

- `CI`
- `Deploy Docs to GitHub Pages`
- `Publish to npm`
- `Release Drafter`
- `Sync Labels`

---

## 7. Tambahkan NPM Token

Token npm tidak boleh ditulis di repository.

1. Login ke npmjs.com.
2. Buat access token Automation atau token yang sesuai untuk publishing.
3. Buka GitHub: `Settings -> Secrets and variables -> Actions`.
4. Pilih `New repository secret`.
5. Name: `NPM_TOKEN`.
6. Paste token sebagai value.
7. Simpan secret.

Workflow publish menggunakan secret tersebut saat release dipublikasikan. Jangan mencetak token ke log dan jangan menambahkannya ke file lokal yang akan di-commit.

---

## 8. Verifikasi CI

Buat perubahan kecil atau gunakan commit pertama untuk memicu workflow CI.

Pada tab Actions, pastikan job berikut sukses:

- `CI / check`
  - install dependency root
  - `npm run typecheck`
  - `npm run build`
- `CI / docs`
  - install dependency docs
  - `npm run typecheck`
  - `npm run build`

Jika workflow root gagal karena `npm ci`, pastikan workflow yang ada di branch memakai `npm install` sampai root `package-lock.json` tersedia.

Jika workflow docs gagal menemukan CSS, periksa bahwa source berikut tersedia:

```text
src/styles/tokens.css
src/styles/theme.css
src/styles/components.css
```

---

## 9. Branch Protection untuk main

Buka `Settings -> Branches -> Add branch protection rule`.

Branch pattern:

```text
main
```

Aktifkan:

- Require a pull request before merging.
- Require at least 1 approval.
- Dismiss stale approvals when new commits are pushed, bila sesuai kebijakan tim.
- Require status checks before merging.
- Require branches to be up to date before merging, bila sesuai kebijakan tim.
- Require conversation resolution before merging.
- Do not allow force pushes.
- Do not allow deletions.

Status checks minimum:

- `CI / check`
- `CI / docs`

Jangan mengaktifkan status check yang namanya belum pernah muncul, karena GitHub tidak dapat mencocokkan check tersebut.

---

## 10. Labels

Workflow `Sync Labels` membaca `.github/labels.yml`.

Setelah push pertama:

1. Buka tab Actions.
2. Jalankan `Sync Labels` melalui `Run workflow` bila belum terpicu.
3. Buka `Issues -> Labels`.
4. Pastikan label berikut tersedia:
   - `feat`
   - `fix`
   - `breaking`
   - `component`
   - `docs`
   - `chore`
   - `deps`
   - `ci`
   - `a11y`

---

## 11. Issue Templates dan Pull Request Template

Buka tab Issues dan pilih `New issue`.

Pastikan template berikut tersedia:

- Bug report
- Feature request

Pastikan link bantuan pada issue configuration mengarah ke:

- Discussions: https://github.com/whiteant-ops/twants/discussions
- Documentation: https://whiteant-ops.github.io/twants/
- Security advisories: https://github.com/whiteant-ops/twants/security/advisories/new

Buat draft pull request untuk memastikan [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) tampil otomatis.

---

## 12. Wiki

Buka tab `Wiki`, lalu pilih `Create the first page`.

Buat halaman berikut secara manual:

1. `Home`
2. `Getting-Help`
3. `FAQ`
4. `Troubleshooting`
5. `Architecture-Overview`
6. `Design-Principles`
7. `Token-System`
8. `CSS-Layer`
9. `JavaScript-Layer`
10. `ADR`
11. `ADR-0001`
12. `ADR-0002`
13. `ADR-0003`
14. `ADR-0004`
15. `Recipe-Custom-Accent-Color`
16. `Recipe-Mica-Background`
17. `Recipe-Desktop-Title-Bar`
18. `Recipe-Django-Admin`
19. `Integration-Laravel`
20. `Integration-Django`
21. `Integration-Tauri`
22. `Integration-Wails`
23. `Integration-Vanilla`
24. `Roadmap`
25. `Showcase`
26. `Contributing-Deep-Dive`

Isi `Home` dengan link utama:

```markdown
# Welcome to the TWANTS Wiki

> A Modern Tailwind UI System for Everywhere.

Long-form architecture notes, ADRs, recipes, troubleshooting, and project planning live here.

## Quick links

- Docs: https://whiteant-ops.github.io/twants/
- Components: https://whiteant-ops.github.io/twants/docs/components/button
- Repository: https://github.com/whiteant-ops/twants
- Roadmap: https://github.com/whiteant-ops/twants/projects
- Discussions: https://github.com/whiteant-ops/twants/discussions
- Issues: https://github.com/whiteant-ops/twants/issues
- npm: https://www.npmjs.com/package/twants
```

Isi `_Sidebar.md` dengan link navigasi Wiki. Gunakan format link Wiki GitHub, misalnya:

```markdown
**TWANTS**

[Home](Home) | [Docs](https://whiteant-ops.github.io/twants/)

**Start**
- [Getting Help](Getting-Help)
- [FAQ](FAQ)
- [Troubleshooting](Troubleshooting)

**Architecture**
- [Overview](Architecture-Overview)
- [Design Principles](Design-Principles)
- [Token System](Token-System)
- [CSS Layer](CSS-Layer)
- [JavaScript Layer](JavaScript-Layer)

**Project**
- [Roadmap](Roadmap)
- [Showcase](Showcase)
- [Contributing](Contributing-Deep-Dive)
```

Isi `_Footer.md`:

```markdown
MIT (c) whiteant-ops | [Docs](https://whiteant-ops.github.io/twants/) | [Issues](https://github.com/whiteant-ops/twants/issues) | [Discussions](https://github.com/whiteant-ops/twants/discussions)
```

Wiki juga dapat dikelola melalui repository terpisah:

```bash
git clone https://github.com/whiteant-ops/twants.wiki.git
cd twants.wiki
# edit file Markdown
git add -A
git commit -m "docs(wiki): add architecture notes"
git push
```

---

## 13. GitHub Projects Roadmap

Buka:

```text
https://github.com/whiteant-ops/twants/projects
```

Buat project baru:

- Template: Table
- Name: `TWANTS Roadmap`
- Visibility: sesuai kebijakan repository

Tambahkan fields berikut:

| Field | Type | Values |
|---|---|---|
| Status | Single select | Backlog, Design, Ready, In progress, Review, Done |
| Type | Single select | Component, Bug, Docs, Theme, Infra |
| Area | Single select | Foundations, Buttons, Forms, Navigation, Data, Feedback, Layout, Media, Desktop, Integration |
| Priority | Single select | P0, P1, P2, P3 |
| Size | Single select | XS, S, M, L, XL |
| Iteration | Iteration | 2-week sprints |

Buat views berikut:

1. `Roadmap`: Timeline, group by Area, filter Status is not Done.
2. `Kanban`: Board, columns by Status.
3. `Components`: Table, filter Type is Component, group by Area.
4. `Bugs`: Board, filter label is `fix`.
5. `My work`: Board, filter assignee is `@me`.
6. `Docs backlog`: Table, filter label is `docs`.

Aktifkan workflows project:

- Auto-add issue dengan label `component`.
- Item closed -> Status `Done`.
- Pull request merged -> Status `Done`.
- Item reopened -> Status `In progress`.

---

## 14. Milestones

Buka:

```text
https://github.com/whiteant-ops/twants/milestones
```

Buat milestone:

| Milestone | Target |
|---|---|
| v0.1.0 - Foundations | 2025-03-01 |
| v0.2.0 - Data and Layout | 2025-05-01 |
| v0.3.0 - Desktop UI | 2025-07-01 |
| v1.0.0 - Stable | 2025-10-01 |

Tanggal tersebut berasal dari dokumen rencana awal. Sesuaikan dengan tanggal aktual sebelum membuat milestone.

---

## 15. Discussions

Buka `Settings -> General -> Features`, aktifkan Discussions, lalu pilih kategori:

- Announcements
- Q&A
- Ideas
- Show and tell
- General

Tambahkan discussion post pertama yang mengarahkan pengguna ke:

- Dokumentasi
- Wiki
- Issue tracker
- Roadmap

---

## 16. Repository About

Pada panel About repository, isi:

Description:

```text
A Modern Tailwind UI System for Everywhere.
```

Website:

```text
https://whiteant-ops.github.io/twants/
```

Topics:

```text
tailwindcss tailwind-v4 winui fluent-design design-system ui-kit vite laravel django tauri wails components whiteant-ops
```

Upload social preview `og.png` berukuran 1280 x 640 setelah asset tersebut tersedia di `docs/static/img/`.

---

## 17. Security Settings

Buka `Settings -> Code security and analysis`, lalu aktifkan bila tersedia:

- Dependabot alerts
- Dependabot security updates
- Private vulnerability reporting
- CodeQL analysis bila workflow CodeQL sudah ditambahkan

Jangan mengaktifkan checklist sebagai seolah-olah selesai sebelum fitur benar-benar aktif di GitHub.

---

## 18. Release Pertama

Setelah CI stabil:

1. Buka `Releases -> Draft a new release`.
2. Pilih atau buat tag `v0.1.0`.
3. Gunakan release notes dari Release Drafter.
4. Pastikan perubahan sudah masuk branch `main`.
5. Publish release.
6. Pastikan workflow `Publish to npm` berjalan.
7. Verifikasi package:

```bash
npm view twants version
```

Jangan publish ke npm sebelum nama package dan ownership `twants` sudah dipastikan benar.

---

## 19. Alur Update Berikutnya

```bash
# edit source atau docs
git add -A
git commit -m "feat(button): add ghost variant"
git push
```

Setelah push ke `main`:

1. CI menjalankan typecheck dan build.
2. Deploy Docs membangun dan menerbitkan GitHub Pages.
3. Release Drafter memperbarui draft release.
4. Project automation memperbarui status issue atau pull request.

Untuk release baru:

1. Pastikan CI hijau.
2. Edit draft release.
3. Buat tag versi, misalnya `v0.2.0`.
4. Publish release.
5. Pastikan npm publish sukses.

---

## 20. Checklist Final Remote

### Repository

- [ ] Repository public dengan owner `whiteant-ops`.
- [ ] Branch default `main`.
- [ ] Remote `origin` mengarah ke `https://github.com/whiteant-ops/twants.git`.
- [ ] Commit pertama sudah dipush.

### Automation

- [ ] CI check sukses.
- [ ] CI docs sukses.
- [ ] Deploy Docs sukses.
- [ ] Pages URL dapat dibuka.
- [ ] Release Drafter aktif.
- [ ] Labels tersinkronisasi.
- [ ] Dependabot aktif.

### Community

- [ ] Issues aktif.
- [ ] Issue templates tampil.
- [ ] Discussions aktif.
- [ ] Wiki dibuat.
- [ ] Projects roadmap dibuat.
- [ ] Milestones dibuat.
- [ ] PR template tampil.

### Security and release

- [ ] Branch protection `main` aktif.
- [ ] `NPM_TOKEN` tersimpan sebagai Actions secret.
- [ ] Private vulnerability reporting aktif.
- [ ] Release pertama dibuat setelah CI stabil.
- [ ] Package npm terbit setelah workflow publish sukses.

---

## Status Saat Dokumen Ini Dibuat

Pekerjaan local sudah mencakup source package, konfigurasi docs, konten docs inti, workflows, dan metadata repository. Remote GitHub, Wiki, Projects, Discussions, branch protection, secrets, milestones, dan publish npm sengaja belum dijalankan dari workspace ini.
