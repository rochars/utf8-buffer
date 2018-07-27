# Building utf8-buffer

Building is necessary to compile the UMD dist and to generate API documentation.

Building works the same on all platforms:
```
npm run build
```
This will lint the sources, test the sources, compile a UMD and a ES6 module, test everything and generate documentation files.

There **should** be no warnings during the build.

The dist files are created in the *dist/* folder.

The API documentation is generated in the *docs/* folder.
