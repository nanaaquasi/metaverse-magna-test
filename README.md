# React with vite and typescript

[![CI](https://github.com/hyochan/react-typescript-vite/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/react-typescript-vite/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/hyochan/react-typescript-vite/branch/main/graph/badge.svg)](https://codecov.io/gh/hyochan/react-typescript-vite)

> Tools used.

- [react](https://github.com/facebook/react)
- [react-router](https://github.com/ReactTraining/react-router)
- [typescript](https://github.com/Microsoft/TypeScript)
- [axios](https://github.com/axios/axios)
- [scss](https://github.com/facebookexperimental/Recoil)
- [react-use-websocket](https://github.com/robtaussig/react-use-websocket#readme)

### Install and running the project

Installing and running the project is as simple as running

```sh
yarn && yarn dev
```

- Note that I recommend using yarn. Also Vite handles sass preprocessing and running automatically so there is no need to setup sass on your own.

This runs the `dev` script specified in our `package.json`, and will spawn off a vite server which reloads the page as we save our files.
Typically the server should be automatically opened for you.
