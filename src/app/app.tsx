import React from 'react'

import { Tree } from '../tree/components/tree'
import { TreeProvider } from '../tree/provider'

import { AttributesProvider } from '../attributes/provider'

export const App = () => (
  <AttributesProvider>
    <TreeProvider>
      <Tree />
    </TreeProvider>
  </AttributesProvider>
)
