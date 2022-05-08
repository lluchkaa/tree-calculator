import { ConstantNode } from './constant.type'
import { NodeType } from '../base'

export const createConstantNode = (): ConstantNode => ({
  type: NodeType.constant,
  value: null,
  children: null,
})
