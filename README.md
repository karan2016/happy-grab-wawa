React boilerplate with ES2015, Express.js, and Webpack

[![Build Status](https://travis-ci.org/antonfisher/react-express-webpack.svg?branch=master)](https://travis-ci.org/antonfisher/react-express-webpack)
[![Dependency Status](https://dependencyci.com/github/antonfisher/react-express-webpack/badge)](https://dependencyci.com/github/antonfisher/react-express-webpack)
[![bitHound Overall Score](https://www.bithound.io/github/antonfisher/react-express-webpack/badges/score.svg)](https://www.bithound.io/github/antonfisher/react-express-webpack)

## Technologies

- React (v16) + Redux (v3) + React Router (v4)
- Express.js (v4) as production and development server
- Webpack 3 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015+

## Features
- preconfigured router
- preconfigured modal windows
- preconfigured ESLint (airbnb)
- React Hot Loader (v3-beta)


## Usage

### Installation
```bash
git clone git@github.com:karan2016/happy-grab-wawa.git
cd react-express-webpack
npm install
# or
yarn install

# remove boiler plate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
MIT License. Free use and change.
