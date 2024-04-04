# StrateGIK

An application, 1st of its kind, for students of GIK Institute to share and utilize academic resources, conveniently hosted on a centralized platform

![StrateGIK GIF](https://github.com/haiderzaidi07/haiderzaidi07/blob/main/strategik-new.gif?raw=true)

This repository hosts the beta(old) version of the application, the updated version is closed source. However, access may be granted upon request

## Live Demo

The live demo of this website can be accessed at: https://strategik.netlify.app/


## Features

- 
- 


## Tech Stack

**Client:** React, TailwindCSS, React-pdf, ConvertAPI, Date-fns

**Server:** Node.js, Express, MongoDB, JWT, Cloudinary


## Branches

The codebase is split into different branches:

- [main](https://github.com/haiderzaidi07/strategik-beta) (ejs version)
- [mern](https://github.com/haiderzaidi07/strategik-beta/tree/mern)


## Run Locally

Frontend

```bash
  git clone https://github.com/haiderzaidi07/strategik-beta.git
  git checkout mern
  cd frontend/
  npm install
  npm start
```

Backend

```bash
  git clone https://github.com/haiderzaidi07/strategik-beta.git
  git checkout mern
  cd backend/
  npm install
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend

Port Number

`PORT`

MongoDB Connection String

`DB_STRING`

JWT Secret

`SECRET`

Cloudinary Configuration

`CLOUD_NAME`
`API_KEY`
`API_SECRET`


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## Further Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility
