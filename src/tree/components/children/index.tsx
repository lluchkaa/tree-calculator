import React, { useCallback, useMemo } from 'react'

import { BaseNode } from '../../nodes/base'
import { KeyService } from '../../key'
import { NodeService } from '../../nodes'
import { useTree } from '../../hooks'

import { ContainerComponentNode } from '../container-node'

type Props = {
  node: BaseNode
  nodeKey: string
}

export const Children = ({ node, nodeKey }: Props) => {
  const { addNode } = useTree()

  const nodeChildren = useMemo(
    () =>
      node.children?.map((childNode, index) => (
        // const Component = getComponent(node)
        // if (!Component) {
        //   return null
        // }
        <ContainerComponentNode
          key={index}
          nodeKey={KeyService.appendKey(nodeKey, index)}
        />
      )),
    [node, nodeKey],
  )

  const addMore = useCallback(() => {
    addNode(nodeKey)
  }, [addNode, nodeKey])

  const addMoreChild = useMemo(
    () =>
      NodeService.canHaveMoreChildren(node) ? (
        <button type="button" onClick={addMore}>
          +
        </button>
      ) : null,
    [addMore, node],
  )

  return (
    <div className="children">
      {nodeChildren}
      {addMoreChild}
    </div>
  )
}
