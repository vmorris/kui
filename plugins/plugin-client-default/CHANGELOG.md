# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.1](https://github.com/IBM/kui/compare/v4.5.0...v8.0.1) (2020-03-22)

### Bug Fixes

- **plugins/plugin-client-common:** improve Screenshot UI ([bc2102a](https://github.com/IBM/kui/commit/bc2102a)), closes [#3734](https://github.com/IBM/kui/issues/3734)
- broken ico icons ([d018404](https://github.com/IBM/kui/commit/d018404)), closes [#3947](https://github.com/IBM/kui/issues/3947)
- Popup client should place InputStripe inside of StatusStripe ([a09138d](https://github.com/IBM/kui/commit/a09138d)), closes [#3949](https://github.com/IBM/kui/issues/3949)
- **packages/core:** restore CommandStringContent as one of FunctionThatProducesContent types ([1e32b93](https://github.com/IBM/kui/commit/1e32b93)), closes [#3687](https://github.com/IBM/kui/issues/3687)
- **plugin-sidecar:** React doesn't re-instantiate PaginatedTable for tabs located in the same LeftNav ([283a525](https://github.com/IBM/kui/commit/283a525)), closes [#3837](https://github.com/IBM/kui/issues/3837) [#3839](https://github.com/IBM/kui/issues/3839)
- **plugins/plugin-client-default:** cwd+w should close popup windows ([dfad325](https://github.com/IBM/kui/commit/dfad325)), closes [#3895](https://github.com/IBM/kui/issues/3895)
- **plugins/plugin-client-default:** load Popup.tsx via React.lazy ([f77c2a3](https://github.com/IBM/kui/commit/f77c2a3)), closes [#3908](https://github.com/IBM/kui/issues/3908)
- **plugins/plugin-client-default:** Popup LeftNav content has too much padding ([194f975](https://github.com/IBM/kui/commit/194f975)), closes [#3912](https://github.com/IBM/kui/issues/3912)
- **plugins/plugin-client-default:** Popup's placeholder text modification should only listen to commands from user ([5bf83fd](https://github.com/IBM/kui/commit/5bf83fd)), closes [#3910](https://github.com/IBM/kui/issues/3910)
- eliminate the the use of symlink of adding css files to build stage ([dad4987](https://github.com/IBM/kui/commit/dad4987)), closes [#3567](https://github.com/IBM/kui/issues/3567)
- plugin-client-command/default are publishing tsbuildinfo ([0ad3f2a](https://github.com/IBM/kui/commit/0ad3f2a)), closes [#3846](https://github.com/IBM/kui/issues/3846)
- plugin-client-default should have dependency of plugin-client-common ([41fe2f5](https://github.com/IBM/kui/commit/41fe2f5)), closes [#3583](https://github.com/IBM/kui/issues/3583)
- some code is dependent on the existence of static config files ([cdc6487](https://github.com/IBM/kui/commit/cdc6487)), closes [#3813](https://github.com/IBM/kui/issues/3813)

### chore

- kui client cleanup ([b4c3984](https://github.com/IBM/kui/commit/b4c3984)), closes [#3974](https://github.com/IBM/kui/issues/3974)

### Features

- a new model NavResponse supporting side navigation menu ([41940eb](https://github.com/IBM/kui/commit/41940eb)), closes [#3659](https://github.com/IBM/kui/issues/3659)
- add history to sidecar views ([b1e5543](https://github.com/IBM/kui/commit/b1e5543)), closes [#3960](https://github.com/IBM/kui/issues/3960)
- bottom input ([c6d2af0](https://github.com/IBM/kui/commit/c6d2af0)), closes [#3729](https://github.com/IBM/kui/issues/3729)
- carbon tables ([237e9a5](https://github.com/IBM/kui/commit/237e9a5)), closes [#3632](https://github.com/IBM/kui/issues/3632)
- for popup windows, show command as placeholder text in input stripe ([a897042](https://github.com/IBM/kui/commit/a897042)), closes [#3899](https://github.com/IBM/kui/issues/3899)
- introduce plugin-client-default meant for hosting a client definition ([688a991](https://github.com/IBM/kui/commit/688a991)), closes [#3463](https://github.com/IBM/kui/issues/3463)
- left-navigation sidecar ([f88329e](https://github.com/IBM/kui/commit/f88329e)), closes [#3635](https://github.com/IBM/kui/issues/3635)
- Popup client ([063c363](https://github.com/IBM/kui/commit/063c363)), closes [#3886](https://github.com/IBM/kui/issues/3886)
- react helpers ([f6bea1f](https://github.com/IBM/kui/commit/f6bea1f))
- refine NavResponse and add NavLinks support in LeftNavSidecar ([f1d8d98](https://github.com/IBM/kui/commit/f1d8d98)), closes [#3902](https://github.com/IBM/kui/issues/3902)

### BREAKING CHANGES

- this PR removes plugins/plugin-client-default
- this moves plugin-sidecar and plugin-carbon-tables into plugin-client-common
