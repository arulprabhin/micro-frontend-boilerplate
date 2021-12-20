# Micro front-end app boilerplate

This is the micro front-end boilerplate for **misnet**. It's using [nx](https://nx.dev/) to run the multiple micro front-end apps simultaneously.

**spa** is the host app to run micro front-end apps and **dashboard** is the sample micro front-end app.
**spa** is running at 3000 port and **dashboard** is running at 3001 port.

## Installation

You should install dependencies for all micro frontend apps one by one.

1.  Install dependencies in root dir

    ```sh
    yarn install
    ```

2.  Install dependencies in spa

    ```sh
    cd apps/spa
    yarn install
    ```

3.  Install dependencies in dashboard

    ```sh
    cd apps/dashboard
    yarn install
    ```

## Run the project

If you run `yarn start` in the root directory, it will run the application.
If you'd like to run the micro front-end apps individually, then go into the micro front-end app directory and run `yarn start`.

## TODO

- Add global state management library
- Add react testing library for unit testing
- Add eslint/prettier for code format
- SPIKE: Install dependencies simultaneously
- SPIKE: Deploy micro front-end app into prod
