import type { BaseNode, NodeType } from './base.type'

export const createBaseNode = <
  T extends NodeType | null = NodeType | null,
  V = unknown,
>({
  type = null,
  value = null,
  children = [],
}: Partial<BaseNode<T, V>> = {}): BaseNode<T, V> => ({
  type: type ?? null,
  value: value ?? null,
  children: children ?? [],
})
