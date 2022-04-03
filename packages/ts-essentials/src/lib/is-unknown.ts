import { IsAny } from './is-any'

export type IsUnknown<T> = IsAny<T> extends true
  ? false
  : T extends unknown
  ? true
  : false
