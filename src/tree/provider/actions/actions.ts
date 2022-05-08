import { produce } from 'immer'

import { BaseNode, createBaseNode } from '../../nodes/base'
import { NodeService } from '../../nodes'

import {
  AddNodeOptions,
  DeleteNodeOptions,
  UpdateNodeOptions,
} from './actions.types'
import { KeyService } from '../../key'

export const TreeActions = {
  addNode: (root: BaseNode, { key = '' }: AddNodeOptions) =>
    produce(root, (draft) => {
      const parent = NodeService.getNodeByKey(draft, key)
      parent?.children?.push(createBaseNode())
    }),

  updateNode: (root: BaseNode, { key, params }: UpdateNodeOptions) =>
    produce(root, (draft) => {
      const node = NodeService.getNodeByKey(draft, key)
      if (!node) {
        return
      }

      Object.keys(params).forEach((nodeKey) => {
        node[nodeKey as keyof BaseNode] =
          (params[nodeKey as keyof BaseNode] as never) ?? null
      })
    }),

  deleteNode: (root: BaseNode, { key }: DeleteNodeOptions) => {
    if (!key) {
      return createBaseNode()
    }

    return produce(root, (draft) => {
      const splittedKey = KeyService.splitKey(key)

      const parentKey = splittedKey.slice(0, -1)
      const childKey = splittedKey[splittedKey.length - 1]

      const parent = NodeService.getNodeByKey(draft, parentKey)

      if (!parent) {
        return
      }

      parent.children?.splice(childKey, 1)
    })
  },
}
