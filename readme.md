#Grunt Presentation

## 1 - Gunt

Presentation on grunt, or grunt.js.

## 2 - What is grunt.js?

Grunt.js is a task-based command line build tool for JavaScript projects, it runs on node.js, and utilizes the Node Package Manager (NPM) to extend the functionaility.

Install grunt globalling using the NPM with the following command : `npm install -g grunt `


## 3 - The gruntfile

Generally speaking it's located in the root of your project

If you try to run grunt and a grunt.js file is not found in the current directory, it will keep looking up the folder tree until one is found

Contains all the configuration for your grunt tasks

## 4 - package.json

Used to keep track of dependencies of grunt modules needed to run grunt on the project. This file should be checked in with your project, so developers can install relevant dependencies if they need to grunt your project.

Can create a basic file using `npm init`

See the devDependencies struct, this is a list of all the dependencies required for your project. They are installed using `npm install < module name > --save-dev`


## 5 - gruntfile.js - The 'gruntfile'

Generally speaking it's located in the root of your project, along side the package.json file

If you try to run grunt and a gruntfile.js file is not found in the current directory, it will keep looking up the folder tree until one is found

* Contains the following parts
* The "wrapper" function
* Project and task configuration
* Loading grunt plugins and tasks
* Custom tasks

## 6 - gruntfile.js - CODE - Basic

Here is a basic grunt.js file.

The first line is very important, your gruntfile must contain this code, also the last line to close this code off.

All your tasks configuration code goes inside the grunt.initConfig({ });

As you can see here, there is one project task set up, this one is the uglify task where we take a src file and create the distribution version, by uglify and minifying it.

All grunt task's are modules so you need to load them to use them.

The we need to register the task so that when we run gruntfile.js it knows which task's to run.

Grunt requires the 'default' task to be assigned, as this is the set of task it will run if you call the grunt.js command with no arguments.

If you had a task called uglify and uglify was in the default task list, it would run the task uglify over the default task which contains uglify.


## 7 - DEMO

Show setting up a project and gruntfile

Then using an exisitng project

## The End

Could not do a presentation withoutx a Back to the Future image!
