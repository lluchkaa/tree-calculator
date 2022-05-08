import React from 'react'

import { noop } from '../../utils'

export type AttributesContextType = {
  attributes: Record<string, boolean>
  updateAttribute: (key: string, value: boolean) => void
  deleteAttribute: (key: string) => void
}

export const AttributesContext = React.createContext<AttributesContextType>({
  attributes: {},
  updateAttribute: noop,
  deleteAttribute: noop,
})
