export enum NodeType {
  operation,
  constant,
  attribute,
}

export type BaseNode<
  T extends NodeType | null = NodeType | null,
  V = unknown,
> = {
  type: T
  value: V | null
  children: BaseNode[] | null
}
