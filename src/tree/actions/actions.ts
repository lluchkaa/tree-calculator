import { produce } from 'immer'

import { BaseNode, createBaseNode } from '../nodes/base'
import { NodeService } from '../nodes'

import { AddNodeOptions } from './actions.types'

export const TreeActions = {
  addNode: (root: BaseNode, { key = '' }: AddNodeOptions) =>
    produce(root, (draft) => {
      const parent = NodeService.getNodeByKey(draft, key)
      parent?.children?.push(createBaseNode())
    }),
}
