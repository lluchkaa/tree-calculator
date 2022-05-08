import { BaseService, NodeType } from '../base'

type AttributeServiceOptions = {
  attributes?: Record<string, boolean>
}

export const AttributeService: BaseService<
  NodeType.attribute,
  string,
  boolean,
  AttributeServiceOptions
> = {
  canHaveMoreChildren: () => false,
  hasValueReady: (node, { attributes = {} } = {}) =>
    node.value !== null && attributes[node.value] !== undefined,
  calculateValue: (node, { attributes = {} } = {}) =>
    node.value ? attributes[node.value] : null,
}
