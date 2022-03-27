/**
 * 차집합
 * SetDifference<'1' | '2' | '3', '2' | '3' | '5' | '9'>
 * 결과: '1'
 *
 * SetDifference<string | number | () => void, Function>
 * 결과: string | number
 */

export type SetDifference<A, B> = A extends B ? never : A
