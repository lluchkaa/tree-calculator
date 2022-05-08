import React, { useCallback } from 'react'

import { AttributeItemComponent } from '../attribute-item'
import { useAttributes } from '../../hooks'

export const Attributes = () => {
  const { attributesList, updateAttribute, deleteAttribute, addAttribute } =
    useAttributes()

  const onAddAttribute = useCallback(
    () =>
      addAttribute({
        key: String(attributesList.length),
        value: true,
      }),
    [addAttribute, attributesList],
  )

  const attributesChild = attributesList.map((attribute, index) => (
    <AttributeItemComponent
      key={index}
      attribute={attribute}
      index={index}
      updateAttribute={updateAttribute}
      deleteAttribute={deleteAttribute}
    />
  ))

  return (
    <div className="attributes">
      {attributesChild}
      <button type="button" onClick={onAddAttribute}>
        +
      </button>
    </div>
  )
}
