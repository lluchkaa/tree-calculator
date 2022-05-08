import React from 'react'

import { useAttributes } from '../attributes/hooks'
import { useTree } from '../tree/hooks'

export const Info = () => {
  const { tree } = useTree()
  const { attributes } = useAttributes()

  return (
    <div className="info">
      <pre className="info-tree">{JSON.stringify(tree, null, 2)}</pre>
      <pre className="info-attributes">
        {JSON.stringify(attributes, null, 2)}
      </pre>
    </div>
  )
}
