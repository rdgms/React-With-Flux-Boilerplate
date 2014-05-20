# Flux Boilerplate

> An application architecture for React utilizing a unidirectional data flow.


## Learning Flux

The [React website](http://facebook.github.io/react) is a great resource for getting started.

Read the blog post announcing Flux: ["An Application Architecture for React"](http://facebook.github.io/react/blog/2014/05/06/flux.html), then read more about the [Flux architecture](http://facebook.github.io/react/docs/flux-overview.html) and a [TodoMVC tutorial](http://facebook.github.io/react/docs/flux-todo-list.html) explaining the structure of the files in this folder.

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process that will update build.js with any changes you wish to make.  This watcher is based on [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify), and it transforms React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).

To run the app, spin up an HTTP server hit the index.html file.


## Credit

This Boilerplate was modeled off of the TodoMVC application created by [Bill Fisher](https://www.facebook.com/bill.fisher.771).


## License

> Copyright 2013-2014 Facebook, Inc.
>
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
> http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
