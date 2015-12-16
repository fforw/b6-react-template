# React App Skeleton

This is a rudimentary react skeleton application which integrates a number of build and test libs. 

* gulp
* browserify 
* browserify-shim for to exclude "react/addons" and "react-dom" from the app bundle
* JSX transformation and selected others via the new Babel 6
* Mocha with integrated power-assert, now also based on Babel 6 transforms
* bulk-require/bulkify setup to auto-load modules from certain sub-paths and have them resolved statically on compilation time for the browserify bundle

# Setup
 
Adjust MAIN_FILE and DESTINATION_PATH in gulpfile.js to your project needs.

# Usage

Use "gulp" to build and "gulp watch" to keep observing the sources and incrementally update the browserify bundle when code changes.

Both tasks will uglify the bundle by default and will stop doing so if the environment variable NO_UGLIFY is set to a truthy value. (For unixy systems use .g. "NO_UGLIFY=1 gulp watch" to deactivate uglifying)
