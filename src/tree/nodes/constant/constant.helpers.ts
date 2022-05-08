import { BaseNode, NodeType } from '../base'
import type { ConstantNode } from './constant.type'

export const isConstantNode = (node: BaseNode): node is ConstantNode =>
  node.type === NodeType.constant
