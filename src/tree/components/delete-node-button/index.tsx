import React, { useCallback } from 'react'

import { useTree } from '../../hooks'

type Props = {
  nodeKey: string
}

export const DeleteNodeButton = ({ nodeKey }: Props) => {
  const { deleteNode } = useTree()

  const onDelete = useCallback(() => {
    deleteNode(nodeKey)
  }, [deleteNode, nodeKey])

  return (
    <button type="button" onClick={onDelete} className="delete-node">
      x
    </button>
  )
}
