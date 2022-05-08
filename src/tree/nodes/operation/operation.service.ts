import { BaseService, NodeType } from '../base'
import { NodeService } from '../node.service'
import { OperationType } from './operation.type'

export const OperationService: BaseService<
  NodeType.operation,
  OperationType,
  boolean
> = {
  canHaveMoreChildren: (node) => {
    switch (node.value) {
      case OperationType.and:
      case OperationType.or:
        return true
      case OperationType.not:
        return !node.children || node.children?.length < 1
      default: {
        return false
      }
    }
  },
  hasValueReady: (node, options) =>
    (node.value !== null &&
      (node.children?.length ?? 0) > 0 &&
      node.children?.every((child) =>
        NodeService.hasValueReady(child, options),
      )) ??
    false,
  calculateValue: (node, options) => {
    switch (node.value) {
      case OperationType.and: {
        return (
          node.children?.every((child) =>
            NodeService.calculateValue(child, options),
          ) ?? null
        )
      }
      case OperationType.or: {
        return (
          node.children?.some((child) =>
            NodeService.calculateValue(child, options),
          ) ?? null
        )
      }
      case OperationType.not: {
        const child = node.children?.[0]
        if (!child) {
          return null
        }
        return !NodeService.calculateValue(child, options) ?? null
      }
      default: {
        return null
      }
    }
  },
}
