import React from 'react'

import { BaseNodeComponent } from '../base-node'
import { NodeType } from '../../nodes/base'
import { useNodeByKey } from '../../hooks'

import { OperationNode } from '../../nodes/operation'
import { OperationNodeComponent } from '../operation-node'

import { ConstantNode } from '../../nodes/constant'
import { ConstantNodeComponent } from '../constant-node'

import { AttributeNode } from '../../nodes/attribute'
import { AttributeNodeComponent } from '../attributes-node'

type Props = {
  nodeKey: string
}

export const ContainerComponentNode = ({ nodeKey }: Props) => {
  const node = useNodeByKey(nodeKey)

  if (!node) {
    return null
  }

  switch (node.type) {
    case NodeType.operation: {
      return (
        <OperationNodeComponent
          node={node as OperationNode}
          nodeKey={nodeKey}
        />
      )
    }
    case NodeType.constant: {
      return (
        <ConstantNodeComponent node={node as ConstantNode} nodeKey={nodeKey} />
      )
    }
    case NodeType.attribute: {
      return (
        <AttributeNodeComponent
          node={node as AttributeNode}
          nodeKey={nodeKey}
        />
      )
    }
    default: {
      return <BaseNodeComponent node={node} nodeKey={nodeKey} />
    }
  }
}
