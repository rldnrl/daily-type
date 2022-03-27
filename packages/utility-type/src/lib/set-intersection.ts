/**
 * 교집합 타입
 * SetIntersection<'1' | '2' | '3', '2' | '3' | '5' | '9'>
 * 결과: '2' | '3'
 *
 * SetIntersection<string | number | () => void, Function>
 * 결과: () => void
 */

export type SetIntersection<A, B> = A extends B ? A : never
