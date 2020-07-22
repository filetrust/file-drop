# Glasswall File Drop

Simple single page application written in react, which allows users to have a file processed with the Glasswall d-First Engine.

## Try it out
You can view a live demo over at [https://file-drop.co.uk/](https://file-drop.co.uk)

## Related Blog posts

- [Using Glasswall Engine to protect file uploads](https://medium.com/glasswall-engineering/using-glasswall-engine-to-protect-file-uploads-f3e79815e356)
- [Glasswall has a new kid on the block!](https://medium.com/glasswall-engineering/glasswall-has-a-new-kid-on-the-block-e5c6feb511)


## Getting Started
To get the frontend running locally:
* Clone this repo

* `npm install` to install all required dependencies
* `npm start` to star the local server (this project uses create-react-app)

or (if you working with yarn) 

* `yarn` to install all required dependencies
* `yarn start` to star the local server (this project uses create-react-app)

The local web server will use the standard React port 3000.
We have a live API server running at https://glasswall-file-drop-api.azurewebsites.net for the application to make requests against.

## Running the tests

Tests can be run locally with `npm test` or  `yarn test`


## Deployment

Deployment is handled via Azure DevOps pipelines. Upon pushing to master a Build will take place, packaging up the application with Docker and pushing the image to an Azure Container Registry. Once the CI build has been completed a Release will upload the lastest docker image to the App Service running the React App.


## Environments

### Local development
After project cloning for correct working the API Tokens have to be added to the `.env.development.local`. Ask about it by team lead.

_NOTE_ without properly set of API tokens pretty possible CORS issue!

### Production deployment

For production deploying, file `.env.production.local` with production API tokens have to be copied from other source to at the CI pipeline stage.
