Kickstart
=========

Kickstart is a front-end framework for clean HTML and fast performance

[getkickstart.com](http://getkickstart.com)

[![NPM](https://nodei.co/npm/kickstart-node.png)](https://nodei.co/npm/kickstart-node/)

[ ![Codeship Status for ajkochanowicz/Kickstrap](https://www.codeship.io/projects/bf939ac0-1a88-0132-7edc-6605d664157f/status)](https://www.codeship.io/projects/34696)

[![Code Climate](https://codeclimate.com/github/ajkochanowicz/Kickstrap/badges/gpa.svg)](https://codeclimate.com/github/ajkochanowicz/Kickstrap)

For deployment, read [this codeship tutorial](http://blog.codeship.io/2014/02/04/continuous-deployment-static-pages-amazon-s3.html)

## Quickstart

Clone the repository and run `make` in the directory created. This is only required when starting the project.

Run gulp to again build and watch the project. A browser tab should open in your
default browser automatically when ready. You'll also get an external URL you
can use on other devices.

## Building Rails Gem

Run `make build-rails`. This will build the project and a new gem but will not push the gem to rubygems.org.

To push to rubygems, simply enter (in the rails dir) `gem push kickstart_rails-X.X.X.gem`. Replace
the Xs with the version number of course.
