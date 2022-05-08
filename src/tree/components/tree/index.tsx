import React from 'react'

import { ContainerComponentNode } from '../container-node'

import { useTree } from '../../hooks'

export const Tree = () => {
  const { tree } = useTree()

  return (
    <>
      <div className="tree-container">
        <ContainerComponentNode nodeKey="" />
      </div>
      <pre>{JSON.stringify(tree, null, 4)}</pre>
    </>
  )
}
