import React from 'react'

import { BaseNode, createBaseNode } from '../nodes/base'

type Context = {
  tree: BaseNode
}

export const TreeContext = React.createContext<Context>({
  tree: createBaseNode(),
})
