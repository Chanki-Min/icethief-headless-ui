# vite-react-ts-extended [![Typecheck](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/typecheck.yml/badge.svg)](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/typecheck.yml)[![Test](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/test.yml/badge.svg)](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/test.yml)[![Lint](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/lint.yml/badge.svg)](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/lint.yml)[![Build](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/build.yml/badge.svg)](https://github.com/Chanki-Min/vite-template-react-icethief/actions/workflows/build.yml)

> My CRA alternative.  
> Create plain and lightweight React+TS programming environment with familiar pre-setup tooling  
> eslint/prettier, jest/TS/react-testing-library/msw, tailwindcss, CI.

This is the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [styled-components](https://styled-components.com/)
- [Github Actions](https://github.com/features/actions)

# Installation

```
npx degit Chanki-Min/vite-template-react-icethief
```

### yarn

```sh
cd myapp
yarn install
yarn validate # The installation was successful if no error occurs after running 'validate'.
yarn dev
```

### npm

```sh
cd myapp
npm install
npm run validate # The installation was successful if no error occurs after running 'validate'.
npm run dev
```

### Commands

```sh
yarn dev       # start development server
yarn validate  # run test,lint,build,typecheck concurrently
yarn test      # run jest
yarn lint      # run eslint
yarn lint:fix  # run eslint with --fix option
yarn typecheck # run TypeScript compiler check
yarn build     # build production bundle to 'dist' directly
yarn prettier  # run prettier for json|yml|css|md|mdx files
yarn clean     # remove 'node_modules' 'yarn.lock' 'dist' completely
yarn serve     # launch server for production bundle in local
```

# Background

This is forked template from https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml, and more!

# License

MIT
