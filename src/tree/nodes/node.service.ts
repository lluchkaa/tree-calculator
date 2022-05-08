import { BaseNode, NodeType } from './base'
import { KeyService } from '../key'

import { AttributeService } from './attribute'
import { ConstantService } from './constant'
import { OperationService } from './operation'

export const NodeService = {
  service: (type: NodeType) =>
    ({
      [NodeType.constant]: ConstantService,
      [NodeType.attribute]: AttributeService,
      [NodeType.operation]: OperationService,
    }[type]),

  getNodeByKey: (start: BaseNode, key: string | number[]): BaseNode | null => {
    const keyList = Array.isArray(key) ? key : KeyService.splitKey(key)
    try {
      return keyList.reduce((node, index) => {
        if (!node) {
          throw new Error('Node not found')
        } else {
          return node.children?.[index] ?? null
        }
      }, start as BaseNode | null)
    } catch (e) {
      return null
    }
  },

  calculateValue: (node: BaseNode, options?: Record<string, unknown>) => {
    if (!node.type) {
      return null
    }

    return NodeService.service(node.type)?.calculateValue(
      node as never,
      options,
    )
  },

  canHaveMoreChildren: (node: BaseNode) => {
    if (!node.type) {
      return null
    }

    return NodeService.service(node.type)?.canHaveMoreChildren(node as never)
  },
}
