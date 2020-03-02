/*
 * Copyright 2020 IBM Corporation
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

import * as React from 'react'
import { InlineLoading } from 'carbon-components-react'

import '../../web/css/static/loading.scss'
import 'carbon-components/scss/components/inline-loading/_inline-loading.scss'

interface Props {
  description?: string
}

export default class Loading extends React.PureComponent<Props> {
  public render() {
    return (
      <div className="flex-layout flex-align-top larger-text">
        <InlineLoading status="active" className="fade-in" description={this.props.description} />
      </div>
    )
  }
}