import React, { useCallback, useMemo } from 'react'
import { useTree } from '../../hooks'

import { BaseNode, NODE_TYPES, NodeType } from '../../nodes/base'

type Props = {
  node: BaseNode
  nodeKey: string
}

export const BaseNodeComponent = ({ node, nodeKey }: Props) => {
  const { updateNode } = useTree()

  const options = useMemo(
    () =>
      NODE_TYPES.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      )),
    [],
  )

  const onTypeSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateNode(nodeKey, { type: event.target.value as NodeType })
    },
    [updateNode, nodeKey],
  )

  return (
    <div className="node operation-node">
      <select value={node.type ?? undefined} onChange={onTypeSelect}>
        <option value="">---</option>
        {options}
      </select>
    </div>
  )
}
