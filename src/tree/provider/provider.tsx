import React, { useCallback, useMemo, useState } from 'react'

import { BaseNode, createBaseNode } from '../nodes/base'
import { TreeContext, TreeContextType } from './context'
import { TreeActions } from './actions'

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

  const updateNode = useCallback(
    (key: string, params: Partial<BaseNode>) =>
      setTree((prevTree) =>
        TreeActions.updateNode(prevTree, {
          key,
          params,
        }),
      ),
    [],
  )

  const deleteNode = useCallback(
    (key: string) =>
      setTree((prevTree) =>
        TreeActions.deleteNode(prevTree, {
          key,
        }),
      ),
    [],
  )

  const contextValue = useMemo<TreeContextType>(
    () => ({
      tree,
      addNode,
      updateNode,
      deleteNode,
    }),
    [tree, addNode, updateNode, deleteNode],
  )

  return (
    <TreeContext.Provider value={contextValue}>{children}</TreeContext.Provider>
  )
}
