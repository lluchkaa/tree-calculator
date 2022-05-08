import { KEY_SEPARATOR } from './key.constants'

export const KeyService = {
  splitKey: (key: string, { separator = KEY_SEPARATOR } = {}): number[] =>
    key.split(separator).map(Number),

  appendKey: (
    key: string,
    childKey: number,
    { separator = KEY_SEPARATOR } = {},
  ): string => `${key}${separator}${childKey}`,
}
