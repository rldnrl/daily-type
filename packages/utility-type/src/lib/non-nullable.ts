/**
 * Null 아닌 타입
 * MyNonNullable<string | null | undefined>
 * 결과: string
 *
 * Null이나 Undefined가 아닌 타입(built-in)
 * type NonNullable<A> = A extends null | undefined ? never : A
 */

export type MyNonNullable<A> = A extends null ? never : A
