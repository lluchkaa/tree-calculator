import React from 'react'

import { Tree } from '../tree/components/tree'
import { TreeProvider } from '../tree/provider'

import { AttributesProvider } from '../attributes/provider'

import '../styles/reset.css'
import '../styles/normalize.css'
import '../styles/tree.css'

export const App = () => (
  <AttributesProvider>
    <TreeProvider>
      <Tree />
    </TreeProvider>
  </AttributesProvider>
)
