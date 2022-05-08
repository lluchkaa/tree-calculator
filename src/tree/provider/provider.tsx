import React, { useMemo, useState } from 'react'

import { createBaseNode } from '../nodes/base'
import { TreeContext } from './context'

type Props = {
  children?: React.ReactNode
}

export const TreeProvider = ({ children }: Props) => {
  const [tree] = useState(createBaseNode())

  const contextValue = useMemo(
    () => ({
      tree,
    }),
    [tree],
  )

  return (
    <TreeContext.Provider value={contextValue}>{children}</TreeContext.Provider>
  )
}
