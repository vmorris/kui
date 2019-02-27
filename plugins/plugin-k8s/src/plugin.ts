/*
 * Copyright 2018 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Debug from 'debug'
const debug = Debug('k8s/loader')
debug('loading')

import auth from './lib/controller/auth'
import contexts from './lib/controller/contexts'
import kubectl from './lib/controller/kubectl'
import status from './lib/controller/status'
import istio from './lib/controller/istio'
import kiali from './lib/controller/kiali'

import { inBrowser } from '@kui-shell/core/core/capabilities'
import { PluginRegistration, PluginRequire } from '@kui-shell/core/models/plugin'

export default async (commandTree, prequire: PluginRequire) => {
  debug('init')
  await auth(commandTree, prequire)
  await contexts(commandTree, prequire)
  await status(commandTree, prequire)
  await kubectl(commandTree, prequire)
  await istio(commandTree, prequire)
  await kiali(commandTree, prequire)

  if (!inBrowser()) {
    const kedit: PluginRegistration = (await import('./lib/controller/kedit')).default
    await kedit(commandTree, prequire)
    debug('kedit')
  }
}
