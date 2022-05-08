import { BaseNode, NodeType } from '../../nodes/base'

export type AddNodeOptions = {
  key: string
}

export type UpdateNodeOptions<
  T extends NodeType | null = NodeType | null,
  V = unknown,
> = {
  key: string
  params: Partial<BaseNode<T, V>>
}

export type DeleteNodeOptions = {
  key: string
}
