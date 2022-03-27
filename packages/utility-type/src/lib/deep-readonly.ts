/* eslint-disable @typescript-eslint/no-explicit-any */
import { Primitive } from './primitive'

/**
 * 깊숙히 들어가는 객체 타입의 프로퍼티를 readonly로 만들어주는 타입
 */

export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T

type _DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>

type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
