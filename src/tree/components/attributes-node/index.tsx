import React, { useCallback, useMemo } from 'react'

import { Children } from '../children'
import { useTree } from '../../hooks'

import { AttributeNode } from '../../nodes/attribute'
import { DeleteNodeButton } from '../delete-node-button'
import { useAttributes } from '../../../attributes/hooks'

type Props = {
  node: AttributeNode
  nodeKey: string
}

export const AttributeNodeComponent = ({ node, nodeKey }: Props) => {
  const { updateNode } = useTree()
  const { attributes } = useAttributes()

  const options = useMemo(
    () =>
      Object.keys(attributes).map((attribute) => (
        <option key={attribute} value={attribute}>
          {attribute}
        </option>
      )),
    [attributes],
  )

  const onAttributeSelect = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateNode(nodeKey, { value: event.target.value })
    },
    [updateNode, nodeKey],
  )

  return (
    <div className="node operation-node">
      <div className="controls">
        <select value={node.value as never} onChange={onAttributeSelect}>
          {options}
        </select>
        <DeleteNodeButton nodeKey={nodeKey} />
      </div>
      <Children node={node} nodeKey={nodeKey} />
    </div>
  )
}
