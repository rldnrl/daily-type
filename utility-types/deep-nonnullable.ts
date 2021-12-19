type NonNullable<A> = A extends null ? never : A

/**
 * 객체 타입에서 null 타입을 없애주는 타입
 */
type DeepNonNullable<T> = T extends (...args: any[]) => any
  ? T
  : T extends any[]
  ? _DeepNonNullableArray<T[number]>
  : T extends object
  ? _DeepNonNullableObject<T>
  : T

interface _DeepNonNullableArray<T> extends Array<DeepNonNullable<NonNullable<T>>> {}

type _DeepNonNullableObject<T extends object> = {
  [P in keyof T]-?: DeepNonNullable<NonNullable<T>>
}