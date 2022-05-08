import React from 'react'

import { AttributeItem } from '../attribute.types'
import { noop } from '../../utils'

export type AttributesContextType = {
  attributesList: AttributeItem[]
  attributes: Record<string, boolean>
  addAttribute: (item?: Partial<AttributeItem>) => void
  updateAttribute: (index: number, item?: Partial<AttributeItem>) => void
  deleteAttribute: (index: number) => void
}

export const AttributesContext = React.createContext<AttributesContextType>({
  attributesList: [],
  attributes: {},
  addAttribute: noop,
  updateAttribute: noop,
  deleteAttribute: noop,
})
