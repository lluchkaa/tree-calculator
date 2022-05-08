import { BaseNode } from './base'
import { KeyService } from '../key'

export const NodeService = {
  getNodeByKey: (start: BaseNode, key: string | number[]): BaseNode | null => {
    const keyList = Array.isArray(key) ? key : KeyService.splitKey(key)
    try {
      return keyList.reduce((node, index) => {
        if (!node) {
          throw new Error('Node not found')
        } else {
          return node.children?.[index] ?? null
        }
      }, start as BaseNode | null)
    } catch (e) {
      return null
    }
  },
}
