iwZoom
===
An angular directive for implementing zoom on any DOM element

Installation
-------------

- `yarn add ng-iw-zoom` (or npm install) 
- include the `iw-zoom.directive.js` file located in the dist/ folder
- add `iwZoom` to your module dependencies ` angular.module('app', ['iwZoom'])`
- include the `<zoomer></zoomer>` wherever you want the directive to display inside your HTML

Usage
-----

- You'll need to pass the directive options using the `options=""` attribute on the `<zoomer>` element
- Most likely, you'll want to style this directive. A sample stylesheet is provided in src/sass (sample requires [bourbon](http://bourbon.io/))

### Options

The `options` attribute accepts a valid JSON object.
**selector** is the only REQUIRED option.

option   | type | description | default
-------- | ---  | ----------- | -------
selector | string  | The class or ID of the element you want to make "zoomable" | None, required
min    	| int | the minimum value of zoom | 0.75
max     | int | the maximum value of zoom | 10.0
step 	| int | the legal number intervals for the slider element. | 0.25
defaultZoom | int | the default zoom level | 1
 					
> **Tip:** The step attribute can be used together with the max and min attributes to create a range of legal values.

### Table of contents

[TOC]

