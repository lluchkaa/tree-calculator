import type { BaseNode } from './base.type'

export const createBaseNode = (): BaseNode => ({
  type: null,
  value: null,
  children: [],
})
