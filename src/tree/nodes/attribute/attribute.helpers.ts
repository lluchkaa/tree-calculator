import { BaseNode, NodeType } from '../base'
import type { AttributeNode } from './attribute.type'

export const isAttributeNode = (node: BaseNode): node is AttributeNode =>
  node.type === NodeType.attribute
