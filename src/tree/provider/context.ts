import React from 'react'

import { BaseNode, createBaseNode } from '../nodes/base'
import { noop } from '../../utils'

export type TreeContextType = {
  tree: BaseNode
  addNode: (key: string) => void
}

export const TreeContext = React.createContext<TreeContextType>({
  tree: createBaseNode(),
  addNode: noop,
})
