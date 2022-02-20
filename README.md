# Music Tube Server

Music tube is a music video display application which periodically updated the videos from the YouTube Data API.

# Stack used

- Backend with [Express framework](https://expressjs.com/) for [Node.js](https://nodejs.org/en/)
- Frontend with [React](https://reactjs.org/) (with MaterialUI components)
- [MongoDB](https://www.mongodb.com/) for database (Used [mongoose](https://mongoosejs.com/) for modelling)
- Server is dockerized (MongoDB connection is required to run the server image)

For exact dependencies used frontend and backend, checkout [frontend's package.json](/frontend/package.json) and [backend's package.json](/backend/package.json)

# Setup

## Prerequisites

Git, [Docker](https://docs.docker.com/get-docker/)

## Getting API key for YouTube Data API

1.  Create a project in the [Google Developers Console](https://console.developers.google.com/) and [obtain authorization credentials](https://developers.google.com/youtube/registering_an_application) so your application can submit API requests.
2.  After creating your project, make sure the YouTube Data API is one of the services that your application is registered to use:
    1.  Go to the [API Console](https://console.developers.google.com/) and select the project that you just registered.
    2.  Visit the [Enabled APIs page](https://console.developers.google.com/apis/enabled). In the list of APIs, make sure the status is **ON** for the **YouTube Data API v3**. 

## Environment

The following environments variables are required.

- `PORT`: port on which server communicates
- `YOUTUBE_API_KEY`: key obtained earlier
- `DB_URI`: mongodb server uri
  Instead of `DB_URI`, seperate elements of it can be used:
    DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
    
## Usage 
+ A build can be run as a container with docker. (Remember to set the environment variables required)
Refer Docker documentation for different uses of an image

+ For running locally without bothering about setting up MongoDB, use [j-tesla/music-tube](https://github.com/j-tesla/music-tube)

__________

**Demo deployment:**: https://music--tube.herokuapp.com/  
Dashboard is avaialble at root url and API endpoint for videos is at `/api/videos`
