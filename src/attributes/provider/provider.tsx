import React, { useCallback, useMemo, useState } from 'react'
import { AttributeItem } from '../attribute.types'

import { AttributesContext, AttributesContextType } from './context'

type Props = {
  children?: React.ReactNode
}

export const AttributesProvider = ({ children }: Props) => {
  const [attributesList, setAttributesList] = useState<AttributeItem[]>([])

  const attributes = useMemo(
    () =>
      attributesList.reduce((acc, { key, value }) => {
        acc[key] = value
        return acc
      }, {} as AttributesContextType['attributes']),
    [attributesList],
  )

  const addAttribute = useCallback(
    ({ key = '', value = false }: Partial<AttributeItem> = {}) => {
      setAttributesList((prev) => [...prev, { key, value }])
    },
    [],
  )

  const updateAttribute = useCallback(
    (index: number, item: Partial<AttributeItem> = {}) =>
      setAttributesList((prev) => {
        if (prev.length <= index || index < 0) {
          return prev
        }
        return [
          ...prev.slice(0, index),
          { ...prev[index], ...item },
          ...prev.slice(index + 1),
        ]
      }),
    [],
  )

  const deleteAttribute = useCallback(
    (index: number) =>
      setAttributesList((prev) => {
        if (prev.length <= index || index < 0) {
          return prev
        }
        return [...prev.slice(0, index), ...prev.slice(index + 1)]
      }),
    [],
  )

  const contextValue = useMemo<AttributesContextType>(
    () => ({
      attributesList,
      attributes,
      addAttribute,
      updateAttribute,
      deleteAttribute,
    }),
    [
      attributesList,
      attributes,
      addAttribute,
      updateAttribute,
      deleteAttribute,
    ],
  )

  return (
    <AttributesContext.Provider value={contextValue}>
      {children}
    </AttributesContext.Provider>
  )
}
