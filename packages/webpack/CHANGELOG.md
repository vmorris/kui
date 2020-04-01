# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.6](https://github.com/IBM/kui/compare/v4.5.0...v8.0.6) (2020-03-23)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.0.5](https://github.com/IBM/kui/compare/v4.5.0...v8.0.5) (2020-03-23)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.0.4](https://github.com/IBM/kui/compare/v4.5.0...v8.0.4) (2020-03-23)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.0.3](https://github.com/IBM/kui/compare/v4.5.0...v8.0.3) (2020-03-22)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.0.2](https://github.com/IBM/kui/compare/v4.5.0...v8.0.2) (2020-03-22)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [8.0.1](https://github.com/IBM/kui/compare/v4.5.0...v8.0.1) (2020-03-22)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

# [8.0.0](https://github.com/IBM/kui/compare/v4.5.0...v8.0.0) (2020-03-20)

### Bug Fixes

- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- stop loading the entire carbon-components.min.css ([5ecba14](https://github.com/IBM/kui/commit/5ecba14)), closes [#3744](https://github.com/IBM/kui/issues/3744)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default

## [6.0.12](https://github.com/IBM/kui/compare/v6.0.11...v6.0.12) (2020-02-03)

**Note:** Version bump only for package @kui-shell/webpack

## [6.0.11](https://github.com/IBM/kui/compare/v6.0.10...v6.0.11) (2020-02-03)

**Note:** Version bump only for package @kui-shell/webpack

## [6.0.10](https://github.com/IBM/kui/compare/v6.0.9...v6.0.10) (2020-02-01)

**Note:** Version bump only for package @kui-shell/webpack

## [6.0.9](https://github.com/IBM/kui/compare/v6.0.8...v6.0.9) (2020-01-31)

**Note:** Version bump only for package @kui-shell/webpack

## [6.0.8](https://github.com/IBM/kui/compare/v4.5.0...v6.0.8) (2020-01-30)

### Bug Fixes

- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)

## [6.0.7](https://github.com/IBM/kui/compare/v4.5.0...v6.0.7) (2020-01-30)

### Bug Fixes

- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- allow client to override styles by sass ([8cee5db](https://github.com/IBM/kui/commit/8cee5db)), closes [#3579](https://github.com/IBM/kui/issues/3579)
- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)

## [6.0.6](https://github.com/IBM/kui/compare/v4.5.0...v6.0.6) (2020-01-30)

### Bug Fixes

- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)

## [6.0.5](https://github.com/IBM/kui/compare/v4.5.0...v6.0.5) (2020-01-29)

### Bug Fixes

- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- **packages/webpack:** allow clients to request classname preservation in webpack builds ([3d9fd32](https://github.com/IBM/kui/commit/3d9fd32)), closes [#3575](https://github.com/IBM/kui/issues/3575)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)

## [6.0.4](https://github.com/IBM/kui/compare/v6.0.3...v6.0.4) (2020-01-28)

**Note:** Version bump only for package @kui-shell/webpack

## [6.0.3](https://github.com/IBM/kui/compare/v4.5.0...v6.0.3) (2020-01-28)

### Bug Fixes

- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

## [6.0.2](https://github.com/IBM/kui/compare/v4.5.0...v6.0.2) (2020-01-28)

### Bug Fixes

- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

## [6.0.1](https://github.com/IBM/kui/compare/v4.5.0...v6.0.1) (2020-01-28)

### Bug Fixes

- **packages/webpack:** build-docker regression on non-mac platforms ([a3eb001](https://github.com/IBM/kui/commit/a3eb001)), closes [#3565](https://github.com/IBM/kui/issues/3565)
- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)

### Features

- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

# [6.0.0](https://github.com/IBM/kui/compare/v4.5.0...v6.0.0) (2020-01-27)

### Bug Fixes

- add 'Access-Control-Allow-Origin': '\*' to webpack dev server config ([fdb18c1](https://github.com/IBM/kui/commit/fdb18c1)), closes [#3324](https://github.com/IBM/kui/issues/3324)
- carbon themes should pull in plex fonts ([dbf623e](https://github.com/IBM/kui/commit/dbf623e)), closes [#3533](https://github.com/IBM/kui/issues/3533)
- improve contextRoot support for webpack ([7b48781](https://github.com/IBM/kui/commit/7b48781)), closes [#3413](https://github.com/IBM/kui/issues/3413)
- reimplement ls using filesystem APIs ([7eec254](https://github.com/IBM/kui/commit/7eec254)), closes [#2702](https://github.com/IBM/kui/issues/2702) [#1304](https://github.com/IBM/kui/issues/1304)
- webpack build tarCopy falsefully excludes a theme directory ([3800794](https://github.com/IBM/kui/commit/3800794)), closes [#3516](https://github.com/IBM/kui/issues/3516)
- **packages/webpack:** store generated webpack bundles under contextRoot ([7aa074d](https://github.com/IBM/kui/commit/7aa074d)), closes [#3418](https://github.com/IBM/kui/issues/3418)
- webpack builds for production a bit broken ([26999c8](https://github.com/IBM/kui/commit/26999c8)), closes [#3405](https://github.com/IBM/kui/issues/3405)
- **packages/webpack:** don't ignore fsevents entirely in webpack ([eec4843](https://github.com/IBM/kui/commit/eec4843)), closes [#3402](https://github.com/IBM/kui/issues/3402)
- **packages/webpack:** electron packager versus node-pty binaries ([5397577](https://github.com/IBM/kui/commit/5397577)), closes [#3381](https://github.com/IBM/kui/issues/3381)
- kui-watch-webpack should just watch webpack, not build ([ece3623](https://github.com/IBM/kui/commit/ece3623)), closes [#3377](https://github.com/IBM/kui/issues/3377)
- optimize webpack bundle loading ([e2f473a](https://github.com/IBM/kui/commit/e2f473a)), closes [#3359](https://github.com/IBM/kui/issues/3359)
- revert to webpack 4.40 ([141a407](https://github.com/IBM/kui/commit/141a407)), closes [#3005](https://github.com/IBM/kui/issues/3005)

### Features

- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- use webpack to build html template ([c4ad57a](https://github.com/IBM/kui/commit/c4ad57a)), closes [#3544](https://github.com/IBM/kui/issues/3544)
- **packages/builder:** kui-compile should allow specifying a tsconfig ([c0eb201](https://github.com/IBM/kui/commit/c0eb201)), closes [#3353](https://github.com/IBM/kui/issues/3353)
- **packages/webpack:** allow plugins to specify webpack externals ([74d2920](https://github.com/IBM/kui/commit/74d2920)), closes [#3399](https://github.com/IBM/kui/issues/3399)
- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)
- support generating es6 modules ([c1ed680](https://github.com/IBM/kui/commit/c1ed680)), closes [#2431](https://github.com/IBM/kui/issues/2431)

# [5.1.0](https://github.com/IBM/kui/compare/v4.5.0...v5.1.0) (2019-10-11)

### Features

- revive plugin-manager ([b78fed5](https://github.com/IBM/kui/commit/b78fed5)), closes [#2921](https://github.com/IBM/kui/issues/2921)

# [5.0.0](https://github.com/IBM/kui/compare/v4.5.0...v5.0.0) (2019-10-03)

**Note:** Version bump only for package @kui-shell/webpack
