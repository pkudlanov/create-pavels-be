# Create Alchemy BE

**Don't** install this package. Use `npm init` in parent directory.

`npm init pavels-be`

## Initialization

1. create a new repo on github
   1. initialize with gitignore, and readme files
2. clone github repo locally and cd into it
3. npm init pavels-be

## Updating npm package *just my notes*

1. Double check all changes are correct
2. Log changes in the new version in Updates file
3. Push all new changes to github
4. Publish to npm
   1. cd to local npm module files directory
   2. npm version <update_type>
      1. patch, minor, major
      2. don't include the '<>'
      3. this will update the version in package.json so no need to do it manually
   3. npm publish
