import { useContext } from 'react'

import { TreeContext } from '../provider'

export const useTree = () => useContext(TreeContext)
