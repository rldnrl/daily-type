import { KeyBase } from './key-base'

export type Dictionary<T, K extends KeyBase = string> = { [key in K]: T }
