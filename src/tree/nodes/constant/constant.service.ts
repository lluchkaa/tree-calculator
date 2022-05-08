import { BaseService, NodeType } from '../base'

export const ConstantService: BaseService<NodeType.constant, boolean, boolean> =
  {
    canHaveMoreChildren: () => false,
    hasValueReady: (node) => node.value !== null,
    calculateValue: (node) => node.value,
  }
