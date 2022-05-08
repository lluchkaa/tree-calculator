import { AttributeNode } from './attribute.type'
import { NodeType } from '../base'

export const createAttributeNode = (): AttributeNode => ({
  type: NodeType.attribute,
  value: null,
  children: null,
})
