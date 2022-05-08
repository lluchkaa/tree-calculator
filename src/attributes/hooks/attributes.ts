import { useContext } from 'react'

import { AttributesContext } from '../provider'

export const useAttributes = () => useContext(AttributesContext)
