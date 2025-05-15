# Assignment submission for [onlydigital.ru](https://onlydigital.ru)

[![badge](https://github.com/arslan-charyyev/historic-dates/actions/workflows/deploy.yml/badge.svg)](https://github.com/arslan-charyyev/historic-dates/actions/workflows/deploy.yml)
![GitHub License](https://img.shields.io/github/license/arslan-charyyev/historic-dates)

> [!NOTE]
> 🚀 Check out the deployed project at:
>
> https://arslan-charyyev.github.io/historic-dates/

## 📚 Tech Stack

- Webpack
- Babel
- TypeScript
- React.js
- Styled Components
- GSAP
- Prettier
- ESLint

## ☁️ Remote development

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/arslan-charyyev/historic-dates)

After the Codespace has finished loading, open the `Run and Debug` panel, and start the `dev` configuration.

## 🏗️ Local development

### Requirements

- Node.js v22.10.0 or newer (needs to support type stripping)
- [pnpm](https://pnpm.io/)

### First-time setup

- Clone this repository
- From repository root, execute `pnpm install`

### Scripts

#### ▶️ Start a dev server with hot-reload

```shell
pnpm dev
```

Or hit the `dev` Run/Debug Configuration if working in a Jetbrains IDE or VS Code.

The development server will be available at: http://localhost:8080

#### Miscellaneous

| Command            | Description                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------|
| `pnpm build`       | Build a production bundle. The output will be located in the [dist](./dist) directory.               |
| `pnpm serve`       | Start local server to test production bundle. The server will be available at: http://localhost:8888 |
| `pnpm build&serve` | Two of the above commands combined                                                                   |
| `pnpm format`      | Fix formatting issues in the project                                                                 |
| `pnpm lint`        | Check code issues in the project                                                                     |

## 🚀 Deployment

Git commit triggers the `pnpm lint` check and aborts a commit if any issues are found.
Powered by [husky](https://typicode.github.io/husky/).

Git push to the `master` branch triggers [deploy.yml](.github/workflows/deploy.yml) workflow,
which publishes the website on GitHub Pages.
