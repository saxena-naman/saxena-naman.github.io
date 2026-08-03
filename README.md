# Naman Saxena — Portfolio

Personal portfolio site: career history, education, skills, and project
work. Built with Vue 3 + Vite.

🔗 Live at [saxena-naman.github.io](https://saxena-naman.github.io/)

---

## Local development

### Prerequisites

- Node.js 20+
- npm

### Setup

```shell
git clone https://github.com/saxena-naman/saxena-naman.github.io.git
cd saxena-naman.github.io
npm install
```

Start the dev server with hot-reload:

```shell
npm run dev
```

Build for production (outputs to `dist/`):

```shell
npm run build
```

Preview a production build locally:

```shell
npm run preview
```

---

## Structure

- `info.js` — all page content (name, bio, education, experience, skills,
  portfolio projects, recommendations). Edit this file to update what's
  shown on the site; project screenshots/PDFs referenced from here live in
  `src/assets/`.
- `src/components/` — page sections (`Home`, `About`, `Skills`, `Portfolio`,
  `Contact`, etc.) and shared helpers under `src/components/helpers/`.
- `.github/workflows/deploy.yml` — builds on every push to `main` and
  publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

## Contact form (emailjs)

The contact form uses [emailjs](https://www.emailjs.com/) (free tier, 200
emails/month) via a `config.js` file in the repo root, which is
git-ignored — it holds the emailjs service/template/user IDs and is never
committed.

```js
// config.js
let config = {
  emailjs: {
    serviceID: "<serviceID>",
    templateID: "<templateID>",
    userID: "<userID>",
  },
};

export default config;
```

Get the IDs from your emailjs account: **serviceID** from `Email Services`,
**templateID** from `Email Templates`, **userID** from `Account` > `API
Keys`. The email template should use `{{from_name}}`, `{{message_html}}`,
and `{{user_email}}` placeholders to match `src/components/Contact.vue`.

---

## Credit / License

Originally scaffolded from
[hrishikeshpaul/portfolio-template](https://github.com/hrishikeshpaul/portfolio-template),
MIT licensed. See [LICENSE](./LICENSE) for the original copyright notice.
