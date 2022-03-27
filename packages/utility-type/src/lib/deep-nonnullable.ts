/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 객체 타입에서 null 타입을 없애주는 타입
 */
export type DeepNonNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepNonNullableArray<T[number]>
  : T extends object
  ? _DeepNonNullableObject<T>
  : T

type _DeepNonNullableArray<T> = Array<DeepNonNullable<NonNullable<T>>>

type _DeepNonNullableObject<T extends object> = {
  [P in keyof T]-?: DeepNonNullable<NonNullable<T>>
}
