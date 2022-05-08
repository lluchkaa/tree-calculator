import React, { useCallback, useMemo } from 'react'
import { useTree } from '../../hooks'

import { OPERATION_TYPES, OperationNode } from '../../nodes/operation'
import { Children } from '../children'
import { DeleteNodeButton } from '../delete-node-button'
import { NodeValueComponent } from '../node-value'

type Props = {
  node: OperationNode
  nodeKey: string
}

export const OperationNodeComponent = ({ node, nodeKey }: Props) => {
  const { updateNode } = useTree()

  const options = useMemo(
    () =>
      OPERATION_TYPES.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      )),
    [],
  )

  const onOperationSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateNode(nodeKey, { value: event.target.value })
    },
    [updateNode, nodeKey],
  )

  return (
    <div className="node operation-node">
      <div className="controls">
        <select value={node.value ?? undefined} onChange={onOperationSelect}>
          <option value="">-----</option>
          {options}
        </select>
        <NodeValueComponent node={node} />
        <DeleteNodeButton nodeKey={nodeKey} />
      </div>
      <Children node={node} nodeKey={nodeKey} />
    </div>
  )
}
