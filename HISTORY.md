# History

## v2.0.1 2016 November 4
- Fixed tests not being published to npm for use in the testing ecosystem

## v2.0.0 2016 November 4
- Updated for Joe v2
- Configuration has changed
- Moved from CoffeeScript to ESNext
- Updated base files

## v1.2.1 2013 April 5
- Fixed error log reporting

## v1.2.0 2013 April 5
- Split from main repo

## v1.1.2 2013 March 23
- Dependency updates

## v1.1.1 2012 October 25
- Build improvements
- Updated [bal-util](https://github.com/balupton/bal-util) from v1.3 to v1.15
- Updated [coffee-script](https://github.com/jashkenas/coffee-script) devDependency from 1.3 to 1.4

## v1.1.0 2012 October 25
- Updated [cli-color](https://github.com/medikoo/cli-color) from v0.1 to v0.2
- Updated [bal-util](https://github.com/balupton/bal-util) from v1.11 to v1.13
	- Update: turns out I actually specified v1.3 instead of v1.13 - it works, but not desirable, fixed in v1.1.1

## v1.0.3 2012 August 9
- Windows support
- Re-added markdown files to npm distribution as they are required for the npm website

## v1.0.2 2012 July 4
- We now error on incomplete tasks
- Joe now handles (instead of reporters):
	- the counting of total, passed, failed and incomplete suites and tests
	- the logging of errors with their suites sand tests
	- the fetching of suite and test names (including their parents)

## v1.0.1 2012 June 11
- Joe will now throw errors if you have an incorrect amount of arguments for your `suite` and `test` callbacks

## v1.0.0 2012 June 11
- Finalised and cleaned the API

## v0.4.0 2012 June 9
- More cleaning

## v0.3.5 2012 June 9
- We include `cli-color` now in dependencies and optionalDependencies so it will install for node 0.4 users
- We now return the correct exit code

## v0.3.4 2012 June 9
- Now handles optional dependencies correctly

## v0.3.3 2012 June 9
- Added cli-color as an optional and bundled dependency

## v0.3.2 2012 June 9
- [bal-util](https://github.com/balupton/bal-util) is now a bundled dependency

## v0.3.1 2012 June 9
- Joe no longer exposes globals, use `joe.describe|suite`, and now `joe.test|it`
- Global suites now run under the suite `joe.globalSuite`, which allows us to auto-exit

## v0.3.0 2012 June 8
- Lots of cleaning
- Abstracted generic code to bal-util

## v0.2.1 2012 June 4
- Bugfixes

## v0.2.0 2012 June 4
- Added support for reporters

## v0.1.0 2012 June 4
- Initial and working commit
