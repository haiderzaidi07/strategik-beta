# StrateGIK

An application, 1st of its kind, for students of GIK Institute to share and utilize academic resources, conveniently hosted on a centralized platform

![StrateGIK GIF](https://github.com/haiderzaidi07/haiderzaidi07/blob/main/strategik-new.gif?raw=true)

This repository hosts the beta(old) version of the application, the updated version is closed source. However, access may be granted upon request

## Live Demo

The live demo of this website can be accessed at: https://strategik.netlify.app/


## Features

- Create Posts with title, description, and various actions like Like, Save, Report, and Delete
- Full-fledged comments system with options to like, edit, report, delete, and reply
- Profile Page for each user showcasing social links, posts made, and saved posts
- Communities feature for multiple courses with a search option for easier access
- Zoom In and Out functionality and Download feature for PDFs
- Ability to toggle between dark and light modes for improved user experience
- Convert DOCX files to PDF format for convenient sharing and viewing
- Integration of tawk.to widget for seamless communication with developers


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

- Enhance type safety through TypeScript implementation
- Customize Home Feed based on AI recommendations and followed communities
- Utilize AI for automatic removal of duplicate posts
- Hide reported posts and comments for moderation purposes
- Display stats/graphs for repeated questions
- Implement Leaderboard/Ranking functionality
- Integrate Library API for enhanced resources
