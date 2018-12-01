ATU Library Management System
===

A library system written in nodejs, bootstrap, and some custom html/css.

Development Requirements
---

1. Install [Nodejs](https://nodejs.org)
1. Run `npm install`

Development notes
---

1. All of the static files are located in the `public` directory for distribution.
1. The development server is using [Express](https://expressjs.com/) for static file serving. This is not meant for production.
1. Edit your files in `public`. Nothing outside of `public` is going to be served by the server.

Serving your files
---

1. Run `npm start`
1. Visit `localhost:3000` in your browser