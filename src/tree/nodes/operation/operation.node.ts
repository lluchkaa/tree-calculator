import { NodeType } from '../base'
import { OperationNode } from './operation.type'

export const createOperationNode = (): OperationNode => ({
  type: NodeType.operation,
  value: null,
  children: [],
})
