import React, { useCallback, useMemo } from 'react'

import { Children } from '../children'
import { useTree } from '../../hooks'

import { ConstantNode } from '../../nodes/constant'
import { DeleteNodeButton } from '../delete-node-button'

type Props = {
  node: ConstantNode
  nodeKey: string
}

export const ConstantNodeComponent = ({ node, nodeKey }: Props) => {
  const { updateNode } = useTree()

  const options = useMemo(
    () =>
      [true, false].map((type) => (
        <option key={String(type)} value={type as never}>
          {String(type)}
        </option>
      )),
    [],
  )

  const onConstantSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateNode(nodeKey, { value: event.target.value })
    },
    [updateNode, nodeKey],
  )

  return (
    <div className="node operation-node">
      <div className="controls">
        <select value={node.value as never} onChange={onConstantSelect}>
          {options}
        </select>
        <DeleteNodeButton nodeKey={nodeKey} />
      </div>
      <Children node={node} nodeKey={nodeKey} />
    </div>
  )
}
