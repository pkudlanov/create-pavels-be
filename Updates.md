# Updates

## Version 1.0.0

Forked Ryans alchemy-be repo for the npm package and updated it with my own prefrences.

### Changes

1. File Structure
   1. Changed the file structure so it creates all the files and instals dependencies inside the current directory rather then making its own directory
2. File contents restructured to my liking
   1. Restructured some of the file contents in files directory with indents to my liking and some comments
3. .eslint File
   1. Changed the indent to 4 spaces rather then 2
   2. Also added *browser: true* to "*env*" key
4. Changed the npm json file
   1. Links to my personal github repo
   2. General personal info now like *name* and *bin* with my own text

## Version 1.0.1

Lot's of little bugs and little things fixed.

### Changes

1. Fixed .travis bug
   1. Changed .travis.yml file language from node to node_js
2. Fixed package.json name field bug
   1. The package.json file in files didn't have a dynamic name field but rather "./" for the name field which is not allowed
   2. Fixed it by getting the path from the relative path and getting the current directory name from that path inside the index file and setting the package.json name field equal to that current directory name
3. .env file creation updated
   1. The .env file created inside index.js had non dynamic contents
   2. The contents need to end with repo name or folder name
   3. Made that change the same as package.json name field
4. Updates.md file
   1. Added a file to track changes between versions
5. Updated README file with my own instructions now
6. Added some comments in index.js for future diagnostics

## Version 1.0.2

Tabs updated.

### Changes

1. Changed tab size to two spaces
