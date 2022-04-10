import { BuiltIn } from './built-in'
import { IsTuple } from './is-tuple'
import { IsUnknown } from './is-unknown'

export type DeepPartial<T> = T extends BuiltIn
  ? T
  : T extends Map<infer K, infer U>
  ? Map<DeepPartial<K>, DeepPartial<U>>
  : T extends ReadonlyMap<infer K, infer U>
  ? ReadonlyMap<DeepPartial<K>, DeepPartial<U>>
  : T extends WeakMap<infer K, infer U>
  ? WeakMap<DeepPartial<K>, DeepPartial<U>>
  : T extends Set<infer U>
  ? Set<DeepPartial<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepPartial<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepPartial<U>>
  : T extends Array<infer U>
  ? T extends IsTuple<T>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Array<DeepPartial<U> | undefined>
  : T extends Promise<infer U>
  ? Promise<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]: DeepPartial<T[K]> }
  : IsUnknown<T> extends true
  ? unknown
  : Partial<T>
