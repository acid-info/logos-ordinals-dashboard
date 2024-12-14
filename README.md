# Logos Ordinals

This is currently at the MVP stage of the project.

Staging: [https://logos-ordinals-dashboard.vercel.app/](https://logos-ordinals-dashboard.vercel.app/)

## How to Run Locally

1. Clone this repository

```bash
$ git clone https://github.com/acid-info/logos-ordinals-dashboard.git
```

2. Install the dependencies:

```bash
$ yarn install
```

3. Create a .env file

`NEXT_PUBLIC_API_MODE=development` for development

```bash
NEXT_PUBLIC_API_MODE=development
```

4. Start the development server:

```bash
$ yarn dev
```

4. Visit `http://localhost:3000` in your browser

## How to Run a Build (Production Build)

1. Generate files for production:

```bash
$ yarn build
```

The files will be created in the `out` directory.

2. The build is located in the `/out` directory. You can host it using a static HTTP server such as [http-server](https://www.npmjs.com/package/http-server)

```bash
$ cd out && http-server . -p 3000
```

For more details about the NextJS static build process, visit the official documentation: [https://nextjs.org/docs/pages/building-your-application/deploying/static-exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

3. Visit `http://localhost:3000` in your browser.

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`.

2. Make your changes, push them to the `origin`, and open a Pull Request against the `develop` branch.

3. After approval, merge the pull request, and verify the changes on the staging server.

4. When ready to promote changes to the live website, create a pull request against the "master" branch, based on the "develop" branch.
