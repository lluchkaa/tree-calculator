import React, { useCallback, useMemo } from 'react'
import { AttributeItem } from '../../attribute.types'

type Props = {
  attribute: AttributeItem
  index: number
  updateAttribute: (index: number, item?: Partial<AttributeItem>) => void
  deleteAttribute: (index: number) => void
}

export const AttributeItemComponent = ({
  attribute,
  index,
  updateAttribute,
  deleteAttribute,
}: Props) => {
  const onUpdateKey = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      updateAttribute(index, { key: event.target.value }),
    [updateAttribute, index],
  )

  const onUpdateValue = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      updateAttribute(index, { value: event.target.value === 'true' }),
    [updateAttribute, index],
  )

  const onDeleteAttribute = useCallback(
    () => deleteAttribute(index),
    [deleteAttribute, index],
  )

  const options = useMemo(
    () =>
      [true, false].map((type) => (
        <option key={String(type)} value={type as never}>
          {String(type)}
        </option>
      )),
    [],
  )

  return (
    <div className="attribute-item">
      <input value={attribute.key} onChange={onUpdateKey} />
      <select value={attribute.value as never} onChange={onUpdateValue}>
        {options}
      </select>
      <button type="button" onClick={onDeleteAttribute}>
        x
      </button>
    </div>
  )
}
