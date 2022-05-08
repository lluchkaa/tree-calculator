import { BaseNode, NodeType } from '../base'

export enum OperationType {
  and,
  or,
  not,
}

export type OperationNode = BaseNode<NodeType.operation, OperationType>
