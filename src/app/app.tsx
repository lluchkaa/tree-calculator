import React from 'react'

import { Tree } from '../tree/components/tree'
import { TreeProvider } from '../tree/provider'

import { Attributes } from '../attributes/components/attributes'
import { AttributesProvider } from '../attributes/provider'

import { Info } from '../info/info'

import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/tree.css'
import '../styles/attributes.css'
import '../styles/info.css'

export const App = () => (
  <AttributesProvider>
    <TreeProvider>
      <Attributes />
      <Tree />
      <Info />
    </TreeProvider>
  </AttributesProvider>
)
