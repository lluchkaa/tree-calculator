import { BaseNode, NodeType } from '../base'

export enum OperationType {
  and = 'and',
  or = 'or',
  not = 'not',
}

export type OperationNode = BaseNode<NodeType.operation, OperationType>
