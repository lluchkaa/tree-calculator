import React, { useCallback, useMemo, useState } from 'react'

import { AttributesContext, AttributesContextType } from './context'

type Props = {
  children?: React.ReactNode
}

export const AttributesProvider = ({ children }: Props) => {
  const [attributes, setAttributes] = useState<Record<string, boolean>>({})

  const updateAttribute = useCallback(
    (key: string, value: boolean) =>
      setAttributes((prev) => ({
        ...prev,
        [key]: value,
      })),
    [],
  )

  const deleteAttribute = useCallback(
    (key: string) =>
      setAttributes(({ ...prev }) => {
        delete prev[key]
        return prev
      }),
    [],
  )

  const contextValue = useMemo<AttributesContextType>(
    () => ({
      attributes,
      updateAttribute,
      deleteAttribute,
    }),
    [attributes, updateAttribute, deleteAttribute],
  )

  return (
    <AttributesContext.Provider value={contextValue}>
      {children}
    </AttributesContext.Provider>
  )
}
