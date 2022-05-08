export enum NodeType {
  operation = 'operation',
  constant = 'constant',
  attribute = 'attribute',
}

export type BaseNode<
  T extends NodeType | null = NodeType | null,
  V = unknown,
> = {
  type: T | null
  value: V | null
  children: BaseNode[] | null
}

export type BaseService<
  T extends NodeType | null = NodeType | null,
  V = unknown,
  CV = unknown,
  O extends Record<string, unknown> = Record<string, unknown>,
> = {
  canHaveMoreChildren: (node: BaseNode<T, V>) => boolean
  hasValueReady: (node: BaseNode<T, V>, options?: O) => boolean
  calculateValue: (node: BaseNode<T, V>, options?: O) => CV | null
}
