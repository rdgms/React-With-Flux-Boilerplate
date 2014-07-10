# ReactJS with Flux Boilerplate

A stripped down, bare-bones, React/Flux boilerplate based on the todo-flux application.

## Requirements

1. Node/NPM
2. Grunt CLI

## Instalation

Fork or clone the repository locally. Then in your terminal do the following:

1. `npm install`
2. That's it. It's installed.

## Development

From your terminal run:

1. `npm start`

This will start and monitor all file changes using Browserify compiling them to a file called `bundle.js`. Look in the index.html file to see where it lives.

## Production

Your code is all ready to go live? Run the following from your terminal:

1. `grunt build`

This will create the uglified build file named after your applications version number in the `package.json` file.

## Things To Do

1. Continue to learn more about React and Flux :)
2. Populate the `readme.md` files in the various folders under the flux-application directory. Basically I want to provide little helpers as to what should be actions and how dispatchers work.
3. Provide a integrated web-server.