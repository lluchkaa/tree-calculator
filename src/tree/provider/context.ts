import React from 'react'

import { BaseNode, createBaseNode } from '../nodes/base'
import { noop } from '../../utils'

export type TreeContextType = {
  tree: BaseNode
  addNode: (key: string) => void
  updateNode: (key: string, params: Partial<BaseNode>) => void
  deleteNode: (key: string) => void
}

export const TreeContext = React.createContext<TreeContextType>({
  tree: createBaseNode(),
  addNode: noop,
  updateNode: noop,
  deleteNode: noop,
})
