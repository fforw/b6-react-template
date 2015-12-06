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
