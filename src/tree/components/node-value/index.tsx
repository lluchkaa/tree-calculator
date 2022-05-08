import React, { useMemo } from 'react'

import { NodeService } from '../../nodes'
import { useAttributes } from '../../../attributes/hooks'

import { BaseNode } from '../../nodes/base'

type Props = {
  node: BaseNode
}

export const NodeValueComponent = ({ node }: Props) => {
  const { attributes } = useAttributes()

  const hasValueReady = useMemo(
    () => NodeService.hasValueReady(node, { attributes }),
    [node, attributes],
  )

  const value = useMemo(
    () => NodeService.calculateValue(node, { attributes }),
    [node, attributes],
  )

  return (
    <div className="node-value">
      {hasValueReady ? `Value: ${value}` : 'Value is not ready'}
    </div>
  )
}
