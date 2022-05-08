import React from 'react'

import { ContainerComponentNode } from '../container-node'

import { useTree } from '../../hooks'

export const Tree = () => {
  const { tree } = useTree()

  return (
    <>
      <pre>{JSON.stringify(tree, null, 8)}</pre>
      <ContainerComponentNode nodeKey="" />
    </>
  )
}
