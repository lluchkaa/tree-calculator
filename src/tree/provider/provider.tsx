import React, { useCallback, useMemo, useState } from 'react'

import { TreeContext, TreeContextType } from './context'
import { createBaseNode } from '../nodes/base'
import { TreeActions } from '../actions'

type Props = {
  children?: React.ReactNode
}

export const TreeProvider = ({ children }: Props) => {
  const [tree, setTree] = useState(createBaseNode())

  const addNode = useCallback(
    (key: string) =>
      setTree((prevTree) => TreeActions.addNode(prevTree, { key })),
    [],
  )

  const contextValue = useMemo<TreeContextType>(
    () => ({
      tree,
      addNode,
    }),
    [tree, addNode],
  )

  return (
    <TreeContext.Provider value={contextValue}>{children}</TreeContext.Provider>
  )
}
