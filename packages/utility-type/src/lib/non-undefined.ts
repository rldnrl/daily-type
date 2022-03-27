/**
 * Undefined가 아닌 타입
 * NonUndefined<string | null | undefined>
 * 결과: string | null
 */

export type NonUndefined<A> = A extends undefined ? never : A
