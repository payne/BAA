
# Setup
1. `npm install` in the directory where this folder has been unpacked.
1. `npm i -global gulp-cli`

# Tasks
1. Use https://github.com/evanplaice/jquery-csv to parse a text area into a two-dimensional array.
   1. Get the tests in qunit/test-runner1.html to pass.
   2. Run these tests with the command `gulp test1`
1. Write a function that loops through the two-dimensional array to build an HTML table attached to a div with a specific id
   1. Get the tests in qunit/test-runner2.html to pass.
   2. Run these tests with the command `gulp test2`
1. Use this functionality in index.html by calling them from a click function off of the button with id `buttonToTable`
   1. Build your code with the command `gulp build` 
   2. This will put your whole program (index.html and app.bundle.js) in the build folder.  Note that app.bundle.js is created from app.js.
1. Switch out the simple source/index.html for the wireframe you made in exercise two.
   1. Rebuild you application using `gulp build` and put the result somewhere publicly accessible.

