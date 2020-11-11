# xKern Website

The source code of the xKern website.

## Project Overview

The website is a Next.js app and it's written in TypeScript. It uses SCSS and
[CSS modules][1] for styling.

## Prerequisites

- Git
- Node.js

## Getting Started

### Initial Setup

**1. Clone the repository:**

```sh
git clone git@github.com:jozsefsallai/xkern.git
cd xkern
```

**2. Install the dependencies:**

```sh
npm i -g yarn
yarn
```

**3. Create a dotenv file:**

```sh
cp .env.example .env
vim .env
```

The configuration file contains three options:

- `NEXT_PUBLIC_RECAPTCHA_KEY` - the Google reCAPTCHA key to be used in the
contact form.
- `NEXT_PUBLIC_MAPS_API_KEY` - the Google Maps key to be used in the map from
the contact page.
- `NEXT_PUBLIC_CONTACT_URL` - the API URL that will be called when submitting
the contact form.
- `NEXT_PUBLIC_JOB_APPLICATION_URL` - the API URL that will be called when
submitting a job application.

You may also set these as environment variables.

**Start the development server:**

```
yarn dev
```

## File Structure

### `components`

This directory contains various components that can be re-used anywhere in the
app. All components are properly typed, so further development should be
seamless and less prone to errors. Usually, each component has its own
subdirectory (for example, `loading-spinner` is a separate directory). Some
components also need component-level styling, in which case there's also a
`[ComponentName].module.scss` file that you can import.

### `lib`

Contains utility functions that can be reused anywhere in the app.

### `pages`

Everything under this directory is a route. For example, `pages/contact.tsx` is
the page that will be rendered when trying to access `localhost:3000/contact`.
Nested routes can be achieved using subdirectories. Variable route names
(although not used in this application), can be created by surrounding the file
name by square brackets (`pages/api/test/[id].ts` -> `/api/test/:id`).

API routes are only used for local development purposes (i.e. as a placeholder).

### `public`

Everything in this directory will be served as static content, relative to the
root of the app (`public/favicon.ico` -> `/favicon.ico`).

### `styles`

This directory contains SCSS files that are used as global stylesheets. The
styles declared here **can** be overwritten by component-level styles.

---

### `.next` (ignored)

A directory that gets created when starting a development server or building the
application. It contains the files necessary for the app to start and function.

### `out` (ignored)

This directory contains the files generated when exporting the app as static
HTML (static site generation). API routes are not included here.

The directory also contains a subdirectory called `_next`. The name of this
directory cannot be changed, so make sure that your environment doesn't ignore
it.

## Deployment

### Server-Side Rendering

You can run the following command to create a production (transpiled, optimized,
and minified) build:

```
yarn build
```

And the following command to run the server that just got build:

```
yarn start
```

In this scenario, a Node.js web server will be created to serve the website's
pages. It also allows API routes to be implemented.

### Static Site Generation

You can create a static HTML export of the entire app using the following
command:

```
yarn export
```

This will generate optimized and minified bundles and HTML files for each static
page in the application. The generated files will be available in the `out`
directory. The website will work perfectly under anything that can serve static
HTML files (nginx, Netlify, GitHub Pages, etc.).

## Coding Conventions

### Naming Convention

- Component names (and their respective filenames) should be written in
PascalCase
- Function and variable names should be written in camelCase
- Directory names should always be kebab-case

### General Rules

- Use single-quotes instead of double quotes wherever possible
- Only use `var` if it's necessary
- Try to use ES6 function syntax
- Provide types where necessary
- **Lint your code before committing (`yarn lint`)!**

[1]: https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
