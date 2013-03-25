#!/usr/bin/env node
var hogan = require('hogan.js')
  , fs    = require('fs')
  , prod  = process.argv[2] == 'production'
  , test  = process.argv[2] == 'test'
  , title = 'Kickstrap'

var layout, pages, less, publishDir

// compile layout template
layout = fs.readFileSync(__dirname + '/lib/templates/layout.mustache', 'utf-8')
layout = hogan.compile(layout, { sectionTags: [{o:'_i', c:'i'}] })

// retrieve pages
pages = fs.readdirSync(__dirname + '/lib/templates/pages')

// retrieve .less templates
lesses = fs.readdirSync(__dirname + '/lib/templates/less')

test ? publishDir = 'tests' : publishDir = 'dist'

// iterate over pages
pages.forEach(function (name) {

  if (!name.match(/\.mustache$/)) return

  var page = fs.readFileSync(__dirname  + '/lib/templates/pages/' + name, 'utf-8')
    , context = {}

  context[name.replace(/\.mustache$/, '')] = 'active'
  context._i = true
  context.production = prod
  context.test = test
  context.title = name
    .replace(/\.mustache/, '')
    .replace(/\-.*/, '')
    .replace(/(.)/, function ($1) { return $1.toUpperCase() })

  if (context.title == 'Index') {
    context.title = title
  } else {
    context.title += ' á ' + title
  }

  page = hogan.compile(page, { sectionTags: [{o:'_i', c:'i'}] })
  page = layout.render(context, {
    body: page
  })

  fs.writeFileSync(__dirname + '/' + publishDir + '/kickstrap/_examples/' + name.replace(/mustache$/, 'html'), page, 'utf-8')
})

// iterate over less templates
// iterate over pages
lesses.forEach(function (name) {

  if (!name.match(/\.mustache$/)) return

  var less = fs.readFileSync(__dirname  + '/lib/templates/less/' + name, 'utf-8')
    , context = {}

  context[name.replace(/\.mustache$/, '')] = 'active'
  context._i = true
  context.production = prod
  context.test = test
  context.title = name
    .replace(/\.mustache/, '')
    .replace(/\-.*/, '')
    .replace(/(.)/, function ($1) { return $1.toUpperCase() })
  context.title += ' á ' + title

  less = hogan.compile(less, { sectionTags: [{o:'_i', c:'i'}] })
  less = less.render(context)

  fs.writeFileSync(__dirname + '/' + publishDir + '/Kickstrap/' + name.replace(/mustache$/, 'less'), less, 'utf-8')
})
