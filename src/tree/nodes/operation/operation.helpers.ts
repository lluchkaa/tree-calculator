import { BaseNode, NodeType } from '../base'
import type { OperationNode } from './operation.type'

export const isOperationNode = (node: BaseNode): node is OperationNode =>
  node.type === NodeType.operation
