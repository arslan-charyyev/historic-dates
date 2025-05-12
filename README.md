# Assignment submission for [onlydigital.ru](https://onlydigital.ru)

## 📚 Tech Stack

- Webpack
- Babel
- TypeScript
- React.js
- Styled Components

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

Or hit the `start` Run/Debug Configuration if working in a Jetbrains IDE.

#### Miscellaneous

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm build`        | Build a production bundle                    |
| `pnpm serve`        | Start local server to test production bundle |
| `pnpm build&serve`  | Two of the above commands combined           |
| `pnpm format:check` | Check formatting issues in project           |
| `pnpm format:fix`   | Fix formatting issues in project             |

#### Build website bundle

```shell
pnpm build
```

The output will be located in the [dist](./dist) directory.

## 🚀 Deployment

Push to the `master` branch triggers [deploy.yml](.github/workflows/deploy.yml) workflow,
which publishes the website on GitHub pages.
