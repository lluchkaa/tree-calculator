import { BaseNode } from '../nodes/base'
import { NodeService } from '../nodes'

import { useTree } from './tree'

export const useNodeByKey = (key: string): BaseNode | null => {
  const { tree } = useTree()

  return NodeService.getNodeByKey(tree, key)
}
